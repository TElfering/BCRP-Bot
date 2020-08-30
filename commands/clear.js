const Discord = require('discord.js')

module.exports = {
	name: 'clear',
	description: 'clear messages',
	execute(message, args) {
        const staffChannelid = '742847601090625677'

        const staffChannel = message.guild.channels.cache.get(staffChannelid)

        const clearEmbed = new Discord.MessageEmbed()
        .addField('Cleared Amount', `${args[1]} Messages`)
        .addField('Cleared By', `${message.author}`)
        .addField('Cleared Channel', `${message.channel}`)
        .setFooter('Made by T. Elfering#2058', 'https://cdn.discordapp.com/attachments/704084945647173643/744276433282531408/pixel_art_character_1000x1200.png')
        .setColor('#006FE4');

        if (message.member.permissions.has('MANAGE_MESSAGES')) {} else return message.channel.send('Insufficient Permissions')
        //if(!message.member.roles.cache.has("734749987526803516")) return message.channel.send('Insufficient Permissions')
        
        
        if (!args[1]) return message.reply('Invalid Amount')
        message.channel.bulkDelete(args[1]);
        //staffChannel.send(`${message.author} has cleared ${args[1]} messages in ${message.channel}`);
        staffChannel.send(clearEmbed)
    },
};