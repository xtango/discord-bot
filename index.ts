// import { Intents } from 'discord.js';
// import DiscordJS, { Intents } from 'discord.js';
// import dotenv from 'dotenv';

/**
 * To Install
 *      npm install discord.js @discordjs/rest discord-api-types
 *      npm install typescript ts-node
 * To run:
 *      npx ts-node index.ts
 */
const Discord = require('discord.js');

//
// Based on example here https://www.youtube.com/watch?v=-_MGnBeLYN4
//
const intents = new Discord.Intents(); // 32767); // 32767 means ALL.
const client = new Discord.Client({ intents });
client.login('OTA0NzcyMDQyNzg2NzU0NTYx.YYAYoA.N_ncrfaO9ER3Y3WRp9Mv9-zsrf4');

//////////////////////////////////////////////////////////////////////////

/**
 * Register a slash command against the Discord API:
 */

// const { REST } = require('@discordjs/rest');
// const { Routes } = require('discord-api-types/v9');

// const commands = [
//     {
//         name: 'ping',
//         description: 'Replies with Pong!',
//     },
// ];

// const rest = new REST({ version: '9' }).setToken('token');

// (async () => {
//     const CLIENT_ID = '904772042786754561';
//     /**
//      * This is the Server ID
//      */
//     // todo: const GUILD_ID =

//     try {
//         console.log('Started refreshing application (/) commands.');

//         await rest.put(Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID), { body: commands });

//         console.log('Successfully reloaded application (/) commands.');
//     } catch (error) {
//         console.error(error);
//     }
// })();

// const { Client, Intents } = require('discord.js');
// const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

// client.on('ready', () => {
//     console.log(`Logged in as ${client.user.tag}!`);
// });

// client.on('interactionCreate', async (interaction) => {
//     if (!interaction.isCommand()) return;

//     if (interaction.commandName === 'ping') {
//         await interaction.reply('Pong!');
//     }
// });

// client.login('TOKEN');

//////////////////////////////////////////////////////////////////////////
// dotenv.config();

// const client = new DiscordJS.Client({
//     intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
// });

// client.on('ready', () => {
//     console.log('GSIBD bot is ready');
// });

// /**
//  * Listen to event
//  */
// client.on('messageCreate', (message) => {
//     if (message.content === 'ping') {
//         message.reply({
//             content: 'pong',
//         });
//     }
// });
// client.login(process.env.TOKEN);
