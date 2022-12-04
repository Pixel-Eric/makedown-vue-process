import { InitConfig } from "../types/index";
import { readConfigFile, initOutputDir } from "./file";
import { builderHeader, builderHome, builderTabs } from "./vue";
import { compiler, server as webpackServer } from "./_webpack";

/**
 * 初始化用户配置选项
 */

export let config: InitConfig;

function initConfig() {
  initOutputDir();
  config = readConfigFile();
  builderHome(config?.home);
  builderHeader(config?.docInfo);
  builderTabs(config?.tabs);
}

export function build() {
  initConfig();
  compiler();
  console.info('编译完成');
}

export function server() {
  initConfig();
  webpackServer();
}