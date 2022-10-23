import fs from 'fs';
import path from 'path';
import { ProcessConfig } from '../types';


export function inputFile(path: string, config: ProcessConfig): string | Buffer {
    return fs.readFileSync(path, config);
}

export function outputFile(outputPath: string, body: HTMLBodyElement) {
    let publishPath = path.resolve(__dirname, '../../public');
    let _template = fs.readFileSync(publishPath + '/index.html');
    let _result = _template.toString().replace("<body>", `<body>${body.innerHTML}`);
    if (!fs.existsSync(outputPath)) {
        fs.mkdirSync(outputPath);
    }
    // 扫描public目录下的所有文件
    let publicDir = fs.readdirSync(publishPath);
    if (publicDir.length > 0) {
        publicDir.forEach(fileName => {
            if (fileName !== 'index.html') {
                fs.writeFileSync(outputPath + fileName, fs.readFileSync(`${publishPath}\\${fileName}`));
            }
        })
    }
    fs.writeFileSync(outputPath + 'index.html', _result);
}