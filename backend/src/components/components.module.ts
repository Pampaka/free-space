import { Module } from "@nestjs/common";
import { ComponentsService } from "./components.service";
import { ComponentsController } from "./components.controller";
import { MongooseModule } from "@nestjs/mongoose";
import { Component, ComponentSchema } from "./component.schema";
import { BoardsService } from "boards/boards.service";

@Module({
	imports: [
		MongooseModule.forFeature([{ schema: ComponentSchema, name: Component.name }]),
		BoardsService
	],
	providers: [ComponentsService],
	controllers: [ComponentsController]
})
export class ComponentsModule {}
