const NSFW = require("discord-nsfw");
module.exports = {
    name: 'boob',
    aliases: [],
    utilisation: 'boob',
    description: 'ok',
    type: '❌NSFW',

    async execute(client, message, args) {
        const nsfw = new NSFW();
        const image = await nsfw.boobs();
        message.channel.send(image)
    },
};