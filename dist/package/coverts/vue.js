"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.builderHome = exports.builderTabs = exports.builderHeader = exports.generateVue = void 0;
var index_1 = require("../enum/index");
var error_1 = require("./error");
var file_1 = require("./file");
var marked_1 = require("marked");
var md_1 = require("./md");
let _vueTemplate;
function generateVue(_insert, _name) {
    _vueTemplate = (0, file_1.loadVueTemplate)();
    replaceTemplate(index_1.InsertLogoType.Content, marked_1.marked.parse(_insert.join(`\n`)));
    (0, file_1.outputVueTemplate)(_vueTemplate, _name);
}
exports.generateVue = generateVue;
function replaceTemplate(logotype, template) {
    _vueTemplate = _vueTemplate.replace(logotype, template);
}
function builderHeader(docInfo) {
    if (!docInfo) {
        (0, error_1.LogError)("Object docInfo not defined in config file");
    }
    (0, file_1.writeDataToJson)("header.json", docInfo);
}
exports.builderHeader = builderHeader;
function builderTabs(tabs) {
    if (tabs?.length === 0) {
        (0, error_1.LogError)("tab not defined in config file");
    }
    let tabNames = [];
    tabs.forEach(tab => {
        let _dirs = (0, file_1.readFileInConfig)(tab?.path);
        let _contents = (0, file_1.readAllMakeDownFile)(_dirs);
        let tree = (0, md_1.parseAllTitle)(_contents);
        if (!tab.name) {
            (0, error_1.LogError)(`${tab?.title} no definde name in config 'tabs' array.`);
        }
        generateVue(_contents, tab?.name);
        tabNames.push({
            name: tab?.title,
            key: tab.name,
            json: `./tab/${tab.name}.json`,
            content: `./content/${tab.name}.vue`
        });
        (0, file_1.writeDataToJson)(`./tab/${tab.name}.json`, tree);
    });
    (0, file_1.writeDataToJson)('tabs.json', tabNames);
}
exports.builderTabs = builderTabs;
function builderHome(home) {
    (0, file_1.copyFileToPath)(home, './', 'index.vue');
}
exports.builderHome = builderHome;
