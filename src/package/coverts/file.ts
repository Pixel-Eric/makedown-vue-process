import fs from 'fs';
import path from 'path';
import { InitConfig } from '../types';
import { isMakeDown } from '../util/regxGenerate';

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