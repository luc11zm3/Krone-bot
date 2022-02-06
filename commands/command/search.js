const { MessageEmbed } = require('discord.js');
const { QueryType } = require('discord-player');

module.exports = {
    name: 'search',
    aliases: ['sh'],
    utilisation: 'search [song name]',
    voiceChannel: true,
    description: 'Tìm kiếm và thêm nhạc vào danh sách phát',
    type: '🎵Nhạc',

    async execute(client, message, args) {
        if (!args[0]) return message.channel.send(`Nhập đàng hoàng để trống ăn cặc à 🖕`);

        const res = await player.search(args.join(' '), {
            requestedBy: message.member,
            searchEngine: QueryType.AUTO
        });

        if (!res || !res.tracks.length) return message.channel.send(`Tìm bài đéo gì ra đéo đâu... `);

        const queue = await player.createQueue(message.guild, {
            metadata: message.channel
        });

        const embed = new MessageEmbed();

        embed.setColor('RANDOM');
        embed.setAuthor(`Kết quả cho ${args.join(' ')}`, client.user.displayAvatarURL({ size: 1024, dynamic: true }));

        const maxTracks = res.tracks.slice(0, 10);

        embed.setDescription(`${maxTracks.map((track, i) => `**${i + 1}**. ${track.title} | ${track.author}`).join('\n')}\n\nChọn từ **1** tới **${maxTracks.length}** hoặc là **cancel** ⬇️`);

        embed.setTimestamp();
        message.channel.send({ embeds: [embed] });

        const collector = message.channel.createMessageCollector({
            time: 15000,
            errors: ['time'],
            filter: m => m.author.id === message.author.id
        });

        collector.on('collect', async (query) => {
            if (query.content.toLowerCase() === 'cancel') return message.channel.send(`Huỷ tìm kiếm thành công ✅`) && collector.stop();

            const value = parseInt(query.content);

            if (!value || value <= 0 || value > maxTracks.length) return message.channel.send(`Chọn từ  **1** đến **${maxTracks.length}** hoặc là **cancel**... (nhắn lên chat ý)`);

            collector.stop();

            try {
                if (!queue.connection) await queue.connect(message.member.voice.channel);
            } catch {
                await player.deleteQueue(message.guild.id);
                    return message.channel.send(`Tao đéo vào voice được cứuuuuuuuuuu... ❌`);
            }

            await message.channel.send(`Đang load... 🎧`);

            queue.addTrack(res.tracks[query.content - 1]);

            if (!queue.playing) await queue.play();
        });

        collector.on('end', (msg, reason) => {
            if (reason === 'time') return message.channel.send(`Hết cụ thời gian rồi 🖕`);
        });
    },
};