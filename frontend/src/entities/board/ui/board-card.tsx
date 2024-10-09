import type { Board } from "../types";
import style from "./index.module.scss";
import classNames from "classnames";
import { Link, LinkProps } from "react-router-dom";
import { BOARD_ROUTE } from "shared/constants/routes";

export interface BoardCardProps extends Omit<LinkProps, "to"> {
	board: Board;
}

export const BoardCard = ({ className, board, ...props }: BoardCardProps) => {
	return (
		<Link
			className={classNames(style.boardCard, className)}
			{...props}
			to={BOARD_ROUTE.replace(":id", board._id)}
		>
			{board.name}
		</Link>
	);
};
