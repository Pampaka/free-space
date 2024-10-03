import {
	Injectable,
	ValidationPipe,
	ValidationError,
	BadRequestException,
	ArgumentMetadata
} from "@nestjs/common";

@Injectable()
export class ValidatePipe extends ValidationPipe {
	constructor() {
		super({
			transform: true,
			transformOptions: {
				enableImplicitConversion: true
			},
			whitelist: true,
			exceptionFactory: (validationErrors: ValidationError[] = []) => {
				return new BadRequestException({
					message: "Ошибка валидации",
					statusCode: 400,
					error: "Bad Request",
					errors: this._handleErrors(validationErrors)
				});
			}
		});
	}

	transform(value: any, metadata: ArgumentMetadata): Promise<any> {
		if (typeof value === "object") {
			this._setNullEmptyStringProperties(value);
		}

		return super.transform(value, metadata);
	}

	private _setNullEmptyStringProperties(object: object): void {
		if (typeof object === "object") {
			Object.entries(object).forEach(([key, value]) => {
				if (typeof value === "string" && !value.trim()) {
					object[key] = null;
				}
			});
		}
	}

	private _handleErrors(errors: ValidationError[]) {
		return errors.flatMap(errorContext => {
			if (errorContext.constraints) {
				return Object.values(errorContext.constraints).map(msg => ({
					param: errorContext.property,
					msg
				}));
			} else if (errorContext.children) {
				return this._handleErrors([errorContext.children[0]]);
			} else {
				return [];
			}
		});
	}
}
