import { forwardRef, type ComponentPropsWithoutRef, type ReactNode } from "react";
import classNames from "classnames";
import style from "./index.module.scss";

export interface CheckboxProps extends Omit<ComponentPropsWithoutRef<"input">, "type"> {
	label?: ReactNode;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
	({ label, className, ...props }, ref) => {
		return (
			<label className={classNames(style.label, className)}>
				<input className={style.checkbox} type="checkbox" ref={ref} {...props} />
				{label}
			</label>
		);
	}
);
