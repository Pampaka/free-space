import { ConsoleLogger, Inject, Injectable, LogLevel, Scope } from "@nestjs/common";
import { AppConfigType, configuration } from "config/configuration";

@Injectable({ scope: Scope.TRANSIENT })
export class AppLogger extends ConsoleLogger {
	private _isColorized: boolean = true;

	constructor(
		@Inject(configuration.KEY)
		private readonly config: AppConfigType
	) {
		super();
		this.setLogLevels(this.config?.logger?.levels);
		this.setColorize(this.config?.logger?.colorized);
	}

	setColorize(colorize: boolean): void {
		this._isColorized = colorize;
	}

	override formatMessage(
		logLevel: LogLevel,
		message: unknown,
		_pidMessage: string,
		formattedLogLevel: string,
		contextMessage: string,
		_timestampDiff: string
	): string {
		const output = this.stringifyMessage(message, null);
		formattedLogLevel = this.colorize(`<${formattedLogLevel.trim()}>`, logLevel);
		return `[${this.getTimestamp()}] ${formattedLogLevel} : ${contextMessage} ${output}\n`;
	}

	override formatContext(context: string): string {
		let formattedContext: string;

		if (!this.context) {
			formattedContext = context;
		} else if (context && context !== this.context) {
			formattedContext = `${this.context}.${context}`;
		} else {
			formattedContext = this.context;
		}

		return super.formatContext(formattedContext);
	}

	override getTimestamp(): string {
		const timestamp = new Date();

		return `${timestamp.toLocaleDateString()} ${timestamp.toLocaleTimeString()}.${timestamp.getMilliseconds()}`;
	}

	override colorize(message: string, logLevel: LogLevel): string {
		if (!this._isColorized || !logLevel) return message;
		return super.colorize(message, logLevel);
	}
}
