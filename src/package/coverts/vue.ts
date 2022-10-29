import { createDirectory, inputFile, isDirectory, saveFile } from "./file";
import path = require("path");

export function generateVue(dom: HTMLElement) {
    let file: string = inputFile(path.resolve(__dirname, '../../template/vue-template.vue'), { encoding: 'utf-8' }).toString();
    let _DOMContent: string = dom.innerHTML;
    file = file.replace('$_content', _DOMContent);
    let outPath = path.resolve(__dirname, '../../compiler/src/doc/');
    if (!isDirectory(outPath)) {
        createDirectory(outPath);
    }
    saveFile(outPath, 'Menu.vue', file);
}

export function generateRouter(menuList: string[]) {

}