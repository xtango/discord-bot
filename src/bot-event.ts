import { Bot } from './bot';

type RunFunction = (
	client: Bot,
	args: string[])=> void;

export class BotEvent {
    event: any;
    run: RunFunction;

	constructor(event: any, runFunction: RunFunction) {
		this.event = event;
		this.run = runFunction;
	}
}
