const path = require('path');

module.exports = {
  // md-process read file path
  path: path.resolve(__dirname, './example/'),
  output: {
    path: path.resolve(__dirname, 'docs')
  },
  mode: 'development' // 开发模式构建
}