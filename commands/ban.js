const Discord = require('discord.js')

module.exports = {
    name: 'ban',
    description: 'bans player',
    execute(message, args) {
        const reason = args.splice(2).join(' ');

        const hadPerms = message.member.permissions.has('BAN_MEMBERS')
        
        const person = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[1]));
        
        const staffChannelid = '742847601090625677'

        const staffChannel = message.guild.channels.cache.get(staffChannelid)

        if (!hadPerms) return;
        if (!reason) return message.reply('You need to give a reason')

        message.mentions.users.map(async user => {
            if (message.member.permissions.has('BAN_MEMBERS')) { } else return message.channel.send('Insufficient Permissions')
            const banEmbed = new Discord.MessageEmbed()
                .setTitle('Banned')
                .setColor('#006FE4')
                .setThumbnail(message.author.avatarURL())
                .setDescription('You have been banned. If you feel you were falsey banned, you can appeal at https://appeal.bluecountyrp.net/')
                .addField("User Banned", `${user.username} - Hash: ${user.discriminator} - ID: ${user.id}`)
                .addField('Ban Reason', reason)
                .addField('Banned by', `${message.author}`)
                .setFooter('Made by T. Elfering#2058', 'https://cdn.discordapp.com/attachments/704084945647173643/744276433282531408/pixel_art_character_1000x1200.png')
            try { await user.send(banEmbed); }
            catch (err) { console.log('Failed to ban user'); }
            message.channel.send(`${person} has been banned for ${reason}`);	
            person.ban();
            staffChannel.send(banEmbed)
        });
    },
};

