const Discord = require('discord.js')

module.exports = {
    name: 'kick',
    description: 'kicks player',
    execute(message, args) {
        const reason = args.splice(2).join(' ');
        
        let person = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[1]));
        
        const staffChannelid = '742847601090625677'

        const staffChannel = message.guild.channels.cache.get(staffChannelid)
        
        if (!reason) return message.reply('You need to give a reason')

        message.mentions.users.map(async user => {
            if (message.member.permissions.has('KICK_MEMBERS')) { } else return message.channel.send('Insufficient Permissions')
            const kickEmbed = new Discord.MessageEmbed()
                .setTitle('Kicked')
                .setColor('#006FE4')
                .setThumbnail(message.author.avatarURL())
                .setDescription('You have been kicked. If you feel you were falsey kicked, please contact a staff member')
                .addField("User Kicked", `${user.username} - Hash: ${user.discriminator} - ID: ${user.id}`)
                .addField('Kick Reason', reason)
                .addField('Kicked by', `${message.author}`)
                .setFooter('Made by T. Elfering#2058', 'https://cdn.discordapp.com/attachments/704084945647173643/744276433282531408/pixel_art_character_1000x1200.png')
            try { await user.send(kickEmbed); }
            catch (err) { console.log('Failed to kick user'); }
            message.channel.send(`${person} has been kicked for ${reason}`);	
            person.kick();
            staffChannel.send(kickEmbed)
        });
    },
};