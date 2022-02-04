const ms = require('ms');

module.exports = {
    name: 'ping',
    aliases: [],
    utilisation: 'ping',
    description: 'Hiển thị ping.',
    type: 'Thông tin',

    execute(client, message) {
        message.channel.send(`Ping: ${ms(Date.now() - client.ws.shards.first().lastPingTimestamp, { long: true })} ago **${client.ws.ping}ms** 🛰️`);
    },
};