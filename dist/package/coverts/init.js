"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.server = exports.build = exports.config = void 0;
var file_1 = require("./file");
var vue_1 = require("./vue");
var _webpack_1 = require("./_webpack");
function initConfig() {
    (0, file_1.initOutputDir)();
    exports.config = (0, file_1.readConfigFile)();
    (0, vue_1.builderHome)(exports.config?.home);
    (0, vue_1.builderHeader)(exports.config?.docInfo);
    (0, vue_1.builderTabs)(exports.config?.tabs);
}
function build() {
    initConfig();
    (0, _webpack_1.compiler)();
    console.info('编译完成');
}
exports.build = build;
function server() {
    initConfig();
    (0, _webpack_1.server)();
}
exports.server = server;
