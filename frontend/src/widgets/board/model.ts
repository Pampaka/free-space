import { makeAutoObservable } from "mobx";
import { Board } from "shared/api";

export class BoardStore {
	board?: Board;
	components = [];

	constructor(board: Board, components = []) {
		this.board = board;
		this.components = components;
		makeAutoObservable(this);
	}

	setBoard(board: Board) {
		this.board = board;
	}
}
