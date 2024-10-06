import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { User, UserSchema } from "./user.schema";
import { UsersService } from "./users.service";
import { usersProviders } from "./users.providers";

@Module({
	imports: [MongooseModule.forFeature([{ schema: UserSchema, name: User.name }])],
	providers: [UsersService, ...usersProviders],
	exports: [UsersService]
})
export class UsersModule {}
