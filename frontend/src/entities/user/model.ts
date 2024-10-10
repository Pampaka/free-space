import { jwtDecode } from "jwt-decode";
import { makeAutoObservable } from "mobx";
import { refresh, signIn } from "shared/api";
import { TokenPayload } from "./types";

class UserService {
	login: string = "";
	isAuth: boolean = false;
	isAdmin: boolean = false;

	constructor() {
		makeAutoObservable(this, {
			signIn: false,
			setToken: false
		});
	}

	async signIn(login: string, password: string) {
		const data = await signIn(login, password);
		const payload = jwtDecode<TokenPayload>(data.accessToken);
		this.setUser(payload);
		this.setToken(data.accessToken);
	}

	async refresh() {
		const data = await refresh();
		const payload = jwtDecode<TokenPayload>(data.accessToken);
		this.setUser(payload);
		this.setToken(data.accessToken);
	}

	setUser(user: TokenPayload) {
		this.login = user.login;
		this.isAdmin = user.isAdmin;
		this.isAuth = true;
	}

	setToken(token: string) {
		localStorage.setItem("token", token);
	}
}

export const userService = new UserService();
