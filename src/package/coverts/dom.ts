import { JSDOM } from 'jsdom';
let dom = new JSDOM();
let document = dom.window.document;

export function generateHTML(directory: (string[] | undefined)[]): HTMLBodyElement {
    let body = document.createElement('body');
    body.className = 'doc-body';

    let docApp = document.createElement('div');
    body.appendChild(docApp);
    docApp.id = "app";
    docApp.appendChild(generateDirectoryList(directory[0]));
    docApp.appendChild(generateContent(directory))
    return body;
}

export function generateDirectoryList(directory: string[] | undefined): HTMLDivElement {
    if (!directory) {
        throw new Error('directory is undefine');
    }
    let directoryDOM = document.createElement('div');
    let menuUL = document.createElement('ul');
    menuUL.className = "menu-list";
    directoryDOM.appendChild(menuUL);

    directory.forEach(title => {
        let li = document.createElement('li');
        li.innerHTML = title;
        menuUL.append(li);
    })

    return directoryDOM;
}

export function generateContent(directory: (string[] | undefined)[]): HTMLDivElement {
    let _content = document.createElement('div');
    _content.className = 'content';

    // 添加当前页的标题
    let _pageTitle = document.createElement('h1');
    _pageTitle.innerHTML = directory[0][0];
    _content.appendChild(_pageTitle);
    directory.forEach((_arr, _curIndex) => {
        if (_curIndex !== 0 && _arr) {
            _arr.forEach(title => {
                let _tag = document.createElement(`h${_curIndex + 1}`);
                _tag.innerHTML = title;
                _content.appendChild(_tag);
            });
        }
    })

    return _content;
}