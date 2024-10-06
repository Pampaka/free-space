import { Form } from "shared/ui/form";
import { useSignInForm } from "./model";
import { Input } from "shared/ui/input";
import { Button } from "shared/ui/button";
import { ErrorMessage } from "shared/ui/error-message";
import { Loader } from "shared/ui/loader";
import style from "./index.module.scss";

export const SignInForm = () => {
	const {
		submit,
		formState: { errors, isSubmitting },
		fields
	} = useSignInForm();

	return (
		<Form onSubmit={submit}>
			<Input
				error={errors.login?.message}
				placeholder="Логин"
				autoComplete="username"
				{...fields.login}
			/>
			<Input
				error={errors.password?.message}
				placeholder="Пароль"
				autoComplete="current-password"
				type="password"
				{...fields.password}
			/>
			<ErrorMessage error={errors.root?.serverError?.message} />
			<Button className={style.submit}>{isSubmitting ? <Loader /> : "Войти"}</Button>
		</Form>
	);
};
