module.exports = {
    name: 'resume',
    aliases: ['rs'],
    utilisation: 'resume',
    voiceChannel: true,
    description: 'Tiếp tục bài hát hiện tại',
    type: 'Nhạc',

    execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue) return message.channel.send(`Đéo có bài nào đang bật hết 🖕`);

        const success = queue.setPaused(false);

        return message.channel.send(success ? `Bài ${queue.current.title} đã được tiếp tục ✅` : `Đéo ổn rồi thử lại cái... ❌`);
    },
};