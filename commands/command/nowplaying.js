const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');

module.exports = {
    name: 'nowplaying',
    aliases: ['np'],
    utilisation: 'nowplaying',
    voiceChannel: true,
    description: 'hiển thị thông tin bài hát hiện tại.',
    type: '🎵Nhạc',

    execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`Đéo có nhạc nào đang chạy hết 🖕`);

        const track = queue.current;

        const embed = new MessageEmbed();

        embed.setColor('RANDOM');
        embed.setThumbnail(track.thumbnail);
        embed.setAuthor({
            name: track.title, 
            iconURL: client.user.displayAvatarURL({ size: 1024, dynamic: true })
    });

        const methods = ['tắt', 'one', 'queue'];

        const timestamp = queue.getPlayerTimestamp();
        const trackDuration = timestamp.progress == 'Infinity' ? 'infinity (live)' : track.duration;

        embed.setDescription(`Âm đ.. lượng **${queue.volume}**%\nThời gian **${trackDuration}**\nLoop mode **${methods[queue.repeatMode]}**\nĐược bật bởi ${track.requestedBy}`);
        embed.setFooter({
            text: 'BOT coded by luciizme#2603'
        })
        embed.setTimestamp();

        message.channel.send({embeds :[embed]});
    },
};
