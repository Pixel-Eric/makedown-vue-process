import { compiler } from "../coverts/compiler";
import { generateHTML, generateMenu } from "../coverts/dom";
import { getPathFileList, inputFile, isFile, outputFile } from "../coverts/file";
import { processTitle } from "../coverts/md";
import { generateVue } from "../coverts/vue";
import { ProcessConfig, TitleTree } from "../types";

/**
 * Process 'MakeDown' file.
 */
class Process {
    config: ProcessConfig = {
        outputPath: './',
        encoding: 'utf8'
    };

    constructor(config?: ProcessConfig) {
        // if config not undefined,this config will be replacement.
        if (!!config) {
            this.config = Object.assign(this.config, config);
        }
    }

    process(path: string): void {
        let _files: (string | Buffer)[] = [];
        let _encoding = this.config.encoding;
        if (!isFile(path)) {
            let _fileList = getPathFileList(path);
            _fileList.forEach(file => {
                let _md = this.readFile(`${path}\\${file}`);
                _files.push(_md);
            })
        } else {
            _files.push(this.readFile(path));
        }

        
        // Read file contents to variable.
        let _dir: HTMLElement;
        let _allTitle: TitleTree[] = [];
        _files.forEach(_file => {
            let _titles = processTitle(_file, _encoding);
            _allTitle.push(..._titles);
        });
        console.log(_allTitle);
        
        // _dir = generateMenu(_allTitle);
        // generateRouter();
        generateVue(_dir);
        compiler();
        // outputFile(this.config.outputPath, generateHTML(titles));
    }

    readFile(path: string): string | Buffer {
        let _encoding = this.config.encoding;
        let _files: (string | Buffer) = inputFile(path, { encoding: _encoding });
        return _files;
    }

}

export default Process;