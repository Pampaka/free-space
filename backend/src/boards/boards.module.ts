import { Module } from "@nestjs/common";
import { BoardsService } from "./boards.service";
import { BoardsController } from "./boards.controller";
import { MongooseModule } from "@nestjs/mongoose";
import { Board, BoardSchema } from "./board.schema";

@Module({
	imports: [MongooseModule.forFeature([{ schema: BoardSchema, name: Board.name }])],
	providers: [BoardsService],
	controllers: [BoardsController]
})
export class BoardsModule {}
