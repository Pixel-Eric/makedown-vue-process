const fs = require('fs');
const path = require('path');

module.exports = function (source, destination) {
  fs.cpSync(source, destination, { recursive: true, force: true });
}