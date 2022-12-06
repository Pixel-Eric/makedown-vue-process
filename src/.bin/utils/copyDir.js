const fs = require('fs');
const path = require('path');
const dirs = ["compiler", "template", "public"];

module.exports = function () {
  dirs.forEach(dir => {
    let source = path.join(process.cwd(), "/src/", dir);
    let destination = path.join(process.cwd(), "/dist", dir);

    fs.cpSync(source, destination, { recursive: true, force: true });
  })
}