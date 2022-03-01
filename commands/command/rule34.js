module.exports = {
    name: 'rule34',
    aliases: ['rl34'],
    utilisation: 'rule34 <character_name>',
    description: 'Gửi ảnh nhân vật được yêu cầu',
    type: '🥩Funny',

    async execute(client, message, args) {
        const msg = await message.channel.send('Đang tìm ảnh...');
        const url = await client.rule34(client.convert(args.join(" ")));
        if(url === 0) return msg.edit('Không thể tìm thấy');
        msg.delete();
        message.channel.send(url)
    },
};