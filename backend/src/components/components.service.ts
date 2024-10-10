import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Component, ComponentDocument, ComponentModel } from "./component.schema";
import { Types } from "mongoose";
import { BoardsService } from "boards/boards.service";
import { UserFromToken } from "auth/decorators/user.decorator";

@Injectable()
export class ComponentsService {
	constructor(
		@InjectModel(Component.name) private componentModel: ComponentModel,
		private boardsService: BoardsService
	) {}

	async findByBoard(boardId: Types.ObjectId, user: UserFromToken): Promise<ComponentDocument[]> {
		await this.boardsService.verifyAccessToBoard(boardId, user);
		return this.componentModel.find({ board: boardId }).exec();
	}
}
