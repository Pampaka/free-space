import globals from "globals";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
	baseDirectory: __dirname,
	recommendedConfig: js.configs.recommended,
	allConfig: js.configs.all
});

export default [
	{
		ignores: ["**/.eslintrc.cjs"]
	},
	...compat.extends("eslint:recommended"),
	{
		languageOptions: { globals: { ...globals.node } },
		rules: {
			semi: ["error", "always"],
			"no-undef": "error",
			"no-unused-vars": ["error", { vars: "all", args: "none" }],
			"no-constant-condition": "off",
			"no-empty": ["error", { allowEmptyCatch: true }],
			"no-async-promise-executor": "off"
		}
	}
];
