import { BadRequestException, ForbiddenException, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Board, BoardDocument, BoardModel } from "./board.schema";
import { RootFilterQuery, Types } from "mongoose";
import { UserFromToken } from "auth/decorators/user.decorator";

@Injectable()
export class BoardsService {
	constructor(@InjectModel(Board.name) private boardModel: BoardModel) {}

	async findBoards(user: UserFromToken): Promise<BoardDocument[]> {
		const condition: RootFilterQuery<Board> = {};

		if (!user.isAdmin) {
			condition.$or = [{ owner: user._id }, { users: user._id }];
		}

		return this.boardModel
			.find(condition)
			.sort({ createdAt: "desc" })
			.select({ _id: 1, name: 1 })
			.exec();
	}

	async findBoard(_id: Types.ObjectId, user: UserFromToken): Promise<BoardDocument> {
		const condition: RootFilterQuery<Board> = { _id };

		if (!user.isAdmin) {
			condition.$or = [{ owner: user._id }, { users: user._id }];
		}

		const board = await this.boardModel.findById(condition).exec();

		if (!board) throw new BadRequestException("Доска не найдена");
		if (
			!user.isAdmin &&
			(board.owner.equals(user._id) || board.users.some(_id => _id.equals(user._id)))
		) {
			throw new ForbiddenException("Нет доступа");
		}

		return board;
	}
}
