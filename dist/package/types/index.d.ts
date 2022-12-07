/// <reference types="node" />
export type ProcessConfig = {
    outputPath?: string;
    encoding?: BufferEncoding;
};
export type TitleTree = {
    title?: string;
    children?: TitleTree[];
};
export type ProcessPlugin = {};
export type Tab = {
    title: string;
    path: string;
    name: string;
    link?: string;
};
export type NavbarOptions = {
    tabs?: Array<Tab>;
    useVue?: boolean;
    title?: string;
    search?: boolean;
    github?: string;
    version?: string;
    versionTag?: string;
    icon?: string;
};
export type OutputOptions = {
    path: string;
};
export type InitOptions = {
    encoding?: BufferEncoding;
    server: {
        port?: number;
        hot?: boolean;
        reload?: boolean;
        ssr?: boolean;
    };
    isDirectoryMode?: boolean;
    search?: boolean;
};
export type DocInfo = {
    name?: string;
    version?: string;
    tag?: string;
};
export type TabConfig = {
    tabName: string;
    tree: Array<TitleTree>;
};
export type InitConfig = {
    docInfo: DocInfo;
    tabs: Array<Tab>;
    home?: string;
    path?: string;
    output?: OutputOptions;
    plugins?: ProcessPlugin[];
    options?: InitOptions;
    navbar?: NavbarOptions;
    mode?: 'production' | 'development';
};
