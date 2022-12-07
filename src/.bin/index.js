#!/usr/bin/env node
const program = require('commander');
const path = require('path');
const fs = require('fs');

// commands import
const server = require('./commands/server');
const init = require('./commands/init');

program.version(require(path.resolve(process.cwd(), "./package.json")).version);

program.command("server")
  .description("Run server for doc in local.")
  .action(() => {
    server();
  });

program.command("init")
  .description("Generate the config file in project root path.")
  .action(() => {
    init();
  });

// program.help((str) => str);

program.parse(process.argv);