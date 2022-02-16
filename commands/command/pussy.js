const NSFW = require("discord-nsfw");
module.exports = {
    name: 'pussy',
    aliases: [],
    utilisation: 'pussy',
    description: 'ok',
    type: '❌NSFW',

    async execute(client, message, args) {
        const nsfw = new NSFW();
        const image = await nsfw.pussy();
        message.channel.send(image)
    },
};