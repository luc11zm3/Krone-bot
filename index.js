process.on('uncaughtException', err => {
    console.error('BOT bị lỗi cmnr.\n', err);
});
process.on('uncaughtRejection', err => {
    console.error('BOT bị lỗi cmnr.\n', err);
});
const { Player } = require('discord-player');
const { Client, Intents, MessageEmbed } = require('discord.js');
global.client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MEMBERS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_VOICE_STATES
    ],
    disableMentions: 'everyone',
});
const embed = new MessageEmbed();
    embed.setFooter({
        text: 'BOT coded by: luciizme#2603'
});
client.convert = require('./convert.js');
client.embed = embed;
client.UserInfo = require('./lucihtvn.js');
client.rule34 = require('./rule34.js');
client.config = require('./config');
global.player = new Player(client, client.config.opt.discordPlayer);

require('./src/loader');
require('./src/events');

client.login(client.config.app.token);
