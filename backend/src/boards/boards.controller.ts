import { Controller, Get, Param } from "@nestjs/common";
import { BoardsService } from "./boards.service";
import { User, UserFromToken } from "auth/decorators/user.decorator";
import { Types } from "mongoose";
import { ParseObjectIdPipe } from "shared/pipes/parse-object-id.pipe";

@Controller("boards")
export class BoardsController {
	constructor(private boardsService: BoardsService) {}

	@Get()
	async findBoards(@User() user: UserFromToken) {
		return this.boardsService.findBoards(user);
	}

	@Get(":_id")
	async findBoard(
		@Param("_id", ParseObjectIdPipe) _id: Types.ObjectId,
		@User() user: UserFromToken
	) {
		return this.boardsService.findBoard(_id, user);
	}
}
