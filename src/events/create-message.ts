import { BotEvent } from "../bot-event";
import { Bot } from "../bot-client";
import DiscordJS from 'discord.js';

type RunFunction = (message: DiscordJS.Message | DiscordJS.Interaction, args: string[], client: Bot)=> void;

const callBack = 
(client: Bot, message: any) => {
	console.log('createMessage', message);
	if (message.author.bot) return;

	if (!message.content.startsWith(client.prefix)) return;

	const args = message.content.substring(client.prefix.length).split(/ +/);
	const command = client.commands.find(cmd => cmd.name == args[0]);

	if (!command) return message.reply(`${args[0]} is not a valid command!`);

	command.run(message, args, client);
}

export const messageCreate = new BotEvent("messageCreate", callBack);
