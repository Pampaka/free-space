import type { ComponentPropsWithRef } from "react";
import classNames from "classnames";
import style from "./index.module.scss";

export interface ButtonProps extends ComponentPropsWithRef<"button"> {}

export const Button = ({ className, children, ...props }: ButtonProps) => {
	return (
		<button className={classNames(style.button, className)} {...props}>
			{children}
		</button>
	);
};
