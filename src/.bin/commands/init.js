const fs = require('fs');
const path = require('path');

module.exports = function () {
  let existsConfigFile = fs.existsSync(path.resolve(process.cwd(), "md.config.js"));
  if (existsConfigFile) {
    console.warn('Has exists config file.');
  } else {
    let defaultConfigFile = fs.readFileSync(path.resolve(__dirname, '../config/default.config.js'));
    fs.writeFileSync(path.resolve(process.cwd(), "./md.config.js"), defaultConfigFile);
  }
}