export type ProcessConfig = {
  // Output path,default is current working directory.
  outputPath?: string;
  // File encoding,default is UTF-8.
  encoding?: BufferEncoding;
};

export type TitleTree = {
  title?: string,
  children?: TitleTree[],
}

// 处理插件预留接口
export type ProcessPlugin = {

}

export type OutputOptions = {
  path: string
}

export type InitConfig = {
  path?: string,
  output?: OutputOptions,
  plugins?: ProcessPlugin[],
  mode?: 'production' | 'development'
}