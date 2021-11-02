import DiscordJS from 'discord.js';
import { Bot } from './bot';

type RunFunction = (message: DiscordJS.Message | DiscordJS.Interaction, args?: string[], client?: Bot)=> void;

/**
 * Models a Discourse command
 */
export class BotCommand {
    name: string;
    description: string;
    run: RunFunction;
    
	constructor(options: { name: string, description: string; run: RunFunction}) {
		this.name = options.name;
		this.description = options.description;
		this.run = options.run;
	}
}
