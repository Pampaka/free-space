import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument, Model } from "mongoose";

export type UserDocument = HydratedDocument<User>;
export type UserModel = Model<User>;

@Schema({ timestamps: true })
export class User {
	@Prop({ required: true })
	name: string;

	@Prop({ required: true })
	login: string;

	@Prop({ required: true })
	password: string;

	@Prop({ required: true, default: false })
	isAdmin: boolean;

	@Prop({ required: true, default: false })
	isBlocked: boolean;

	@Prop()
	createdAt?: Date;

	@Prop()
	updatedAt?: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);
