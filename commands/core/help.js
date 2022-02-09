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
				embed.setAuthor({
					name: client.user.username, 
					iconURL: client.user.displayAvatarURL({ size: 1024, dynamic: true })
			});
				embed.setDescription(`Prefix bot là: ${client.config.app.px}`)
		var categories = [], categoryList = [];
		commands.forEach(command => {
                if (!categories[command.type]) categories[command.type] = [];
                categories[command.type].push(command);
                if (categories[command.type].length == 1) categoryList.push(command.type);
        });
		for (var i = 0; i < categoryList.length; i++) {
            var category = categoryList[i], commands1 = [];
            for (var j = 0; j < categories[category].length; j++) {
                var command = categories[category][j];
                commands1.push('`'+command.name.charAt(0).toUpperCase() + command.name.slice(1)+'`');
            }
            	embed.addField(`${category}`, `${commands1.join(" ")}`, false);
        }
        		embed.setFooter({
        			text:'BOT coded by luciizme#2603'
        		})
	    	message.channel.send({ embeds: [embed] });
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
				embedcommandinfo.setAuthor({
					name: client.user.username, 
					iconURL: client.user.displayAvatarURL({ size: 1024, dynamic: true })
				});
        		embedcommandinfo.setFooter({
        			text:'BOT coded by luciizme#2603'
        		})
		message.channel.send({ embeds: [embedcommandinfo] });
  
		} 
	},
};