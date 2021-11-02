import { BotCommand } from "../bot-command";

export const echoCommand = new BotCommand({
	name: "echo",
	description: "Echos back what you type",

	/**
	 * Replies back with the same text
	 */
	async run(message: any) {
		const tail =  message.content.substring(1 + 'echo'.length);
		message.reply(`$you typed ${tail}`);
	}
});
