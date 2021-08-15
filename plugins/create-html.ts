import { Plugin } from "rollup";
import { readFile } from "fs";

export default function createHTML(): Plugin {
	return {
		name: "create-html",
		async generateBundle() {
			const source = await (new Promise<string>((resolve, reject) => {
				readFile("src/index.html", "utf-8", (err, data) => {
					if (err) reject(err);
					resolve(data);
				})
			}));
			
			this.emitFile({
				fileName: `index.html`,
				type: "asset",
				source: source
			});
		}
	}
}