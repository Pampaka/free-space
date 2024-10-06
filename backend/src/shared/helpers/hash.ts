import * as bcrypt from "bcrypt";

export async function hash(value: string) {
	return bcrypt.hash(value, 10);
}

export async function compareHash(value: string, hash: string) {
	return bcrypt.compare(value, hash);
}
