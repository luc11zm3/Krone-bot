const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'queue',
    aliases: ['q'],
    utilisation: 'queue',
    voiceChannel: true,
    description: 'Hiển thị danh sách phát.',
    type: '🎵Nhạc',

    async execute(client, message, args) {
        const queue = player.getQueue(message.guild.id);

        if (!queue) return message.channel.send(`Đéo có bài nào đang chạy hết... ❌`);
        if (args[0] && isNaN(args[0])) return message.channel.send("Nhập vị trí vào con chó lồn ❌");
        if (!queue.tracks[0]) return message.channel.send(`Có 1 bài queue lồn... ❌`);
        //if(!args[0]){
                const embed = new MessageEmbed();
                const methods = ['', '🔁', '🔂'];
        
                embed.setColor('RANDOM');
                embed.setThumbnail(message.guild.iconURL({ size: 2048, dynamic: true }));
                embed.setAuthor({
                    name: `Danh sách phát của Server - ${message.guild.name} ${methods[queue.repeatMode]}`, 
                    iconURL: client.user.displayAvatarURL({ size: 1024, dynamic: true })
            });
            var page = parseInt(args[0] ? args[0] : 1);
            let tracks = []
                tracks.push(`Hiện tại đang phát: ${queue.current.title} (Yêu cầu bởi: ${queue.current.requestedBy.username})\n`)                    
                for (var i = 5 * (page - 1); i < 5 * page; i++) {
                    if (queue.tracks[i]) tracks.push(` **${i+1}** - ${queue.tracks[i].title} (Yêu cầu bởi : ${queue.tracks[i].requestedBy.username}) `);
                        else break;
                }
                const songs = queue.tracks.length;
                const nextSongs =`Danh sách phát có **${songs}** bài...`;
                const lastNext = "`" + client.config.app.px +"queue" + "[Số trang]" + "`" + " để chuyển tiếp giữa các trang"
                embed.setDescription(`${tracks.join("\n")}\n\n ${nextSongs}\n ${lastNext} `);
                embed.setFooter(client.embed.footer);
                embed.setTimestamp();
                
                message.channel.send({ embeds: [embed] });
        
    },
};
