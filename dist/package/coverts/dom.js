"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMenuDOM = void 0;
const jsdom_1 = require("jsdom");
let dom = new jsdom_1.JSDOM();
let document = dom.window.document;
function createMenuDOM(tree, seed = 1) {
    let _body = document.createElement('body');
    let _menu = createMenuUl(tree, seed);
    _body.appendChild(_menu);
    return _body.innerHTML;
}
exports.createMenuDOM = createMenuDOM;
function createMenuUl(tree, seed = 1) {
    let _ul = document.createElement('ul');
    _ul.className = `menu-ul-${seed}`;
    tree.forEach(t => {
        _ul.appendChild(createMenuLi(t, seed));
    });
    return _ul;
}
function createMenuLi(tree, seed = 1) {
    let _li = document.createElement('li');
    let _span = document.createElement('span');
    _span.innerHTML = tree.title;
    _li.appendChild(_span);
    if (tree.children.length > 0) {
        _li.appendChild(createMenuUl(tree.children, ++seed));
    }
    return _li;
}
