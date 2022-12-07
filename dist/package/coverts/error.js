"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogError = exports.readError = void 0;
var FileErrorType;
(function (FileErrorType) {
    FileErrorType[FileErrorType["NotFound"] = 0] = "NotFound";
})(FileErrorType || (FileErrorType = {}));
class FileError {
    name = "FileError";
    message;
    stack;
    constructor(message, type, stack) {
        this.message += `{type}:${message}`;
        if (stack) {
            this.stack = stack;
        }
    }
}
function readError(msg) {
}
exports.readError = readError;
function LogError(msg) {
    throw new Error(msg);
}
exports.LogError = LogError;
