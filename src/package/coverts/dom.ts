import { JSDOM } from 'jsdom';
import { TitleTree } from '../types';
let dom = new JSDOM();
let document = dom.window.document;

export function createMenuDOM(tree: Array<TitleTree>, seed: number = 1): string {
  let _body = document.createElement('body');
  let _menu = createMenuUl(tree, seed);
  _body.appendChild(_menu);
  return _body.innerHTML;
}

function createMenuUl(tree: Array<TitleTree>, seed: number = 1): HTMLUListElement {
  let _ul = document.createElement('ul');
  _ul.className = `menu-ul-${seed}`;
  tree.forEach(t => {
    _ul.appendChild(createMenuLi(t, seed))
  })
  return _ul;
}

function createMenuLi(tree: TitleTree, seed: number = 1): HTMLLIElement {
  let _li = document.createElement('li');
  let _span = document.createElement('span');
  _span.innerHTML = tree.title;
  _li.appendChild(_span);
  if (tree.children.length > 0) {
    _li.appendChild(createMenuUl(tree.children, ++seed));
  }
  return _li;
}