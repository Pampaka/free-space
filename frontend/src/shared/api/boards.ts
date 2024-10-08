import { instance } from ".";

export type BoardResponse = {
	_id: string;
	name: string;
};

export async function fetchBoards(): Promise<BoardResponse[]> {
	const { data } = await instance.get<BoardResponse[]>("/boards");
	return data;
}
