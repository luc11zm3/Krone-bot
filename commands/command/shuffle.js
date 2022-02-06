module.exports = {
    name: 'shuffle',
    aliases: ['sh'],
    utilisation: 'shuffle',
    voiceChannel: true,
    description: 'Trộn danh sách phát.',
    type: '🎵Nhạc',

    async execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`Đéo có nhạc nào đang chạy hết 🖕`);

        if (!queue.tracks[0]) return message.channel.send(`Bật có 1 bài shuff cái củ cặc à? ❌`);

        await queue.shuffle();

        return message.channel.send(`Danh sách phát đã được trộn **${queue.tracks.length}** bài ! ✅`);
    },
};