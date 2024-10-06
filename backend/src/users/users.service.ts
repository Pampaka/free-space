import { Inject, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { User, UserDocument, UserModel } from "./user.schema";
import { Types } from "mongoose";
import { CreateUserDto } from "./dto/create-user.dto";
import { hash } from "shared/helpers/hash";
import { AppConfigType, configuration } from "config/configuration";

@Injectable()
export class UsersService {
	constructor(
		@InjectModel(User.name) private userModel: UserModel,
		@Inject(configuration.KEY) private config: AppConfigType
	) {}

	async createDefaultUser(): Promise<void> {
		const hasUser = await this.userModel.findOne().exec();
		if (!hasUser) {
			await this.create({
				name: this.config.user.name,
				login: this.config.user.login,
				password: this.config.user.password,
				isAdmin: true
			});
		}
	}

	async findByLogin(login: string): Promise<UserDocument> {
		return this.userModel.findOne({ login }).exec();
	}

	async findById(id: Types.ObjectId): Promise<UserDocument> {
		return this.userModel.findById(id).exec();
	}

	async create(createUserDto: CreateUserDto): Promise<UserDocument> {
		createUserDto.password = await hash(createUserDto.password);
		return this.userModel.create(createUserDto);
	}
}
