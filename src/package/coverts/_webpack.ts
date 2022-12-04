import { Configuration, RuleSetRule, RuleSetUseItem, webpack } from 'webpack';
import path from 'path';
import { config } from './init';
import { FileType, Loader } from '../enum/index';
import { VueLoaderPlugin } from 'vue-loader';
import HtmlWebpackPlugin from 'html-webpack-plugin';

function buildConfig(): Configuration {
  let _config: Configuration = {};
  buildEntry(_config);
  buildOutput(_config);
  buildDevServer(_config);
  buildModule(_config);
  buildPlugins(_config);
  _config.mode = config.mode;
  return _config;
}

function buildEntry(_config: Configuration) {
  _config.entry = path.resolve(__dirname, '../../compiler/index.js');
}

function buildOutput(_config: Configuration) {
  _config.output = {
    path: config.output.path,
    filename: 'app.js'
  }
}

function buildDevServer(_config: Configuration) {
  let _server = config.options.server;
  // _config.devServer = {
  //   hot: _server?.hot ?? true,
  //   port: _server?.port ?? 8080,
  //   liveReload: _server?.reload ?? true
  // }
}

function buildModule(_config: Configuration) {
  let _rules = [];
  _config.module = { rules: _rules };
  _rules.push(buildRules(FileType.Css, Loader.CssLoader));
  _rules.push(buildRules(FileType.Less, Loader.LessLoader));
  _rules.push(buildRules(FileType.Vue, Loader.VueLoader));
  _rules.push({
    test: new RegExp(FileType.Image),
    loader: Loader.URLLoader,
    options: {
      esModule: false
    }
  });
}

function buildRules(fileType: FileType, loader: Loader | Array<Loader>, options?: { [index: string]: any }): RuleSetRule {
  let _rule: RuleSetRule = {
    test: new RegExp(fileType),
  };
  let _loader: Array<RuleSetUseItem> = [];
  if (loader instanceof Array) {
    loader.forEach(ld => {
      _loader.push(...ld.split(','));
    });
  } else {
    _loader = loader.split(',');
  }
  if (options) {
    _rule.options = options;
  }
  _rule.use = _loader;
  return _rule;
}

function buildPlugins(_config: Configuration) {
  _config.plugins = [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../../public/index.html')
    })
  ];
}

export function compiler() {
  let _compiler = webpack(buildConfig());
  _compiler.run((err, result) => {
    if (err) {
      console.error(err);
    }
  })
}

