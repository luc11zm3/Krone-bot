module.exports = {
    name: 'restart',
    aliases: [],
    utilisation: 'restart',
    description: 'Restart bot',
    type: '🙀',

    async execute(client, message) {
    if(message.author.id != '529474880488603659'||message.author.id != '440491975121174548') return message.reply('bín');

    const msg = await message.channel.send('Resetting...')
    client.destroy()
    client.login(client.config.app.token)
    msg.edit('Đã restart thành công bot!');
    },
};