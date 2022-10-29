import MDProcess from "../src";
import path from "path";

new MDProcess({ outputPath: './dist/' }).process(path.resolve(__dirname, 'md/'));