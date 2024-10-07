import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument, Model, Types } from "mongoose";

export type BoardDocument = HydratedDocument<Board>;
export type BoardModel = Model<Board>;

@Schema({
	timestamps: true
})
export class Board {
	@Prop({ required: true })
	name: string;

	@Prop({ type: Types.ObjectId, ref: "User", required: true })
	owner: Types.ObjectId;

	@Prop([{ type: Types.ObjectId, ref: "User" }])
	users: Types.ObjectId[];

	@Prop()
	createdAt?: Date;

	@Prop()
	updatedAt?: Date;
}

export const BoardSchema = SchemaFactory.createForClass(Board);
