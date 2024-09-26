import { faSpinner } from "@fortawesome/free-solid-svg-icons/faSpinner";
import { FontAwesomeIcon, FontAwesomeIconProps } from "@fortawesome/react-fontawesome";
import classNames from "classnames";

import style from "./index.module.scss";

export interface LoaderProps extends Omit<FontAwesomeIconProps, "icon"> {}

export const Loader = ({ className, ...props }: LoaderProps) => {
	return (
		<FontAwesomeIcon
			className={classNames(style.loader, className)}
			{...props}
			icon={faSpinner}
		/>
	);
};
