import TitleProcess from "../util/TitleProcess";

export function processTitle(MDContent: string | Buffer, encoding: BufferEncoding | undefined): (string[] | undefined)[] {
    let titlesPrefixs: string[] = ['# ', '## ', '### ', '#### ', '##### ', '###### '];
    let titles = titlesPrefixs.map(prefix => {
        let result: string[] | undefined;
        result = TitleProcess.process(MDContent, encoding, prefix);
        return result;
    })

    return titles;
}