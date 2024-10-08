import { ReactNode } from "react";
import { Header } from "shared/ui/header";
import style from "./index.module.scss";

export interface LayoutProps {
	children?: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
	return (
		<div className={style.layout}>
			<Header className={style.header} rightChildren="TEST" leftChildren="test" />
			<div className={style.main}>{children}</div>
		</div>
	);
};
