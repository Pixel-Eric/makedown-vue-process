export enum InsertLogoType {
  Content = '<!-- mdp-content -->',
  Code = '// <!-- mdp-code -->'
}

export enum Loader {
  CssLoader = 'style-loader,css-loader',
  LessLoader = 'less-loader',
  URLLoader = 'url-loader',
  VueLoader = 'vue-loader',
  PostCSSLoader = 'postcss-loader',
}

export enum FileType {
  Css = `\.css$`,
  Less = `\.less$`,
  Vue = `\.vue$`,
  Image = `\.(png|jp(e)g|gif|svg)$`
}