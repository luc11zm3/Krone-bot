module.exports = {
    name: 'skip',
    aliases: ['sk'],
    utilisation: 'skip',
    voiceChannel: true,
    description: 'Bỏ qua 1 bài hát.',
    type: '🎵Nhạc',

    execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`Đéo có nhạc nào đang chạy hết 🖕`);

        const success = queue.skip();

        return message.channel.send(success ? `Bài ${queue.current.title} đã skip ✅` : `Đéo ổn rồi chạy lại thử đi em... ❌`);
    },
};