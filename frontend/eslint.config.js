import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";

export default tseslint.config(
	{ ignores: ["dist", "vite.config.ts"] },
	{
		extends: [js.configs.recommended, ...tseslint.configs.recommended],
		files: ["**/*.{ts,tsx}"],
		languageOptions: {
			ecmaVersion: 2020,
			globals: globals.browser
		},
		plugins: {
			"react-hooks": reactHooks,
			"react-refresh": reactRefresh
		},
		rules: {
			...reactHooks.configs.recommended.rules,
			"react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
			semi: ["error", "always"],
			quotes: ["error", "double", { avoidEscape: true }],
			"no-undef": "error",
			"no-unused-vars": ["error", { vars: "all", args: "none", caughtErrors: "none" }],
			"no-constant-condition": "off",
			"no-empty": ["error", { allowEmptyCatch: true }],
			"react/jsx-uses-react": "off",
			"react/react-in-jsx-scope": "off",
			"react-hooks/rules-of-hooks": "error",
			"react-hooks/exhaustive-deps": "off",
			"no-console": "warn"
		}
	}
);
