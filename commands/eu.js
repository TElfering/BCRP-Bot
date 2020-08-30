const eucooldown = new Set();
const Discord = require('discord.js')

module.exports = {
	name: 'eu',
	description: 'eu ping',
	execute(message, args) {
		if(eucooldown.has(message.guild.id)) {
			message.reply('You need to wait 20 Minutes');
		}else {
			if(message.author.bot) return;
            	message.channel.send(`<@&714471586920661032> \n \n ${message.author.toString()} Would like to get more players on the server, Let\'s join and have a great time! \n \n (This command has a 20min cool down)`)
					message.delete({timeout: 250}).catch(console.error);	

			eucooldown.add(message.guild.id);
			setTimeout(() =>{
				eucooldown.delete(message.guild.id)
			}, 1200000)
		}
	},
};