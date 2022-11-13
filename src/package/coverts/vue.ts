import { InsertLogoType } from "../enum";
import { DocInfo, Tab } from "../types";
import { LogError } from "./error";
import {
  loadVueTemplate,
  outputIsDirectory,
  outputVueTemplate,
  readAllMakeDownFile,
  readFileInConfig,
  writeDataToJson,
} from "./file";
import { parseAllTitle } from "./md";


let _vueTemplate: string;

export function generateVue(_insert: string) {
  _vueTemplate = loadVueTemplate();
  outputIsDirectory();
  replaceTemplate(InsertLogoType.Content, _insert);
  outputVueTemplate(_vueTemplate);
}

function replaceTemplate(logotype: InsertLogoType, template: string) {
  _vueTemplate = _vueTemplate.replace(logotype, template);
}

export function builderHeader(docInfo: DocInfo) {
  // 检查docInfo对象是否存在
  if (!docInfo) {
    LogError("Object docInfo not defined in config file");
  }

  // 写入数据到
  writeDataToJson("header.json", docInfo);
}

export function builderTabs(tabs: Array<Tab>) {
  // 检查是否写入tab配置
  if (tabs?.length === 0) {
    LogError("tab not defined in config file");
  }

  let tabNames: Array<{
    name: string,
    key: string,
    json: string
  }> = [];

  tabs.forEach(tab => {
    let _dirs: Array<string> = readFileInConfig(tab?.path);
    let _contents: Array<string> = readAllMakeDownFile(_dirs);
    let tree = parseAllTitle(_contents);
    if (!tab.name) {
      LogError(`${tab?.title} no definde name in config 'tabs' array.`);
    }
    tabNames.push({
      name: tab?.title,
      key: tab.name,
      json: `./tab/${tab.name}.json`
    });
    // 写入集合到json中
    writeDataToJson(`/tab/${tab.name}.json`, tree);
  });
  // 写到标题到Tabs当中
  writeDataToJson('tabs.json', tabNames);
}