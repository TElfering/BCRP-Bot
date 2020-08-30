const ms = require('ms');

module.exports = {
    name: 'mute',
    description: '-mute [player] [time: 1s, 1m, 1h, 1d]',    
    execute(message, args) {
        if (message.member.permissions.has('MUTE_MEMBERS')) {} else return message.channel.send('Insufficient Permissions')
        if (message.member.permissions.has('MANAGE_MESSAGES')) {} else return message.channel.send('Insufficient Permissions')

        let person = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[1]))
        if (!person) return message.reply('Invalid Player');

        let mainrole = message.guild.roles.cache.find(mainrole => mainrole.name === "Civilian");
        let muterole = message.guild.roles.cache.find(muterole => muterole.name === "Muted");

        if (!muterole) return message.reply('Failed to find Muted role');

        let time = args[2];
        if (!time) {
            return message.reply('Please specify a time');
        }
        person.roles.remove(mainrole.id);
        person.roles.add(muterole.id);

        message.channel.send(`@${person.user.tag} has been muted for ${ms(ms(time))}`);

        setTimeout(function () {
            person.roles.add(mainrole.id);
            person.roles.remove(muterole.id);
            message.channel.send(`@${person.user.tag} has been unmuted`)
        }, ms(time));
    },
};