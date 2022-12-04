import fs from 'fs';
import path from 'path';
import { InitConfig } from '../types/index';
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

export function getRootPath(): string {
  return process.cwd();
}

export function getOutputPath(): string {
  return path.resolve(getRootPath(), "./data/");
}

export function readFileInConfig(filePath: string): string[] {
  let _path = path.resolve(getRootPath(), filePath);
  return scanDirectory(_path);
}

export function readConfigFile(): InitConfig {
  return require(path.join(getRootPath(), 'md.config.js'));
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

export function outputVueTemplate(data: string, __name: string) {
  let _targetPath = path.resolve(getOutputPath(), "./content");
  if (!fs.existsSync(_targetPath)) {
    fs.mkdirSync(_targetPath);
  }

  outputFile(_targetPath, __name + '.vue', data);
}

export function writeDataToJson(fileName: string, data: Object) {
  let _dataPath = getOutputPath();
  let _dir = path.resolve(_dataPath, fileName);
  // 获取文件名称以前的目录
  let _index = fileName.lastIndexOf('/');
  if (_index === -1) {
    _index = fileName.lastIndexOf('\\');
  }

  let _outputDir = path.resolve(_dataPath, fileName.substring(0, _index));
  if (_index !== -1 && !fs.existsSync(_outputDir)) {
    fs.mkdirSync(_outputDir);
  }
  fs.writeFileSync(_dir, JSON.stringify(data));
}

/**
 * @deprecated
 * @param _tree 
 */
export function writeMenuJson(_tree: Object) {
  copyFileToPath(JSON.stringify(_tree), './', 'menu.json');
}

export function copyFileToPath(original: string, targetPath: string, fileName: string) {
  let _rootPaht = getRootPath();
  let _file = fs.readFileSync(path.resolve(_rootPaht, original), { encoding: config.options.encoding });
  outputFile(path.resolve(getOutputPath(), targetPath), fileName, _file);
}


export function initOutputDir() {
  let _outputDir = getOutputPath();
  if (!fs.existsSync(_outputDir)) {
    fs.mkdirSync(_outputDir);
  }
}