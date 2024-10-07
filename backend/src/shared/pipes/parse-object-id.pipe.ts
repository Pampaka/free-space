import { BadRequestException, PipeTransform } from "@nestjs/common";
import { Types } from "mongoose";

export class ParseObjectIdPipe implements PipeTransform<string> {
	transform(value: string) {
		try {
			return new Types.ObjectId(value);
		} catch (e) {
			throw new BadRequestException("_id должен быть формата ObjectId");
		}
	}
}
