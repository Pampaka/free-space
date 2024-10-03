import { SignInForm } from "features/sign-in-form";
import { Card } from "shared/ui/card";
import style from "./index.module.scss";

const SignInPage = () => {
	return (
		<div className={style.page}>
			<Card className={style.card}>
				<SignInForm />
			</Card>
		</div>
	);
};

export default SignInPage;
