import { ComponentPropsWithoutRef } from "react";
import style from "./index.module.scss";
import classNames from "classnames";

export interface BoardsGridProps extends ComponentPropsWithoutRef<"div"> {}

export const BoardsGrid = ({ className, children, ...props }: BoardsGridProps) => {
	return (
		<div className={classNames(style.boardsGrid, className)} {...props}>
			{children}
		</div>
	);
};
