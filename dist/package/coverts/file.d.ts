import { InitConfig } from '../types/index';
export declare function scanDirectory(_path: string): Array<string>;
export declare function readMakeDownFile(path: string): string;
export declare function getRootPath(): string;
export declare function getOutputPath(): string;
export declare function readFileInConfig(filePath: string): string[];
export declare function readConfigFile(): InitConfig;
export declare function readAllMakeDownFile(_dirs: Array<string>): Array<string>;
export declare function loadVueTemplate(): string;
export declare function outputIsDirectory(): void;
export declare function outputVueTemplate(data: string, __name: string): void;
export declare function writeDataToJson(fileName: string, data: Object): void;
export declare function writeMenuJson(_tree: Object): void;
export declare function copyFileToPath(original: string, targetPath: string, fileName: string): void;
export declare function initOutputDir(): void;