import { IsBoolean, IsNotEmpty, IsOptional } from "class-validator";

export class CreateUserDto {
	@IsNotEmpty({ message: "Введите ФИО" })
	name: string;

	@IsNotEmpty({ message: "Введите логин" })
	login: string;

	@IsNotEmpty({ message: "Введите пароль" })
	password: string;

	@IsOptional()
	@IsBoolean({ message: "Администратор — логическое значение" })
	isAdmin?: boolean;

	@IsOptional()
	@IsBoolean({ message: "Заблокирован — логическое значение" })
	isBlocked?: boolean;
}
