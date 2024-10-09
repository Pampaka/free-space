import { SignInForm } from "features/sign-in-form";
import { Card } from "shared/ui/card";
import style from "./index.module.scss";
import { layoutSettings } from "widgets/layout";

const SignInPage = layoutSettings(
	() => {
		return (
			<div className={style.page}>
				<Card className={style.card}>
					<h1 className={style.title}>Вход</h1>
					<SignInForm />
				</Card>
			</div>
		);
	},
	{ isHidden: true }
);

export default SignInPage;
