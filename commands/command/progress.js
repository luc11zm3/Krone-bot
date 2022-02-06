module.exports = {
    name: 'progress',
    aliases: ['pbar'],
    utilisation: 'progress',
    voiceChannel: true,
    description: 'Hiển thị thanh thời gian đã phát của nhạc',
    type: '🎵Nhạc',

    async execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`Đéo có bài nào hết địt cụ mày... 🖕`);

        const progress = queue.createProgressBar();
        const timestamp = queue.getPlayerTimestamp();

        if (timestamp.progress == 'Infinity') return message.channel.send(`Không thể hiển thị... 🎧`);

        message.channel.send(`${progress} (**${timestamp.progress}**%)`);
    },
};