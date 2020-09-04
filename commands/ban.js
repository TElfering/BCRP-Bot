const Discord = require('discord.js')
const modRole = "699338419268091965";
const SRmodRole = "705475312909025350";
const AdminRole = "699337551772909638";
const SRAdminRole = "699337218518548580";

module.exports = {
    name: 'ban',
    description: 'bans player',
    execute(message, args) {
        const reason = args.splice(2).join(' ');

        const hadPerms = message.member.permissions.has('BAN_MEMBERS')
        
        const person = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[1]));
        
        const staffChannelid = '742847601090625677'

        const staffChannel = message.guild.channels.cache.get(staffChannelid)

        if (!modRole, SRmodRole, AdminRole, SRAdminRole) return;
        if (!reason) return message.reply('You need to give a reason')

        message.mentions.users.map(async user => {
            if (message.member.role.cache.has(modRole, SRmodRole, AdminRole, SRAdminRole)) { } else return message.channel.send('Insufficient Permissions')
            const banEmbed = new Discord.MessageEmbed()
                .setTitle('Banned')
                .setColor('#006FE4')
                .setThumbnail(message.author.avatarURL())
                .setDescription('You have been banned. If you feel you were falsey banned, please contact a staff member')
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

