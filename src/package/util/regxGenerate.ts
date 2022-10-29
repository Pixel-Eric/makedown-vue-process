export function makeDownTitleClosed(prefix: string): RegExp {
    return RegExp(`${prefix} (?<title>.+?(\n|\r)+?)(?<content>.+?(\n|\r)+?)${prefix} `, 's');
}

export function makeDownTitleSingle(prefix: string): RegExp {
    return RegExp(`^${prefix} (?<title>.+?)(\r|\n)+(?<content>.*)(\n|\r)+?`, 'gms')
}
// 获取当前标题及后面的所有换行符和回车
export function makeDownTitleSpecialSymbols(prefix: string, title: string): RegExp {
    return new RegExp(`${prefix} ${title}(\r|\n)*`, 's');
}