import { Plugin } from "rollup";
import { copy } from "fs-extra";

interface Options {
	from: string,
	to: string
}

export default function copyFiles(options: Options): Plugin {
	return {
		name: "copy-files",
		async generateBundle() {
			copy(options.from, options.to, {
				recursive: true
			});
		}
	}
}