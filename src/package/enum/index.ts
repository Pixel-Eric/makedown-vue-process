export enum InsertLogoType {
  Content = '$_content',
  Code = '$_code'
}

export enum Loader {
  CssLoader = 'style-loader,css-loader,postcss-loader',
  LessLoader = 'less-loader',
  URLLoader = 'url-loader',
  VueLoader = 'vue-loader',
}

export enum FileType {
  Css = `\.css$`,
  Less = `\.less$`,
  Vue = `\.vue$`,
  Image = `\.(png|jp(e)g|gif|svg)$`
}