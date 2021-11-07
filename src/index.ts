import { Bot } from './bot';
import { BOT_CONFIG } from './bot-config';

/**
 * Read env file
 */
const dotenv = require('dotenv');
dotenv.config();

/**
 * Registers and logs in
 */
const token: string | undefined = process.env.DISCORD_BOT_TOKEN;
if (token) {
console.log(`Starting Bot with token ${token}`);
new Bot().start(token);
} else {
    console.log('Error token in .env not found');
}
