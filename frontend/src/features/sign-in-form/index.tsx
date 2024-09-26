import { Form } from "shared/ui/form";
import { useSignInForm } from "./model";
import { Input } from "shared/ui/input";
import { Button } from "shared/ui/button";
import { ErrorMessage } from "shared/ui/error-message";
import { Loader } from "shared/ui/loader";

export const SignInForm = () => {
	const {
		submit,
		formState: { errors, isSubmitting },
		fields
	} = useSignInForm();

	return (
		<Form onSubmit={submit}>
			<Input error={errors.login?.message} {...fields.login} />
			<Input error={errors.password?.message} {...fields.password} />
			<ErrorMessage error={errors.root?.serverError?.message} />
			<Button>{isSubmitting ? <Loader /> : "Войти"}</Button>
		</Form>
	);
};
