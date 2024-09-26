import { ComponentPropsWithoutRef, forwardRef } from "react";
import classNames from "classnames";

import style from "./index.module.scss";

export interface InputProps extends ComponentPropsWithoutRef<"input"> {
	error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
	({ className, error, ...props }, ref) => {
		return (
			<div>
				<input
					className={classNames(style.input, { [style.error]: error }, className)}
					ref={ref}
					{...props}
				/>
				{error && <div className={style.errorMessage}>{error}</div>}
			</div>
		);
	}
);
