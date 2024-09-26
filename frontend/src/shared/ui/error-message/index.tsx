import classNames from "classnames";
import { ComponentPropsWithoutRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons/faCircleExclamation";

import style from "./index.module.scss";

export interface ErrorMessageProps extends ComponentPropsWithoutRef<"div"> {
	error?: string;
}

export const ErrorMessage = ({ error, className, ...props }: ErrorMessageProps) => {
	if (!error) {
		return null;
	}

	return (
		<div className={classNames(style.error, className)} {...props}>
			<FontAwesomeIcon icon={faCircleExclamation} />
			{error}
		</div>
	);
};
