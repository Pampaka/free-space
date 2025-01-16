export type Component = {
	_id: string;
	type: ComponentType;
	data?: string;
	position?: Position;
	geometry?: Geometry;
	parent?: string;
};

export enum ComponentType {}

export type Geometry = {
	width?: number;
	height?: number;
	rotation?: number;
};

export type Position = {
	x?: number;
	y?: number;
};
