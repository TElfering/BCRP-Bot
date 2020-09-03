const Discord = require('discord.js')
const commandcooldown = new Set();

module.exports = {
	name: 'commandlist',
	description: 'list of commands',
	execute(message, args) {
        if(commandcooldown.has(message.guild.id)) {
			message.reply('You need to wait 20 Minutes');
		}else {
		const command = new Discord.MessageEmbed()
                .setColor('#006FE4')
                .setTitle('Bot Commands')
                .setDescription('All commands for this Bot')
                .setThumbnail('https://cdn.discordapp.com/attachments/697512426538795049/734805124769251329/1024px-092-robot-face-1.png')
                .addField('-ping', 'pong')
                .addField('-bot', 'Bot information')
                .addField('-eu', 'Pings EU')
                .addField('-na', 'Pings NA')
                .addField('-dm', 'dm [player] [message]')
                .addField('-ticket', 'Creates ticket')
                .addField('-report', 'Creates report')
                .addField('-rps', 'rps Rock, Paper or Scissors')
                .addField('-clear', 'Clears chat, need to specify an amount of messages')
                .addField('-ban', 'ban [player] [reason]')
                .addField('-kick', 'kick [player] [reason]')
                .addField('-mute', 'mute [player] [time 1s, 1m, 1h, 1d]')
                .addField('-warn', 'warn [player] [reason}')
                .addField('-unwarn', 'unwarn [player] [reason}')
                .setFooter('Made by T. Elfering#2058', 'https://cdn.discordapp.com/attachments/704084945647173643/744276433282531408/pixel_art_character_1000x1200.png');
            message.channel.send({
                embed: command
            });
            commandcooldown.add(message.guild.id);
			setTimeout(() =>{
				commandcooldown.delete(message.guild.id)
            }, 1200000)
        }
	},
};
