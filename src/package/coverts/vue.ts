import { InsertLogoType } from "../enum";
import { loadVueTemplate, outputIsDirectory, outputVueTemplate } from "./file";


let _vueTemplate: string;

export function generateVue(_insert: string) {
  _vueTemplate = loadVueTemplate();
  outputIsDirectory();
  replaceTemplate(InsertLogoType.Content, _insert);
  outputVueTemplate(_vueTemplate);
}

function replaceTemplate(logotype: InsertLogoType, template: string) {
  _vueTemplate = _vueTemplate.replace(logotype, template);
}