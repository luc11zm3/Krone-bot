const axios = require('axios');
const cheerio = require('cheerio');
const { MessageEmbed } = require('discord.js');
module.exports = {
    name: 'User',
    aliases: [],
    utilisation: 'User <ID>',
    description: 'Hiển thị thông tin của người dùng thuộc hentaivn.moe.',
    type: '📜Thông tin',

    async execute(client, message, args) {
    const embed = new MessageEmbed()
	//
	const info = await client.UserInfo(args[0]);
	if(info.avatar_url === '/icon/mac_dinh.png' || info.avatar_url.toLowerCase().includes('/avatar/')){
	    info.avatar_url = 'https://hentaivn.moe'+info.avatar_url
	}
	let uploadText = 'Không';
	if(info.upload === true){ uploadText = 'Có' }
	
	embed.setThumbnail(`${info.avatar_url}`)
	embed.setColor('RANDOM');
	embed.setTitle(`**${info.name}** ID: ${info.id.slice(3)}`);
	embed.addFields(
	{ name: `${info.role}`, value: `${info.group}`, inline: true },
	{ name: 'Quyền Upload:', value: `${uploadText}`, inline: true },
	{ name: 'Giới tính:', value: `${info.gender}`, inline: true },
	);
	embed.addFields(
	{ name: 'Ngày sinh:', value: `${info.birthday}`, inline: true },
	{ name: `Gia nhập: `, value: `${info.join}`, inline: true},
	{ name: 'Điểm thành tựu:', value: `${info.point}`, inline: true },
	);
	embed.addFields(
	{ name: 'Comment:', value: `${info.comment}`, inline: true },
	{ name: 'Like:', value: `${info.like}`, inline: true },
	{ name: 'Yên:', value: `${info.yen}`, inline: true },
	);
	embed.addFields(
	{ name: 'Giới thiệu:', value: `${info.introduction}`, inline: false },
	);
	message.channel.send({ embeds : [embed] });
	//
    },
};
