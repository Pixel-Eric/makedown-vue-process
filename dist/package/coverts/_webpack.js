"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.server = exports.compiler = void 0;
var webpack_1 = require("webpack");
var path_1 = __importDefault(require("path"));
var init_1 = require("./init");
var index_1 = require("../enum/index");
var vue_loader_1 = require("vue-loader");
var html_webpack_plugin_1 = __importDefault(require("html-webpack-plugin"));
var webpack_dev_server_1 = __importDefault(require("webpack-dev-server"));
function buildConfig() {
    let _config = {};
    buildEntry(_config);
    buildOutput(_config);
    buildDevServer(_config);
    buildModule(_config);
    buildPlugins(_config);
    _config.mode = init_1.config.mode;
    return _config;
}
function buildEntry(_config) {
    _config.entry = path_1.default.resolve(__dirname, '../../compiler/index.js');
}
function buildOutput(_config) {
    _config.output = {
        path: init_1.config.output.path,
        filename: 'app.js'
    };
}
function buildDevServer(_config) {
    let serverConfig = init_1.config.options.server;
    const devServer = {
        port: serverConfig?.port ?? 8080,
        hot: serverConfig?.hot ?? true
    };
    _config.devServer = devServer;
}
function buildModule(_config) {
    let _rules = [];
    _config.module = { rules: _rules };
    _rules.push(buildRules(index_1.FileType.Css, [index_1.Loader.CssLoader, index_1.Loader.PostCSSLoader]));
    _rules.push(buildRules(index_1.FileType.Less, [index_1.Loader.CssLoader, index_1.Loader.PostCSSLoader, index_1.Loader.LessLoader]));
    _rules.push(buildRules(index_1.FileType.Vue, index_1.Loader.VueLoader));
    _rules.push({
        test: new RegExp(index_1.FileType.Image),
        loader: index_1.Loader.URLLoader,
        options: {
            esModule: false
        }
    });
}
let getTailwindCSSConfig = () => {
    let twConfig = {
        content: [
            './src/compiler/src/**/*.vue'
        ],
        theme: {
            extend: {}
        },
        plugins: []
    };
    return twConfig;
};
let getAutoprefixerConfig = () => {
    let autoprefixer = {};
    return autoprefixer;
};
let processPostCssLoaderOptions = (loader) => {
    let tailwindcss = getTailwindCSSConfig();
    let autoprefixer = getAutoprefixerConfig();
    let plugins = { tailwindcss, autoprefixer };
    loader.options = {
        postcssOptions: {
            plugins
        }
    };
    return loader;
};
function buildRules(fileType, loader, options) {
    let _rule = {
        test: new RegExp(fileType)
    };
    let _loader = [];
    if (loader instanceof Array) {
        loader.forEach(ld => {
            if (ld === index_1.Loader.PostCSSLoader) {
                let postcssOptions = {};
                processPostCssLoaderOptions(postcssOptions);
                postcssOptions.loader = ld;
                _loader.push(postcssOptions);
            }
            else {
                _loader.push(...ld.split(','));
            }
        });
    }
    else {
        _loader = loader.split(',');
    }
    if (options) {
        _rule.options = options;
    }
    _rule.use = _loader;
    return _rule;
}
function buildPlugins(_config) {
    _config.plugins = [
        new vue_loader_1.VueLoaderPlugin(),
        new html_webpack_plugin_1.default({
            template: path_1.default.resolve(__dirname, '../../public/index.html')
        })
    ];
}
function compiler() {
    let _compiler = (0, webpack_1.webpack)(buildConfig());
    _compiler.running;
    _compiler.run((err, result) => {
        if (err) {
            console.error(err);
        }
    });
}
exports.compiler = compiler;
async function server() {
    let webpackConfig = buildConfig();
    let _compiler = (0, webpack_1.webpack)(webpackConfig);
    let server = new webpack_dev_server_1.default({ open: true, ...webpackConfig.devServer }, _compiler);
    await server.start();
}
exports.server = server;
