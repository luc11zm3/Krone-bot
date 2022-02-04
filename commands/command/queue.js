const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'queue',
    aliases: ['q'],
    utilisation: 'queue',
    voiceChannel: true,
    description: 'Hiển thị danh sách phát.',
    type: 'Nhạc',

    execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue) return message.channel.send(`Đéo có bài nào đang chạy hết... ❌`);

        if (!queue.tracks[0]) return message.channel.send(`Danh sách phát có 1 bài hiện tại thôi... ❌`);

        const embed = new MessageEmbed();
        const methods = ['', '🔁', '🔂'];

        embed.setColor('RANDOM');
        embed.setThumbnail(message.guild.iconURL({ size: 2048, dynamic: true }));
        embed.setAuthor(`Danh sách phát của Server - ${message.guild.name} ${methods[queue.repeatMode]}`, client.user.displayAvatarURL({ size: 1024, dynamic: true }));

        const tracks = queue.tracks.map((track, i) => `**${i + 1}** - ${track.title} | ${track.author} (Yêu cầu bởi : ${track.requestedBy.username})`);

        const songs = queue.tracks.length;
        const nextSongs = songs > 5 ? `Và **${songs - 5}** bài nữa...` : `Danh sách phát có **${songs}** bài...`;

        embed.setDescription(`Hiện tại đang phát: ${queue.current.title}\n\n${tracks.slice(0, 5).join('\n')}\n\n${nextSongs}`);

        embed.setTimestamp();

        message.channel.send({ embeds: [embed] });
    },
};