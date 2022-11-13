enum FileErrorType {
  NotFound
}
class FileError implements Error {
  name = "FileError";
  message: "";
  stack?: string;

  constructor(message: string, type: FileErrorType, stack?: string) {
    this.message += `{type}:${message}`;
    if (stack) {
      this.stack = stack;
    }
  }
}
export function readError(msg: string) {
}

export function LogError(msg: string) {
  throw new Error(msg);
}