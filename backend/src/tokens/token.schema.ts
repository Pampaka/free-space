import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument, Model, Types } from "mongoose";

export type TokenDocument = HydratedDocument<Token>;
export type TokenModel = Model<Token>;

@Schema({
	timestamps: { createdAt: true }
})
export class Token {
	@Prop({ required: true })
	refreshToken: string;

	@Prop({ type: Types.ObjectId, ref: "User", required: true })
	user: Types.ObjectId;

	@Prop()
	createdAt?: Date;
}

export const TokenSchema = SchemaFactory.createForClass(Token);
