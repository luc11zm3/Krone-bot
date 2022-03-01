const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'addemoji',
    aliases: [],
    utilisation: '[URL] [Name_Emoji]',
    description: 'Thêm emoji',
    type: '🛠Quản lý server',

    async execute(client, message, args) {
      const URL = args[0];
      if (!URL) {
        return message.channel.send("Không thể tìm thấy link");
      }

      const name = args[1] ? args[1].replace(/[^a-z0-9]/gi, "") : null;
      if (!name) {
        return message.channel.send("Không thể tìm thấy tên");
      }
      if (name.length < 2 || name > 32) {
        return message.channel.send("Tên không xác định");
      }

      message.guild.emojis
        .create(URL, name)
        .then(emoji => {
          message.channel.send(`Đã thêm **${name}**`);
        })
        .catch(() => {
          message.channel.send(`Không thể thêm **${name}**`);
        });

    },
};