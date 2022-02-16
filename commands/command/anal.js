const NSFW = require("discord-nsfw");
module.exports = {
    name: 'anal',
    aliases: [],
    utilisation: 'anal',
    description: 'ok',
    type: '❌NSFW',

    async execute(client, message, args) {
        const nsfw = new NSFW();
        const image = await nsfw.anal();
        message.channel.send(image)
    },
};