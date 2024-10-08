import type { ComponentPropsWithoutRef } from "react";
import type { Board } from "../types";
import style from "./index.module.scss";
import classNames from "classnames";

export interface BoardCardProps extends ComponentPropsWithoutRef<"div"> {
	board: Board;
}

export const BoardCard = ({ className, board, ...props }: BoardCardProps) => {
	return (
		<div className={classNames(style.boardCard, className)} {...props}>
			{board.name}
		</div>
	);
};
