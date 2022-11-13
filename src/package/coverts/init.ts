import { InitConfig } from "../types";
import { createMenuDOM } from "./dom";
import { readAllMakeDownFile, readConfigFile, scanDirectory, writeMenuJson } from "./file";
import { parseAllTitle } from "./md";
import { generateVue } from "./vue";
import { compiler } from "./webpack";

/**
 * 初始化用户配置选项
 */

export let config: InitConfig;

export default function initProcess() {
  console.info('正在加载配置信息');
  config = readConfigFile();
  console.info('正在扫描目标路径下的MD文件信息');
  let _dirs: Array<string> = scanDirectory(config.path);
  console.info('正在解析MD文件内容');
  let _contents: Array<string> = readAllMakeDownFile(_dirs);
  let tree = parseAllTitle(_contents);
  writeMenuJson(tree); // 写入目录列表
  // console.info('正在构建DOM树');
  // let _menu = createMenuDOM(tree);
  // console.info('正在构建Vue文件');
  // generateVue(_menu);
  console.info('等待编译');
  compiler();
  console.info('编译完成');
}
