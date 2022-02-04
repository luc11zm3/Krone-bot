player.on('error', (queue, error) => {
    console.log(`Error emitted from the queue ${error.message}`);
});

player.on('connectionError', (queue, error) => {
    console.log(`Error emitted from the connection ${error.message}`);
});

player.on('trackStart', (queue, track) => {
    if (!client.config.opt.loopMessage && queue.repeatMode !== 0) return;
    queue.metadata.send(`Bắt đầu chạy ${track.title} trong **${queue.connection.channel.name}** 🎧`);
});

player.on('trackAdd', (queue, track) => {
    queue.metadata.send(`Bài ${track.title} đã được thêm vào danh sách phát ✅`);
});

player.on('botDisconnect', (queue) => {
    queue.metadata.send('Disconnect...❌');
});

player.on('channelEmpty', (queue) => {
    queue.metadata.send('Đéo còn ai nghe nữa, ông quại mày đi...❌');
});

player.on('queueEnd', (queue) => {
    queue.metadata.send('Hết danh sách phát ✅');
});