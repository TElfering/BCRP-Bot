const Discord = require('discord.js')

module.exports = {
	name: 'bot',
	description: 'bot info',
	execute(message, args) {
		const exampleEmbed = new Discord.MessageEmbed()
                .setTitle('Player Information')
                .setThumbnail(message.author.avatarURL())
                .addField('Player Name', message.author.username)
                .addField('Bot Information', 'Below')
                .addField('Prefix', Discord.Prefix)
                .addField('Version', Discord.version)
                .addField('In use By', message.guild.name)
                .addField('Made by', 'T. Elfering#2058')
                .setFooter('Made by T. Elfering#2058', 'https://cdn.discordapp.com/attachments/704084945647173643/744276433282531408/pixel_art_character_1000x1200.png')
                .setColor('#006FE4');
            message.channel.send({
                embed: exampleEmbed
            });
	},
};