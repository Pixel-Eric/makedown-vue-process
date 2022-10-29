import { InitConfig } from "../types";
import { createMenuDOM } from "./dom";
import { readAllMakeDownFile, readConfigFile, scanDirectory } from "./file";
import { parseAllTitle } from "./md";
import fs from 'fs';

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
  console.info('正在构建DOM树');
  let _menu = createMenuDOM(tree);
  console.info('正在构建Vue文件');
  console.info('等待输出');
  fs.writeFileSync('t.html', _menu);
  console.info('编译完成');
}

initProcess();