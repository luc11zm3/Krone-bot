module.exports = {
    name: 'pause',
    aliases: [],
    utilisation: 'pause',
    voiceChannel: true,
    description: 'Dừng bài hát hiện tại.',
    type: '🎵Nhạc',


    execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue) return message.channel.send(`Đéo có nhạc nào đang chạy hết 🖕`);

        const success = queue.setPaused(true);

        return message.channel.send(success ? `${queue.current.title} đã dừng lại ✅` : `Đéo ổn rồi thử lại cái nào... ❌`);
    },
};