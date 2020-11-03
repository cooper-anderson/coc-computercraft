import {CompletionItemProvider, ProviderResult} from "coc.nvim";
import {TextDocument, Position, CompletionItem, CancellationToken} from "vscode-languageserver-protocol";
import computerCraftJSON from "./classes.json";

export default class CCCompletionProvider implements CompletionItemProvider {
	provideCompletionItems(document: TextDocument, position: Position, token: CancellationToken): CompletionItem[] {
		return [new CCCompletionItem("test")];
	}
}

class CCCompletionItem implements CompletionItem {
	label: string;

	constructor(label: string) {
		this.label = label;
	}
}

