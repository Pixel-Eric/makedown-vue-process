import { TitleTree } from '../types';
import { titleTreeGenerator } from '../util/typeGenerate';
import { makeDownTitleClosed, makeDownTitleSingle, makeDownTitleSpecialSymbols } from '../util/regxGenerate';

function prefixVerify(prefix: string): boolean {
  return prefix === '#####';
}

function pushNode(target: TitleTree, children: TitleTree, title: string = "") {
  if (children) {
    target.children.push(children);
  } else {
    target.children.push({
      title: title,
      children: [],
    })
  }
}

export function parseTitle(content: string, superiorTitle: string = "", prefix: string = "#"): TitleTree {
  // 校验前缀是否到达最大回弹上限
  if (prefixVerify(prefix)) {
    return titleTreeGenerator(superiorTitle);
  }
  // 创建容器
  let _container: TitleTree = titleTreeGenerator(superiorTitle);
  // 获取标题的正则校验公式
  let _hasTitle = makeDownTitleClosed(prefix);
  let _children: TitleTree;

  // 检索当前目录中所有带前缀的子目录标题及内容并进行递归
  while (true) {
    let _groups = _hasTitle.exec(content)?.groups;
    if (_groups && _groups?.content !== '\r') {
      // 消除头信息的\n | \r
      let _title = _groups?.title.replace(/(\n|\r)/gm, '');
      // 获取标题在文本中的起始索引
      let _searchStr = `${prefix} ${_groups?.title}${_groups?.content}`;
      let _startIndex = content.indexOf(_searchStr);
      // 下一次递归的内容 (取出当前子目录集合内容丢入递归)
      let _nextContent = content.substring(_startIndex, _startIndex + _searchStr.length);
      // 将标题及标题后的所有换行符检出
      let _specialSymbols = makeDownTitleSpecialSymbols(prefix, _title);
      content = content.replace(_nextContent, '');
      _nextContent = _nextContent.replace(_specialSymbols, '');
      _children = parseTitle(_nextContent, _title, prefix + "#");
      pushNode(_container, _children, _title);
    } else {
      // 如果匹配标题没有下一个则直接匹配全局
      _hasTitle = makeDownTitleSingle(prefix);
      _groups = _hasTitle.exec(content)?.groups;
      if (_groups) {
        _children = parseTitle(_groups?.content, _groups?.title, prefix + "#");
        pushNode(_container, _children, _groups.title);
        content = "";
      } else {
        return null;
      }
    }
    // 如果没有内容了认为匹配完成退出循环
    if (content.length === 0) {
      break;
    }
  }
  return _container;
}

export function parseAllTitle(_content: Array<string>) {
  let _h1s = _content.map(content => parseTitle(content));
  let _titleSet: Array<TitleTree> = [];
  _h1s.forEach(h1 => {
    _titleSet.push(...h1.children);
  })
  return _titleSet;
}