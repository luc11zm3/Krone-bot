module.exports = {
    name: 'clear',
    aliases: ['cq'],
    utilisation: 'clear',
    voiceChannel: true,
    description: 'Xoá hết tất cả nhạc trong danh sách phát.',
    type: '🎵Nhạc',


    async execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`Đéo có nhạc nào đang chạy hết 🖕`);

        if (!queue.tracks[0]) return message.channel.send(`Đéo có nhạc nào clear cc à.. ❌`);

        await queue.clear();

        message.channel.send(`Queue đã clear... 🗑️`);
    },
};