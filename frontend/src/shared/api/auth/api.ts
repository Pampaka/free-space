import { instance } from "../client";
import { TokenResponse } from "./types";

export async function signIn(login: string, password: string): Promise<TokenResponse> {
	const { data } = await instance.post<TokenResponse>("/auth/sign-in", {
		login,
		password
	});
	return data;
}

export async function refresh(): Promise<TokenResponse> {
	const { data } = await instance.post<TokenResponse>("/auth/refresh");
	return data;
}
