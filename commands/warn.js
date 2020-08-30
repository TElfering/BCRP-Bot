const Discord = require('discord.js')

module.exports = {
    name: 'warn',
    description: 'warns player',
    execute(message, args) {
        const reason = args.splice(2).join(' ');

        const staffChannelid = '742847601090625677'

        const staffChannel = message.guild.channels.cache.get(staffChannelid)
        
        const person = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[1]));
        if (!reason) return message.reply('You need to give a reason')

        message.mentions.users.map(async user => {
            if (message.member.permissions.has('MANAGE_MESSAGES')) { } else return message.channel.send('Insufficient Permissions')
            const warnEmbed = new Discord.MessageEmbed()
                .setTitle('Warn')
                .setColor('#006FE4')
                .setThumbnail(message.author.avatarURL())
                .setDescription('You have been warned. If you feel you were falsey warned, please contact a staff member')
                .addField("User Warned", `${user.username} - Hash: ${user.discriminator} - ID: ${user.id}`)
                .addField('Warn Reason', reason)
                .addField('Warned by', `${message.author}`)
                .setFooter('Made by T. Elfering#2058', 'https://cdn.discordapp.com/attachments/704084945647173643/744276433282531408/pixel_art_character_1000x1200.png')
            try { await user.send(warnEmbed); }
            catch (err) { console.log('Failed to warn user'); }
            message.channel.send(`${person} has been warned for ${reason}`);	
            staffChannel.send(warnEmbed)

                
        });
    },
};