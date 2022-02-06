module.exports = {
    name: 'stop',
    aliases: ['dc'],
    utilisation: 'stop',
    voiceChannel: true,
    description: 'Dừng bài hát hiện tại.',
    type: '🎵Nhạc',

    execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`Đéo có bài nào mà dừng ❌`);

        queue.destroy();

        message.channel.send(`Đã dừng bai mày, nghe hơi ít đấy ✅`);
    },
};