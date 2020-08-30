module.exports = {
	name: 'unwarn',
	description: 'unwarning person',
	execute(message, args, Discord) {
        const reason = args.splice(2).join(' ');
        const person = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[1]));
        message.mentions.users.map(async user => {

        const warnChannelid = '742847601090625677'

        const warnChannel = message.guild.channels.cache.get(warnChannelid)

        if (!reason) return message.reply ('You need to give a reason')

        const unwarnEmbed = new Discord.MessageEmbed()

        .setTitle("Unwarn")
        .setColor('#006FE4')
        .setThumbnail(message.author.avatarURL())
        .addField("Removed By", `${message.author} - ID: ${message.author.id}`)
        .addField("User", `${user.username} - Hash: ${user.discriminator} - ID: ${user.id}`)
        .addField('Reason', reason)
        .setFooter('Made by T. Elfering#2058', 'https://cdn.discordapp.com/attachments/704084945647173643/744276433282531408/pixel_art_character_1000x1200.png')

        user.send(unwarnEmbed)
        await message.channel.send(`${user} Has been unwarned`)
        await warnChannel.send(unwarnEmbed)
        });
	},
};