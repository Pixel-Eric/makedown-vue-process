"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.titleTreeGenerator = void 0;
function titleTreeGenerator(title = '', children = []) {
    return {
        title: title,
        children: children
    };
}
exports.titleTreeGenerator = titleTreeGenerator;
