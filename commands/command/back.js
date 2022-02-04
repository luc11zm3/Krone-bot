module.exports = {
    name: 'back',
    aliases: ['previous'],
    utilisation: 'back',
    voiceChannel: true,
    description: 'Phát bản nhạc trước đó.',
    type: 'Nhạc',


    async execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`Đéo có nhạc nào đang chạy hết 🖕`);

        if (!queue.previousTracks[1]) return message.channel.send(`Có nhạc đéo nào đâu mà back.. ❌`);

        await queue.back();

        message.channel.send(`Đang bật track vừa rồi... ✅`);
    },
};