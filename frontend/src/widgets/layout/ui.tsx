import { ReactNode } from "react";
import { Header } from "shared/ui/header";
import style from "./index.module.scss";
import { layoutService } from "./model";
import classNames from "classnames";
import { observer } from "mobx-react-lite";

export interface LayoutProps {
	children?: ReactNode;
}

export const Layout = observer(({ children }: LayoutProps) => {
	if (layoutService.isHidden) {
		return <div className={classNames(style.main, style.noHeader)}>{children}</div>;
	}

	return (
		<div className={style.layout}>
			<Header className={style.header} rightChildren="TEST" leftChildren="test" />
			<div className={style.main}>{children}</div>
		</div>
	);
});
