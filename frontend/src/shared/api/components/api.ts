import { instance } from "../client";
import { Component } from "./types";

export async function fetchComponentsByBoard(boardId: string): Promise<Component[]> {
	const { data } = await instance.get<Component[]>(`/components/${boardId}`);
	return data;
}
