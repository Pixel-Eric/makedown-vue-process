import fs from 'fs';
import { TitleTree } from '../types';
import path from 'path';

let _content: string;
let _fileContent = fs.readFileSync(path.resolve(__dirname, 'NodeJS.md'));
if (_fileContent instanceof Buffer) {
    _content = _fileContent.toString();
} else {
    _content = _fileContent
}

export function parseTitle(content: string, superiorTitle: string, prefix: string = "#"): TitleTree {
    if (prefix === '#####') {
        return {
            title: superiorTitle
        };
    }
    console.log(superiorTitle);

    let container: TitleTree = {
        title: superiorTitle,
        children: []
    };
    let regex = RegExp(`${prefix} (?<title>.+?(\n|\r)+?)(?<content>.+?(\n|\r)+?)${prefix} `, 's');

    while (true) {
        let r = regex.exec(content);
        let groups = r?.groups;

        if (groups && groups?.content !== '\r') {
            let title = groups?.title.replace(/(\n|\r)/gm, '');
            let searchStr = `${prefix} ${groups?.title}${groups?.content}`;
            let startIndex = content.indexOf(searchStr);
            let nextContent = content.substring(startIndex, startIndex + searchStr.length);
            console.log(content.substring(startIndex, searchStr.length));

            let t = new RegExp(`${prefix} ${title}(\r|\n)*`, 's');
            content = content.replace(nextContent, '');

            nextContent = nextContent.replace(t, '');
            let children = parseTitle(nextContent, title, prefix + "#");
            if (!children) {
                container.children.push({
                    title: title,
                    children: null,
                });
            } else {
                container.children.push(children);
            }

        } else {
            // 如果匹配标题没有下一个则直接匹配全局
            regex = RegExp(`^${prefix} (?<title>.+?)(\r|\n)+(?<content>.*)(\n|\r)+?`, 'gms');

            groups = regex.exec(content)?.groups;
            if (groups) {
                let children = parseTitle(groups?.content, groups?.title, prefix + "#");
                if (!children) {
                    container.children.push({
                        title: groups.title,
                        children: null,
                    });
                } else {
                    container.children.push(children);
                }
                content = "";
            } else {
                return null;
            }

        }

        if (content.length === 0) {
            break;
        }
    }

    return container;
}

// 正则匹配1 ^##### (.+?#####)
// 正则匹配2 ^#### (.+?\n)(.+?\n)#### 

fs.writeFileSync("test.json", JSON.stringify(parseTitle(_content, "")));


// let regx = /^##### .*##### 对象的新扩展/gms;
// console.log(regx.test(_content));

// console.log(_content.match(regx));


