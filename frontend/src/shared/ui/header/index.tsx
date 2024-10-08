import type { ComponentPropsWithoutRef, ReactNode } from "react";
import style from "./index.module.scss";
import classNames from "classnames";

export interface HeaderProps extends ComponentPropsWithoutRef<"header"> {
	rightChildren?: ReactNode;
	leftChildren?: ReactNode;
}

export const Header = ({ className, rightChildren, leftChildren, ...props }: HeaderProps) => {
	return (
		<header className={classNames(style.header, className)} {...props}>
			<div className={style.block}>{rightChildren}</div>
			<div className={style.block}>{leftChildren}</div>
		</header>
	);
};
