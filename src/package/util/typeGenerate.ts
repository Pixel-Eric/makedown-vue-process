import { TitleTree } from "../types/index";

export function titleTreeGenerator(title: string = '', children: Array<TitleTree> = []): TitleTree {
    return {
        title: title,
        children: children
    }
}