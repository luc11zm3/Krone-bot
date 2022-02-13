module.exports = {
    name: 'remove',
    aliases: ['rm'],
    utilisation: 'remove [position]',
    voiceChannel: true,
    description: 'Xoá bài hát tại vị trí yêu cầu',
    type: '🎵Nhạc',


    async execute(client, message, args) {
        const queue = player.getQueue(message.guild.id);
        if(parseInt(args[0]) > queue.tracks.length) return message.channel.send('Chọn cái con cặc gì đấy nhìn lại playlist đi... ❌');
        if(!args[0]) return message.channel.send('Chọn số đi con chó lồn... ❌')
        if (args[0] && isNaN(args[0])) return message.channel.send("Nhập vị trí vào coi địt mẹ ❌");
        const track = queue.tracks[parseInt(args[0])-1];
        queue.remove(parseInt(args[0])-1)
        message.channel.send(`Đã xoá bài hát **${track.title}** khỏi danh sách phát bởi *${message.author.username}*... ✅`);   

    },
};
