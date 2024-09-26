import type { FieldValues, UseFormSetError } from "react-hook-form";
import { AxiosError } from "axios";

export const setApiErrors = <TFieldValues extends FieldValues>(
	error: unknown,
	setError: UseFormSetError<TFieldValues>
) => {
	if (error instanceof AxiosError && typeof error.response?.data?.message === "string") {
		setError("root.serverError", { type: "server", message: error.response.data.message });

		// TODO доделать обработку ошибок по полям
		// console.log(error)
		// if (Array.isArray(error.response.data?.errors)) {
		// 	error.response.data.errors.forEach(propError => {})
		// }
	} else if (error instanceof Error && typeof error.message === "string") {
		setError("root.serverError", { type: "server", message: error?.message });
	} else {
		setError("root.serverError", { type: "server", message: "Неизвестная ошибка" });
	}
};
