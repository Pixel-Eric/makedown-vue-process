"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileType = exports.Loader = exports.InsertLogoType = void 0;
var InsertLogoType;
(function (InsertLogoType) {
    InsertLogoType["Content"] = "<!-- mdp-content -->";
    InsertLogoType["Code"] = "// <!-- mdp-code -->";
})(InsertLogoType = exports.InsertLogoType || (exports.InsertLogoType = {}));
var Loader;
(function (Loader) {
    Loader["CssLoader"] = "style-loader,css-loader";
    Loader["LessLoader"] = "less-loader";
    Loader["URLLoader"] = "url-loader";
    Loader["VueLoader"] = "vue-loader";
    Loader["PostCSSLoader"] = "postcss-loader";
})(Loader = exports.Loader || (exports.Loader = {}));
var FileType;
(function (FileType) {
    FileType["Css"] = ".css$";
    FileType["Less"] = ".less$";
    FileType["Vue"] = ".vue$";
    FileType["Image"] = ".(png|jp(e)g|gif|svg)$";
})(FileType = exports.FileType || (exports.FileType = {}));
