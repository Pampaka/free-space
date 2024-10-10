import { instance } from "../client";
import { Board } from "./types";

export async function fetchBoards(): Promise<Board[]> {
	const { data } = await instance.get<Board[]>("/boards");
	return data;
}
