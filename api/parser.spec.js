import { assert } from 'chai';
import { parse } from './parser';
const fs = require('fs');
import path from 'path';


suite('Timestamp Parser', function(){
  test('Uploading a file', () => {
    const file = fs.readFileSync(path.resolve('./assets', 'img.jpg'));
    const files = [];
    files.push(file);
    console.log(files);
  });
});
