import { Prop, raw, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument, Model, Types } from "mongoose";
import { ComponentType } from "./const";

export type ComponentDocument = HydratedDocument<Component>;
export type ComponentModel = Model<Component>;

@Schema({ timestamps: true })
export class Component {
	@Prop({ enum: Object.values(ComponentType), required: true })
	type: ComponentType;

	@Prop()
	data: string;

	@Prop(
		raw({
			width: { type: Number },
			height: { type: Number },
			rotation: { type: Number }
		})
	)
	geometry: {
		width: number;
		height: number;
		rotation: number;
	};

	@Prop(
		raw({
			x: { type: Number },
			y: { type: Number }
		})
	)
	position: {
		x: number;
		y: number;
	};

	@Prop({ type: Types.ObjectId, ref: "Board", required: true })
	board: Types.ObjectId;

	@Prop({ type: Types.ObjectId, ref: "Component" })
	parent?: Types.ObjectId;

	@Prop({ type: Types.ObjectId, ref: "User" })
	createdBy?: Types.ObjectId;

	@Prop({ type: Types.ObjectId, ref: "User" })
	updatedBy?: Types.ObjectId;

	@Prop()
	createdAt?: Date;

	@Prop()
	updatedAt?: Date;
}

export const ComponentSchema = SchemaFactory.createForClass(Component);
