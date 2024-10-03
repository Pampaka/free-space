import { applyDecorators } from "@nestjs/common";
import { ValidateIf } from "class-validator";

export const IsCanUndefined = () => {
	return applyDecorators(ValidateIf((_o, value) => value !== undefined));
};
