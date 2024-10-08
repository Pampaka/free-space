import type { FieldValues, Path, UseFormSetError } from "react-hook-form";
import { AxiosError } from "axios";

export const setApiErrors = <TFieldValues extends FieldValues>(
	error: unknown,
	setError: UseFormSetError<TFieldValues>
) => {
	if (error instanceof AxiosError && typeof error.response?.data?.message === "string") {
		setError("root.serverError", { type: "server", message: error.response.data.message });
		if (Array.isArray(error.response.data?.errors)) {
			error.response.data.errors.forEach(
				(paramError: { param: Path<TFieldValues>; msg: string }) => {
					setError(paramError.param, {
						type: "api",
						message: paramError.msg
					});
				}
			);
		}
	} else if (error instanceof Error && typeof error.message === "string") {
		setError("root.serverError", { type: "server", message: error?.message });
	} else {
		setError("root.serverError", { type: "server", message: "Неизвестная ошибка" });
	}
};

export const handleError = (error: unknown): string => {
	let errorMessage: string = "";
	if (error instanceof AxiosError && typeof error.response?.data?.message === "string") {
		errorMessage = error.response.data.message;

		if (Array.isArray(error.response.data?.errors)) {
			errorMessage += ". ";
			errorMessage += error.response.data.errors
				.map((paramError: { param: string; msg: string }) => paramError.msg)
				.join("; ");
		}
	} else if (error instanceof Error && typeof error.message === "string") {
		errorMessage = error.message;
	} else {
		errorMessage = "Неизвестная ошибка";
	}

	return errorMessage;
};
