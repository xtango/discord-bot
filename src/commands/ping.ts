import { Bot } from "../bot-client";
import { BotCommand } from "../bot-command";
import DiscordJS from 'discord.js';

type RunFunction = (message: DiscordJS.Message | DiscordJS.Interaction, args: string[], client: Bot)=> void;

module.exports = new BotCommand({
	name: "ping",
	description: "Shows the ping of the bot!",
	async run(message: DiscordJS.Message | DiscordJS.Interaction, _: any, botClient: Bot) {
		const msg = await message.reply(`Ping: ${botClient.client.ws.ping} ms.`);

		msg.edit(
			`Ping: ${botClient.client.ws.ping} ms.\nMessage Ping: ${
				msg.createdTimestamp - message.createdTimestamp
			}`
		);
	}
});
