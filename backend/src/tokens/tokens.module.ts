import { Module } from "@nestjs/common";
import { ConfigType } from "@nestjs/config";
import { JwtModule } from "@nestjs/jwt";
import { Token, TokenSchema } from "./token.schema";
import { configuration } from "config/configuration";
import { TokensService } from "./tokens.service";
import { MongooseModule } from "@nestjs/mongoose";

@Module({
	imports: [
		MongooseModule.forFeature([{ schema: TokenSchema, name: Token.name }]),
		JwtModule.registerAsync({
			inject: [configuration.KEY],
			useFactory: (config: ConfigType<typeof configuration>) => ({
				secret: config.jwt.accessSecret,
				signOptions: { expiresIn: config.jwt.accessExpires }
			})
		})
	],
	providers: [TokensService],
	exports: [TokensService]
})
export class TokensModule {}
