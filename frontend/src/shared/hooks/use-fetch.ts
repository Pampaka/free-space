import { useEffect, useState } from "react";
import { handleError } from "shared/helpers/error";

export interface UseFetchInterface {
	<T>(
		fn: () => Promise<T>,
		defaultValue: T,
		deps?: any[]
	): { data: T; error: string; isLoading: boolean };
}

export const useFetch: UseFetchInterface = (fn, defaultValue, deps) => {
	const [data, setData] = useState(defaultValue);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState("");

	useEffect(() => {
		fn()
			.then(setData)
			.catch(e => setError(handleError(e)))
			.finally(() => setIsLoading(false));
	}, deps);

	return { data, isLoading, error };
};
