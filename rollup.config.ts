import { RollupOptions } from "rollup";
import typescript from "@rollup/plugin-typescript";
import nodeResolve from "@rollup/plugin-node-resolve";

import createHTML from "./plugins/create-html";
import copyFiles from "./plugins/copy-files";

const BUILD_DIR = "build/";

export default {
	input: "src/App.tsx",
	output: {
		dir: BUILD_DIR,
		format: "iife"
	},
	plugins: [
		nodeResolve(),
		typescript(),
		createHTML(),
		copyFiles({
			from: "public/",
			to: BUILD_DIR
		})
	]
} as RollupOptions;