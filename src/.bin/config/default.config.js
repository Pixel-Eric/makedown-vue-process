const path = require('path');

// md-process config
module.exports = {
  docInfo: {
    name: "New Doc",
    version: "0.0.1",
    tag: "Preview"
  },
  tabs: [
  ],
  output: {
    path: path.resolve(__dirname, 'docs')
  },
  mode: 'development'
}