"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseAllTitle = exports.parseTitle = void 0;
var typeGenerate_1 = require("../util/typeGenerate");
var regxGenerate_1 = require("../util/regxGenerate");
function prefixVerify(prefix) {
    return prefix === '###';
}
function pushNode(target, children, title = "") {
    if (children) {
        target.children.push(children);
    }
    else {
        target.children.push({
            title: title,
            children: []
        });
    }
}
function parseTitle(content, superiorTitle = "", prefix = "#") {
    if (prefixVerify(prefix)) {
        return (0, typeGenerate_1.titleTreeGenerator)(superiorTitle);
    }
    let _container = (0, typeGenerate_1.titleTreeGenerator)(superiorTitle);
    let _hasTitle = (0, regxGenerate_1.makeDownTitleClosed)(prefix);
    let _children;
    while (true) {
        let _groups = _hasTitle.exec(content)?.groups;
        if (_groups && _groups?.content !== '\r') {
            let _title = _groups?.title.replace(/(\n|\r)/gm, '');
            let _searchStr = `${prefix} ${_groups?.title}${_groups?.content}`;
            let _startIndex = content.indexOf(_searchStr);
            let _nextContent = content.substring(_startIndex, _startIndex + _searchStr.length);
            let _specialSymbols = (0, regxGenerate_1.makeDownTitleSpecialSymbols)(prefix, _title);
            content = content.replace(_nextContent, '');
            _nextContent = _nextContent.replace(_specialSymbols, '');
            _children = parseTitle(_nextContent, _title, prefix + "#");
            pushNode(_container, _children, _title);
        }
        else {
            _hasTitle = (0, regxGenerate_1.makeDownTitleSingle)(prefix);
            _groups = _hasTitle.exec(content)?.groups;
            if (_groups) {
                _children = parseTitle(_groups?.content, _groups?.title, prefix + "#");
                pushNode(_container, _children, _groups.title);
                content = "";
            }
            else {
                return null;
            }
        }
        if (content.length === 0) {
            break;
        }
    }
    return _container;
}
exports.parseTitle = parseTitle;
function parseAllTitle(_content) {
    let _h1s = _content.map(content => parseTitle(content));
    let _titleSet = [];
    _h1s.forEach(h1 => {
        _titleSet.push(...h1.children);
    });
    return _titleSet;
}
exports.parseAllTitle = parseAllTitle;
