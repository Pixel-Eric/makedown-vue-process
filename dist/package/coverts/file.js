"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initOutputDir = exports.copyFileToPath = exports.writeMenuJson = exports.writeDataToJson = exports.outputVueTemplate = exports.outputIsDirectory = exports.loadVueTemplate = exports.readAllMakeDownFile = exports.readConfigFile = exports.readFileInConfig = exports.getOutputPath = exports.getRootPath = exports.readMakeDownFile = exports.scanDirectory = void 0;
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var regxGenerate_1 = require("../util/regxGenerate");
var init_1 = require("./init");
function scanDirectory(_path) {
    let _isDir = fs_1.default.lstatSync(_path).isDirectory();
    if (_isDir) {
        let dirs = fs_1.default.readdirSync(_path);
        dirs = dirs.map(dir => path_1.default.join(_path, dir));
        dirs = dirs.filter(dir => {
            return fs_1.default.lstatSync(dir).isFile() && (0, regxGenerate_1.isMakeDown)(path_1.default + dir);
        });
        return dirs;
    }
    else {
        throw new Error("Scan path must be a directory");
    }
}
exports.scanDirectory = scanDirectory;
function readMakeDownFile(path) {
    return fs_1.default.readFileSync(path, 'utf8');
}
exports.readMakeDownFile = readMakeDownFile;
function getRootPath() {
    return process.cwd();
}
exports.getRootPath = getRootPath;
function getOutputPath() {
    return path_1.default.resolve(getRootPath(), "./data/");
}
exports.getOutputPath = getOutputPath;
function readFileInConfig(filePath) {
    let _path = path_1.default.resolve(getRootPath(), filePath);
    return scanDirectory(_path);
}
exports.readFileInConfig = readFileInConfig;
function readConfigFile() {
    return require(path_1.default.join(getRootPath(), 'md.config.js'));
}
exports.readConfigFile = readConfigFile;
function readAllMakeDownFile(_dirs) {
    return _dirs.map(dir => {
        return readMakeDownFile(dir);
    });
}
exports.readAllMakeDownFile = readAllMakeDownFile;
function loadVueTemplate() {
    return fs_1.default.readFileSync(path_1.default.resolve(__dirname, '../../template/vue-template.vue'), init_1.config.options.encoding);
}
exports.loadVueTemplate = loadVueTemplate;
function outputIsDirectory() {
    if (!fs_1.default.existsSync(init_1.config.output.path)) {
        fs_1.default.mkdirSync(init_1.config.output.path);
    }
    if (!fs_1.default.lstatSync(init_1.config.output.path).isDirectory()) {
        throw new Error("The output path must be a directory.");
    }
}
exports.outputIsDirectory = outputIsDirectory;
function outputFile(dir, fileName, data) {
    let _outputPath = path_1.default.resolve(dir, fileName);
    fs_1.default.writeFileSync(_outputPath, data);
}
function outputVueTemplate(data, __name) {
    let _targetPath = path_1.default.resolve(getOutputPath(), "./content");
    if (!fs_1.default.existsSync(_targetPath)) {
        fs_1.default.mkdirSync(_targetPath);
    }
    outputFile(_targetPath, __name + '.vue', data);
}
exports.outputVueTemplate = outputVueTemplate;
function writeDataToJson(fileName, data) {
    let _dataPath = getOutputPath();
    let _dir = path_1.default.resolve(_dataPath, fileName);
    let _index = fileName.lastIndexOf('/');
    if (_index === -1) {
        _index = fileName.lastIndexOf('\\');
    }
    let _outputDir = path_1.default.resolve(_dataPath, fileName.substring(0, _index));
    if (_index !== -1 && !fs_1.default.existsSync(_outputDir)) {
        fs_1.default.mkdirSync(_outputDir);
    }
    fs_1.default.writeFileSync(_dir, JSON.stringify(data));
}
exports.writeDataToJson = writeDataToJson;
function writeMenuJson(_tree) {
    copyFileToPath(JSON.stringify(_tree), './', 'menu.json');
}
exports.writeMenuJson = writeMenuJson;
function copyFileToPath(original, targetPath, fileName) {
    let _rootPaht = getRootPath();
    let _file = fs_1.default.readFileSync(path_1.default.resolve(_rootPaht, original), { encoding: init_1.config.options.encoding });
    outputFile(path_1.default.resolve(getOutputPath(), targetPath), fileName, _file);
}
exports.copyFileToPath = copyFileToPath;
function initOutputDir() {
    let _outputDir = getOutputPath();
    if (!fs_1.default.existsSync(_outputDir)) {
        fs_1.default.mkdirSync(_outputDir);
    }
}
exports.initOutputDir = initOutputDir;
