export enum Providers {
	APP_CONFIG = "configuration"
}

export enum Roles {
	ADMIN = "admin",
	OPERATOR = "operator",
	SECURITY = "security"
}

export enum SaupgStatus {
	SUCCESS = 0,
	FORBIDDEN = 1,
	DATABASE_ERROR = 2,
	BAD_REQUEST = 3,
	BRANCH_NOT_FOUND = 4,
	PUG_NOT_FOUND = 5,
	AWAITING_SUCCESS = 10,
	INTERNAL_ERROR = 15
}
