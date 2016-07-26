const Promise = require('bluebird');
const fs = require('fs');
const path = require('path');
const EasyZip = require('easy-zip2').EasyZip;
const _ = require('lodash');

const parse = (files) => {
  // TODO: Use the first file name... regex it to create the folder name
  return new Promise((resolve, reject) => {
    fs.mkdir(path.join(__dirname, 'uploads'), (err) => { if (err) reject(err) });
    _.each(files, (file) => {
      const buffer = fs.readFileSync(file.path);
      const newPath = path.join(__dirname, `/uploads/${file.name}`);
      fs.writeFileSync(newPath, buffer);
    });

    const zip = new EasyZip();
    zip.zipFolder('./uploads', () => {
      zip.writeToFileSync('uploads.zip');
      resolve(zip);
    });
  });
};

exports.parse = parse;
