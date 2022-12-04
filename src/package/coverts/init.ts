import { InitConfig } from "../types/index";
import { readConfigFile, initOutputDir } from "./file";
import { builderHeader, builderHome, builderTabs } from "./vue";
import { compiler } from "./_webpack";

/**
 * 初始化用户配置选项
 */

export let config: InitConfig;

export default function initProcess() {
  initOutputDir();
  config = readConfigFile();
  builderHome(config?.home);
  builderHeader(config?.docInfo);
  builderTabs(config?.tabs);
  compiler();
  console.info('编译完成');
}