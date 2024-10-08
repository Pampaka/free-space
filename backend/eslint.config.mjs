import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";

export default tseslint.config(
	{ ignores: ["dist"] },
	{
		extends: [js.configs.recommended, ...tseslint.configs.recommended],
		languageOptions: {
			ecmaVersion: 2020,
			globals: { ...globals.node, ...globals.jest }
		},
		rules: {
			"@typescript-eslint/no-unused-vars": [
				"error",
				{ vars: "all", args: "none", caughtErrors: "none" }
			],
			semi: ["error", "always"],
			quotes: ["error", "double", { avoidEscape: true }],
			"no-undef": "error",
			"no-unused-vars": "off",
			"no-constant-condition": "off",
			"no-empty": ["error", { allowEmptyCatch: true }],
			"no-console": "warn"
		}
	}
);
