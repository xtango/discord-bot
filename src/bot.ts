import DiscordJS from 'discord.js';
import { BOT_CONFIG } from './bot-config';
import { echoCommand } from './commands/echo';

/**
 * Models discord client and commands
 */
export class Bot {
	client: DiscordJS.Client;
	prefix: string;

	constructor() {
		const allIntents = new DiscordJS.Intents(32767);
		this.client = new DiscordJS.Client({ intents: allIntents });
		this.prefix = BOT_CONFIG.COMMAND_PREFIX;
	}

	start(token: string) {
		console.clear();
		// Event handlers
		this.client.on('ready', () => {
			console.log('Bot is ready');
		});

		this.client.on('messageCreate', (message) => {
			console.log('messageCreate', message);

			if (message.author.bot) return;

			if (!message.content.startsWith(this.prefix)) return;

			const tail =  message.content.substring(this.prefix.length);
			const args = tail.split(/ +/); // ignore all spaces
			console.log('args', args);

			switch (args[0]) {
				case 'echo': echoCommand.run(message);
					break;
				default: message.reply(`${args[0]} is not a valid command!`);
			}

		});

		this.client.login(token);
	}
}

