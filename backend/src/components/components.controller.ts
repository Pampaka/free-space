import { Controller, Get, Param } from "@nestjs/common";
import { ComponentsService } from "./components.service";
import { ParseObjectIdPipe } from "shared/pipes/parse-object-id.pipe";
import { Types } from "mongoose";
import { User, UserFromToken } from "auth/decorators/user.decorator";

@Controller("components")
export class ComponentsController {
	constructor(private componentsService: ComponentsService) {}

	@Get("/boardId")
	async findByBoard(
		@Param("boardId", ParseObjectIdPipe) boardId: Types.ObjectId,
		@User() user: UserFromToken
	) {
		return this.componentsService.findByBoard(boardId, user);
	}
}
