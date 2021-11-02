import { Bot } from './bot';
import { BOT_CONFIG } from './bot-config';

/**
 * Registers and logs in
 */
new Bot().start(BOT_CONFIG.TOKEN );
