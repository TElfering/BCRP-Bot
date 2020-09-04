const Discord = require('discord.js')
const commandcooldown = new Set();
const command = new Discord.MessageEmbed()
.setColor('#006FE4')
.setTitle('Bot Commands')
.setDescription('All commands for this Bot')
.setThumbnail('https://cdn.discordapp.com/attachments/734776400321708053/751072941986545726/BCRP_LOGO_4K.png')
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

module.exports = {
	name: 'commandlist',
	description: 'list of commands',
	execute(message, args) {
        if(commandcooldown.has(message.author.id)) {
            message.reply('You need to wait 20 Seconds');
        }else {
        message.author.send(command)
        message.delete({timeout: 500})
        message.reply('Commands has been send in you\'re dm\'s')
        .then(message => {
            message.delete({timeout: 5000})
        })

            setTimeout(() =>{
                commandcooldown.delete(message.author.id)
            }, 20000)
        }
    },
};
