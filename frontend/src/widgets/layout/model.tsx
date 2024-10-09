import { makeAutoObservable } from "mobx";
import { FC, useEffect } from "react";

export type LayoutOptions = {
	isHidden?: boolean;
};

export function layoutSettings<TProps extends {}>(Component: FC<TProps>, options?: LayoutOptions) {
	return (props: TProps) => {
		useEffect(() => {
			if (options?.isHidden) {
				layoutService.hide();
			} else {
				layoutService.show();
			}
		}, [options?.isHidden]);

		return <Component {...(props as TProps)} />;
	};
}

class LayoutService {
	isHidden = false;

	constructor() {
		makeAutoObservable(this);
	}

	hide() {
		this.isHidden = true;
	}

	show() {
		this.isHidden = false;
	}
}

export const layoutService = new LayoutService();
