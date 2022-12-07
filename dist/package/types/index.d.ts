/// <reference types="node" />
export declare type ProcessConfig = {
    outputPath?: string;
    encoding?: BufferEncoding;
};
export declare type TitleTree = {
    title?: string;
    children?: TitleTree[];
};
export declare type ProcessPlugin = {};
export declare type Tab = {
    title: string;
    path: string;
    name: string;
    link?: string;
};
export declare type NavbarOptions = {
    tabs?: Array<Tab>;
    useVue?: boolean;
    title?: string;
    search?: boolean;
    github?: string;
    version?: string;
    versionTag?: string;
    icon?: string;
};
export declare type OutputOptions = {
    path: string;
};
export declare type InitOptions = {
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
export declare type DocInfo = {
    name?: string;
    version?: string;
    tag?: string;
};
export declare type TabConfig = {
    tabName: string;
    tree: Array<TitleTree>;
};
export declare type InitConfig = {
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
