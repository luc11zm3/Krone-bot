module.exports = {
    name: 'avatar',
    aliases: ['avt'],
    utilisation: 'avatar <@mention>',
    description: 'Hiển thị ảnh đại diện.',
    type: '📜Thông tin',

    execute(client, message, args) {
        const user = message.mentions.users.first() || message.author;
        let avatar = user.displayAvatarURL({ size: 1024, dynamic: true });
        message.channel.send(`Avatar của ${user.username}`);
        message.channel.send(avatar);
        //console.log(user)
    },
};