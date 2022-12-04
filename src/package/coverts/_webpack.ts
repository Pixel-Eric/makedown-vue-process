import { Configuration, RuleSetRule, RuleSetUseItem, webpack } from 'webpack';
import path from 'path';
import { config } from './init';
import { FileType, Loader } from '../enum/index';
import { VueLoaderPlugin } from 'vue-loader';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import WebpackDevServer, { Configuration as DevServerConfiguration } from 'webpack-dev-server';

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
  let serverConfig = config.options.server;
  const devServer: DevServerConfiguration = {
    port: serverConfig?.port ?? 8080,
    hot: serverConfig?.hot ?? true,
  };
  _config.devServer = devServer;
}

function buildModule(_config: Configuration) {
  let _rules = [];
  _config.module = { rules: _rules };
  _rules.push(buildRules(FileType.Css, [Loader.CssLoader, Loader.PostCSSLoader]));
  _rules.push(buildRules(FileType.Less, [Loader.CssLoader, Loader.PostCSSLoader, Loader.LessLoader]));
  _rules.push(buildRules(FileType.Vue, Loader.VueLoader));
  _rules.push({
    test: new RegExp(FileType.Image),
    loader: Loader.URLLoader,
    options: {
      esModule: false
    }
  });
}

// 获取tw相关的postcss配置
let getTailwindCSSConfig = () => {
  let twConfig = {
    content: [
      './src/compiler/src/**/*.vue'
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  };
  return twConfig;
}

// 获取浏览器适配配置
let getAutoprefixerConfig = () => {
  let autoprefixer = {};

  return autoprefixer;
}

// 处理PostCss加载TailwindCSS相关配置
let processPostCssLoaderOptions = (loader: RuleSetRule): RuleSetRule => {
  let tailwindcss = getTailwindCSSConfig();
  let autoprefixer = getAutoprefixerConfig();
  let plugins = { tailwindcss, autoprefixer };

  loader.options = {
    postcssOptions: {
      plugins
    }
  }

  return loader;
}

function buildRules(fileType: FileType, loader: Loader | Array<Loader>, options?: { [index: string]: any }): RuleSetRule {
  let _rule: RuleSetRule = {
    test: new RegExp(fileType),
  };
  let _loader: Array<RuleSetUseItem> = [];
  if (loader instanceof Array) {
    loader.forEach(ld => {
      if (ld === Loader.PostCSSLoader) {
        let postcssOptions:RuleSetUseItem = {};
        processPostCssLoaderOptions(postcssOptions);
        postcssOptions.loader = ld
        _loader.push(postcssOptions)
      } else {
        _loader.push(...ld.split(','));
      }
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
  _compiler.running
  _compiler.run((err, result) => {
    if (err) {
      console.error(err);
    }
  })
}

export async function server() {
  let webpackConfig = buildConfig();
  let _compiler = webpack(webpackConfig);
  let server = new WebpackDevServer({ open: true, ...webpackConfig.devServer }, _compiler);
  await server.start()
}