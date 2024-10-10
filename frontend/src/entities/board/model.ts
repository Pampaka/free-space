import { fetchBoards } from "shared/api";
import { useFetch } from "shared/hooks/use-fetch";

export const useBoards = () => {
	const { data: boards, error, isLoading } = useFetch(fetchBoards, []);
	return { boards, isLoading, error };
};
