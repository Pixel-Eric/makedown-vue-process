#!/usr/bin/env node
const program = require('commander');
const path = require('path');
const { server } = require('../../dist/package/coverts/init');
const fs = require('fs');

program.version(require(path.resolve(process.cwd(), "./package.json")).version);

// 运行编译文档
program.command("server")
  .description("Run server for doc in local.")
  .action(() => {
    server();
  });

// 初始化配置文件
program.command("init")
  .description("Generate the config file in project root path.")
  .action(() => {
    let existsConfigFile = fs.existsSync(path.resolve(process.cwd(), "md.config.js"));
    if (existsConfigFile) {
      console.warn('Has exists config file.');
    } else {
      let defaultConfigFile = fs.readFileSync(path.resolve(__dirname, './config/default.config.js'));
      fs.writeFileSync(path.resolve(process.cwd(), "./md.config.js"), defaultConfigFile);
    }
  });

// program.help((str) => str);

program.parse(process.argv);