"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isMakeDown = exports.makeDownTitleSpecialSymbols = exports.makeDownTitleSingle = exports.makeDownTitleClosed = void 0;
function makeDownTitleClosed(prefix) {
    return RegExp(`${prefix} (?<title>.+?(\n|\r)+?)(?<content>.+?(\n|\r)+?)${prefix} `, 's');
}
exports.makeDownTitleClosed = makeDownTitleClosed;
function makeDownTitleSingle(prefix) {
    return RegExp(`^${prefix} (?<title>.+?)(\r|\n)+(?<content>.*)(\n|\r)+?`, 'gms');
}
exports.makeDownTitleSingle = makeDownTitleSingle;
function makeDownTitleSpecialSymbols(prefix, title) {
    return new RegExp(`${prefix} ${title}(\r|\n)*`, 's');
}
exports.makeDownTitleSpecialSymbols = makeDownTitleSpecialSymbols;
function isMakeDown(path) {
    return new RegExp(/\.md$/).test(path);
}
exports.isMakeDown = isMakeDown;
