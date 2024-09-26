import type { ComponentPropsWithRef } from "react";
import classNames from "classnames";
import style from "./index.module.scss";

export interface CardProps extends ComponentPropsWithRef<"div"> {}

export const Card = ({ className, children, ...props }: CardProps) => {
	return (
		<div className={classNames(style.card, className)} {...props}>
			{children}
		</div>
	);
};
