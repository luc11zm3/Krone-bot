const { QueryType } = require('discord-player');
module.exports = {
    name: 'play',
    aliases: ['p'],
    utilisation: 'play [song name/URL]',
    voiceChannel: true,
    description: 'Thêm nhạc vào danh sách phát.',
    type: 'Nhạc',

    async execute(client, message, args) {
        if (!args[0]) return message.channel.send(`Biết dùng bot không? ${client.config.app.px}play rồi thêm cái tên bài hát vào ❌`);

        const res = await player.search(args.join(' '), {
            requestedBy: message.member,
            searchEngine: QueryType.AUTO
        });

        if (!res || !res.tracks.length) return message.channel.send(`Bật bài con cặc gì đéo tìm được... ❌`);

        const queue = await player.createQueue(message.guild, {
            metadata: message.channel
        });

        try {
            if (!queue.connection) await queue.connect(message.member.voice.channel);
        } catch {
            await player.deleteQueue(message.guild.id);
            return message.channel.send(`Tao đéo vào voice được cứuuuuuuuuuu... ❌`);
        }

        await message.channel.send(`Đang load ${res.playlist ? 'playlist' : 'track'}... 🎧`);

        res.playlist ? queue.addTracks(res.tracks) : queue.addTrack(res.tracks[0]);

        if (!queue.playing) await queue.play();
    },
};