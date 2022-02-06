const { QueueRepeatMode } = require('discord-player');

module.exports = {
    name: 'loop',
    aliases: ['lp', 'repeat'],
    utilisation: 'loop <queue>',
    voiceChannel: true,
    description: 'lặp lại danh sách phát/bài hát',
    type: '🎵Nhạc',


    execute(client, message, args) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`Đéo có nhạc nào đang chạy hết 🖕`);

        if (args.join('').toLowerCase() === 'queue') {
            if (queue.repeatMode === 1) return message.channel.send(`Tắt loop one đi địt cụ mày... ❌`);
            const success = queue.setRepeatMode(queue.repeatMode === 0 ? QueueRepeatMode.QUEUE : QueueRepeatMode.OFF);
                
                return message.channel.send(success ? `${queue.repeatMode === 0 ? 'Repeat mode **đã tắt** danh sách phát đã dừng loop 🔁' : 'Repeat mode **đã bật** danh sách phát hiện tại sẽ lặp lại đến khi tú có người yêu(có nghĩa là không bao giờ dừng lại) 🔁'}` : `Đéo ổn rồi thử lại cái nào... ❌`);

        }else{
            if (queue.repeatMode === 2) return message.channel.send(`Tắt loop queue đi địt cụ mày... ❌`);
            const success = queue.setRepeatMode(queue.repeatMode === 0 ? QueueRepeatMode.TRACK : QueueRepeatMode.OFF);  

                return message.channel.send(success ? `${queue.repeatMode === 0 ? 'Repeat mode **đã tắt** bài hát hiện tại đã dừng loop 🔁' : 'Repeat mode **đã bật** bài hát hiện tại sẽ lặp lại đến khi tú có người yêu(có nghĩa là không bao giờ dừng lại) 🔁'}` : `Đéo ổn rồi thử lại cái nào... ❌`);

        };
    },
};