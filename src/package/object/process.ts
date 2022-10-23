import { generateHTML } from "../coverts/dom";
import { inputFile, outputFile } from "../coverts/file";
import { processTitle } from "../coverts/md";
import { ProcessConfig } from "../types";

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
        // Read file contents to variable.
        let MDContent: string | Buffer = inputFile(path, { encoding: this.config.encoding });
        let titles = processTitle(MDContent, this.config.encoding);
        outputFile(this.config.outputPath, generateHTML(titles));
    }
}

export default Process;