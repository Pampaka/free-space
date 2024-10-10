import { Module } from "@nestjs/common";
import { ComponentsService } from "./components.service";
import { ComponentsController } from "./components.controller";
import { MongooseModule } from "@nestjs/mongoose";
import { Component, ComponentSchema } from "./component.schema";
import { BoardsModule } from "boards/boards.module";

@Module({
	imports: [
		MongooseModule.forFeature([{ schema: ComponentSchema, name: Component.name }]),
		BoardsModule
	],
	providers: [ComponentsService],
	controllers: [ComponentsController]
})
export class ComponentsModule {}
