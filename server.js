const express = require('express');
const formidable = require('express-formidable');
const path = require('path');
const serveStatic = require('serve-static');
const rimraf = require('rimraf');
const fs = require('fs');
const _ = require('lodash');
const parse = require('./api/parser');

const app = express();
app.use(formidable.parse());
app.use(serveStatic(path.join(__dirname, '/client')));

app.listen(process.env.PORT || 3000, (err) => {
  if(err) console.log(err);

  console.log('app is listening on port 3000');
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/upload', function (req, res) {
  return parse(req.body.files)
    .then(final => {
    return console.log(final);
  }).then(err => {
    console.log(err);
  });
});

app.get('/download', (req, res) => {

  rimraf(path.join(__dirname, 'uploads'), (er) => {
    if (er) throw er;
  });
  res.download(path.join(__dirname,'uploads.zip'));
});
