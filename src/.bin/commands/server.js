const path = require('path');
const fs = require('fs');
const copyDir = require('../utils/copyDir');
const ts = require('typescript');
const tsConfigOptions = require('../config/ts.config');

const dirs = ["compiler", "template", "public"];

module.exports = function () {;
  let tsHost = ts.createCompilerHost(tsConfigOptions);
  let program = ts.createProgram([path.resolve(process.cwd(), "src/index.ts")], tsConfigOptions, tsHost);
  program.emit();

  dirs.forEach(dir => {
    let source = path.join(process.cwd(), "/src/", dir);
    let destination = path.join(process.cwd(), "/dist", dir);
    copyDir(source, destination);
  })

  const { server } = require(path.resolve(process.cwd(), './dist/package/coverts/init'));
  server();
}