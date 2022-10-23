class TitleProcess {

    static process(content: string | Buffer, encoding: BufferEncoding | undefined, prefix: string): string[] | undefined {
        let target: string;
        if (content instanceof Buffer) {
            target = content.toString(encoding);
        } else {
            target = content;
        }
        let regx = new RegExp(`^${prefix}(?<titile>.*)\n{0,1}$`, 'gm');
        let reuslt = target.match(regx)?.map(result => result.replace(prefix, ''));
        return reuslt;
    }

}

export default TitleProcess;