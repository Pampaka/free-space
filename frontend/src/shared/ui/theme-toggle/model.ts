import { action, makeObservable, observable } from "mobx";

export enum Themes {
	DARK = "dark",
	LIGHT = "light"
}

export const useTheme = () => {
	return themeService;
};

class ThemeService {
	theme: Themes = Themes.LIGHT;

	constructor() {
		this._initializeTheme();

		makeObservable(this, {
			setTheme: action,
			theme: observable
		});
	}

	private _initializeTheme() {
		const isDarkTheme = window?.matchMedia("(prefers-color-scheme: dark)")?.matches;
		const storageTheme = (localStorage.getItem("theme") as Themes) || "";

		let defaultTheme: Themes;
		if (storageTheme && [Themes.LIGHT, Themes.DARK].includes(storageTheme)) {
			defaultTheme = storageTheme;
		} else {
			defaultTheme = isDarkTheme ? Themes.DARK : Themes.LIGHT;
		}

		this.setTheme(defaultTheme);
	}

	changeTheme() {
		const theme = this.theme === Themes.LIGHT ? Themes.DARK : Themes.LIGHT;
		this.setTheme(theme);
	}

	setTheme(theme: Themes) {
		localStorage.setItem("theme", theme);
		document.documentElement.setAttribute("theme", theme);
		this.theme = theme;
	}
}

export const themeService = new ThemeService();
