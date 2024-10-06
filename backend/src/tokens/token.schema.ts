import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument, Model, Types } from "mongoose";
import { User } from "users/user.schema";

export type TokenDocument = HydratedDocument<Token>;
export type TokenModel = Model<Token>;

@Schema()
export class Token {
	@Prop({ required: true })
	refreshToken: string;

	@Prop({ type: Types.ObjectId, ref: "User", required: true })
	user: User;
}

export const TokenSchema = SchemaFactory.createForClass(Token);
