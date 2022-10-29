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