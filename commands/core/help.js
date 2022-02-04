const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'help',
	aliases: ['h'],
	showHelp: false,
	utilisation: 'help',
	description: '',
    type: 'Help',

	execute(client, message, args) {
		const commands = client.commands.filter(x => x.showHelp !== false);
		if(!args[0]){
				const embed = new MessageEmbed();
				embed.setColor('RANDOM');
				embed.setAuthor(client.user.username, client.user.displayAvatarURL({ size: 1024, dynamic: true }));
				embed.addField(`Có thể dùng - ${commands.size}`, commands.map(x => `\`${x.name}${x.aliases[0] ? `(${x.aliases.map(y => y).join(', ')})\`` : '\`'}`).join(', '));
				embed.setTimestamp();
				message.channel.send({ embeds: [embed] });
				
		/*var type = [], typeList = [];
        commands.forEach(command => {
            typeList.push(command.type);

        });
        console.log(typeList);
        for (var i = 0; i < categoryList.length; i++) {
            var category = categoryList[i], commands = [];
            for (var j = 0; j < categories[category].length; j++) {
                var command = categories[category][j];
                commands.push(command.config.name);
            }
            embed.addField(category, commands.join(", "), false);
        }
        message.channel.send(embed);*/
    }else{
    		const name = args[0].toLowerCase();
			const command = client.commands.get(name) || client.commands.find(c => c.aliases && c.aliases.includes(name));
			
			if (!command) {
				return message.reply("Sai cụ mày lệnh rồi");
			}
    		
    		const embedcommandinfo = new MessageEmbed();
			embedcommandinfo.setTitle(`**Lệnh:** ${command.name}`)
			    .setColor("RANDOM")
			    .setDescription(`**Mô tả:**\n${command.description}`)
    if (command.aliases) embedcommandinfo.addField(`**Dùng nhanh:**`, ` \`${command.aliases.join(', ') || "None"}\` `, true);
    if (command.utilisation) embedcommandinfo.addField(`**Cách dùng:**`, `${client.config.app.px}${command.utilisation}`)

		message.channel.send({ embeds: [embedcommandinfo] });
  
		} 
	},
};