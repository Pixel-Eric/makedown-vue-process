const path = require('path');
const copyDir = require('../utils/copyDir');
const ts = require('typescript');

module.exports = function () {
  copyDir();
  const { server } = require(path.resolve(process.cwd(), './dist/package/coverts/init'));
  server();
}