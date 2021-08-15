import { RollupOptions } from "rollup";
import typescript from "@rollup/plugin-typescript";
import nodeResolve from "@rollup/plugin-node-resolve";

import createHTML from "./plugins/create-html";

export default {
	input: "src/App.tsx",
	output: {
		dir: "build",
		format: "iife"
	},
	plugins: [
		nodeResolve(),
		typescript(),
		createHTML()
	]
} as RollupOptions;