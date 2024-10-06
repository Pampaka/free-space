import { Provider } from "@nestjs/common";
import { UsersService } from "./users.service";

export const usersProviders: Provider[] = [
	{
		provide: "createDefaultUser",
		inject: [UsersService],
		useFactory: async (usersService: UsersService) => {
			await usersService.createDefaultUser();
		}
	}
];
