const path = require('path');

module.exports = {
  // md-process read file path
  docInfo: {
    name: "测试编译标题",
    version: "0.1.1",
    tag: "快照"
  },
  home: './example/index.vue',
  tabs: [
    {
      title: "什么是Node?",
      name: "nodejs",
      path: './example/node_js/'
    },
    {
      title: "关于",
      name: "about",
      path: './example/test/'
    }
  ],
  // path: path.resolve(__dirname, './example/'),
  output: {
    path: path.resolve(__dirname, 'docs')
  },
  options: {
    encoding: 'utf8'
  },
  mode: 'development' // 开发模式构建
}