import { InitConfig } from "../types";
import { readAllMakeDownFile, readConfigFile, scanDirectory } from "./file";
import { parseAllTitle } from "./md";

/**
 * 初始化用户配置选项
 */

let config: InitConfig;

export default function initProcess() {
  config = readConfigFile();
  let _dirs: Array<string> = scanDirectory(config.path);
  let _contents: Array<string> = readAllMakeDownFile(_dirs);
  let tree = parseAllTitle(_contents);
}