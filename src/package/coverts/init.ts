import { InitConfig } from "../types";
import { readConfigFile } from "./file";
import { builderHeader, builderTabs } from "./vue";
import { compiler } from "./webpack";

/**
 * 初始化用户配置选项
 */

export let config: InitConfig;

export default function initProcess() {
  console.info('正在加载配置信息');
  config = readConfigFile();
  builderHeader(config?.docInfo);
  console.dir(config);
  builderTabs(config?.tabs);
  // writeMenuJson(tree); // 写入目录列表
  // console.info('正在构建DOM树');
  // let _menu = createMenuDOM(tree);
  // console.info('正在构建Vue文件');
  // generateVue(_menu);
  console.info('等待编译');
  compiler();
  console.info('编译完成');
}


initProcess();