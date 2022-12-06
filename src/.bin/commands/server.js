const path = require('path');
const copyDir = require('../utils/copyDir');
const ts = require('typescript');

const dirs = ["compiler", "template", "public"];

module.exports = function () {
  dirs.forEach(dir => {
    let source = path.join(process.cwd(), "/src/", dir);
    let destination = path.join(process.cwd(), "/dist", dir);
    copyDir(source, destination);
  })

  const { server } = require(path.resolve(process.cwd(), './dist/package/coverts/init'));
  server();
}