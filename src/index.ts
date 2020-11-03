import {ExtensionContext, languages, workspace} from "coc.nvim";
import CCCompletionProvider from "./CCCompletionProvider";

export function activate(context: ExtensionContext) {
	// const priority = workspace.getConfiguration("lua").get<number>("priority");

	let d1 = languages.registerCompletionItemProvider('lua', "lua", ["lua"], new CCCompletionProvider())

	context.subscriptions.push(d1);
}

export function deactivate() {}

