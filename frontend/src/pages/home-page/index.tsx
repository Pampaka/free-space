import { BoardCard, BoardsGrid, useBoards } from "entities/board";
import style from "./index.module.scss";

const HomePage = () => {
	const { boards } = useBoards();

	return (
		<div className={style.page}>
			<BoardsGrid>
				{boards.map(board => (
					<BoardCard key={board._id} board={board} />
				))}
			</BoardsGrid>
		</div>
	);
};

export default HomePage;
