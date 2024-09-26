import { userFields, userService } from "entities/user";
import { useForm } from "react-hook-form";
import { setApiErrors } from "shared/helpers/error";

type FormData = {
	login: string;
	password: string;
};

export const useSignInForm = () => {
	const { handleSubmit, formState, setError, register } = useForm<FormData>({
		defaultValues: {
			login: "",
			password: ""
		}
	});

	const submit = async (data: FormData) => {
		if (formState.isSubmitting) return;

		try {
			await userService.signIn(data.login, data.password);
		} catch (e) {
			setApiErrors(e, setError);
		}
	};

	const login = register("login", userFields.login());
	const password = register("password", userFields.password());

	return {
		formState,
		submit: handleSubmit(submit),
		fields: {
			login,
			password
		}
	};
};
