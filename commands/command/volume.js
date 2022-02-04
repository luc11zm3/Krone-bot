const maxVol = client.config.opt.maxVol;

module.exports = {
    name: 'volume',
    aliases: ['vol'],
    utilisation: `volume [1-${maxVol}]`,
    voiceChannel: true,
    description: 'Điều chỉnh âm lượng.',
    type: 'Nhạc',

    execute(client, message, args) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`Đéo có nhạc nào đang chạy hết 🖕`);

        const vol = parseInt(args[0]);

        if (!vol) return message.channel.send(`Âm lượn hiện tại là ${queue.volume} 🔊\n*Nhập số từ **1** đến **${maxVol}**.*`);

        if (queue.volume === vol) return message.channel.send(`Nhập cc à bằng với cái cũ thì nhập làm đéo gì...❌`);

        if (vol < 0 || vol > maxVol) return message.channel.send(`Sai cụ mày số rồi, nhập từ **1** đến **${maxVol}** ❌`);

        const success = queue.setVolume(vol);

        return message.channel.send(success ? `Âm lượng đã được thay đổi: **${vol}**/**${maxVol}**% 🔊` : `Đéo ổn rồi thử lại cái... ❌`);
    },
};