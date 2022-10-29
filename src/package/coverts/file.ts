import fs from 'fs';
import path from 'path';
import { InitConfig } from '../types';
import { isMakeDown } from '../util/regxGenerate';
import { config } from './init';

// 仅支持扫描目录 该操作会将目标目录下的所有md文件全部依次解析
export function scanDirectory(_path: string): Array<string> {
  let _isDir = fs.lstatSync(_path).isDirectory();
  if (_isDir) {
    // 如果为目录则开始读取目录列表
    let dirs: Array<string> = fs.readdirSync(_path);
    dirs = dirs.map(dir => path.join(_path, dir));
    // 筛选是文件的且为md文件的路径
    dirs = dirs.filter(dir => {
      return fs.lstatSync(dir).isFile() && isMakeDown(path + dir);
    });
    return dirs;
  } else {
    throw new Error("Scan path must be a directory");
  }
}

export function readMakeDownFile(path: string): string {
  return fs.readFileSync(path, 'utf8');
}

export function readConfigFile(): InitConfig {
  let rootPath = process.cwd();
  return require(path.join(rootPath, 'md.config.js'));
}

export function readAllMakeDownFile(_dirs: Array<string>): Array<string> {
  return _dirs.map(dir => {
    return readMakeDownFile(dir);
  })
}

export function loadVueTemplate(): string {
  return fs.readFileSync(path.resolve(__dirname, '../../template/vue-template.vue'), config.options.encoding);
}

export function outputIsDirectory() {
  if (!fs.existsSync(config.output.path)) {
    fs.mkdirSync(config.output.path);
  }
  if (!fs.lstatSync(config.output.path).isDirectory()) {
    throw new Error("The output path must be a directory.");
  }
}

function outputFile(dir: string, fileName: string, data: string) {
  let _outputPath = path.resolve(dir, fileName);
  fs.writeFileSync(_outputPath, data);
}

export function outputVueTemplate(data: string) {
  let _vueTemplatePath = path.resolve(__dirname, '../../compiler/src/doc/');
  outputFile(_vueTemplatePath, 'Menu.vue', data);
}