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

export type Tab = {
  /**
   * 用于Tab的标识
   */
  title: string,
  /**
   * tab需要解析的md文件或文件目录
   */
  file: string,
  /**
   * 外部链接，可以不设置
   */
  link?: string
}

export type NavbarOptions = {
  /**
   * 所有选项卡的信息集合
   */
  tabs?: Array<Tab>,
  /**
   * 该选项允许您通过Vue文件构建Doc
   * 但这不是必要的，因为MakeProcess已经为您准备好了符合现代化的UI以及交互逻辑
   * 在正常情况下无需开启此项配置
   */
  useVue?: boolean,
  /**
   * 用于在导航栏左侧显示的名称
   */
  title?: string,
  /**
   * 该选项将会开启文档全局检索功能
   * 同时该选项开启后可以使用检索优化选项
   */
  search?: boolean,
  /**
   * 开启GITHUB跳转链接
   */
  github?: string,
  /**
   * 该选项用于标识您的文档版本号
   * 可能有时候这个并不需要被开启
   */
  version?: string,
  /**
   * 版本标签
   * 可能有时候该版本除了版本号以外还有其他标志
   * 例如LTS、Perviewe、Photoshop
   */
  versionTag?: string,
  /**
   * 网站导航栏最左侧图标
   */
  icon?: string
}

export type OutputOptions = {
  /**
   * 输出路径
   */
  path: string
}

export type InitOptions = {
  /**
   * 编码格式
   */
  encoding?: BufferEncoding,
  /**
   * 服务器选项
   */
  server: {
    /**
     * 端口号 默认8080
     */
    port?: number,
    /**
     * 热加载
     */
    hot?: boolean,
    /**
     * 重新加载
     */
    reload?: boolean,
    /**
     * 服务端渲染
     */
    ssr?: boolean
  }
}

export type InitConfig = {
  /**
   * 编译器编译的路径
   */
  path?: string,
  /**
   * 编译器输出路径
   */
  output?: OutputOptions,
  /**
   * 编译器插件选项
   */
  plugins?: ProcessPlugin[],
  /**
   * 编译器可配置选项
   */
  options?: InitOptions,
  /**
   * 导航栏选项
   */
  navbar?: NavbarOptions,
  /**
   * 编译模式
   */
  mode?: 'production' | 'development'
}