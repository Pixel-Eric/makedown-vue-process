import { JSDOM } from 'jsdom';
let dom = new JSDOM();
let document = dom.window.document;

export function generateMenu(directory: string[]): HTMLElement {
    return generateDirectoryList(directory);
}

export function generateHTML(directory: (string[] | undefined)[]): HTMLElement[] {
    let _doms: HTMLElement[] = [];
    _doms.push(packageDOM(generateDirectoryList(directory[0])));
    _doms.push(generateContent(directory));
    return _doms;
}

function packageDOM(dom: HTMLElement): HTMLElement {
    let _div = document.createElement('div');
    _div.appendChild(dom);
    return _div;
}

function generateDirectoryList(directory: string[] | undefined): HTMLDivElement {
    if (!directory) {
        throw new Error('directory is undefine');
    }
    let directoryDOM = document.createElement('div');
    let menuUL = document.createElement('ul');
    menuUL.className = "menu-list";
    directoryDOM.appendChild(menuUL);

    directory.forEach(title => {
        let li = document.createElement('li');
        li.id = title;
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