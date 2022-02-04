const { Player } = require('discord-player');
const { Client, Intents } = require('discord.js');

global.client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MEMBERS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_VOICE_STATES
    ],
    disableMentions: 'everyone',
});
client.config = require('./config');
client.HTVN = require('./lucihtvn');
global.player = new Player(client, client.config.opt.discordPlayer);
client.on('messageCreate', msg =>{
    if(msg.content === 'ok'){
        console.log(client.HTVN.UserInfo(208284))
    }
})
require('./src/loader');
require('./src/events');

client.login(client.config.app.token);
