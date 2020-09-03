const Discord = require("discord.js");
var bool = false;
const categoryId = "744300750221344920";
const cooldown = new Set();

module.exports = {
    name: 'ticket',
    description: 'ticket system',
    execute(message, args) {
        if(cooldown.has(message.author.id)) {
            message.reply('You need to wait 5 Minutes');
        }else {

        message.guild.channels.cache.forEach((channel) => {
            if (channel.name == 'ticket-'+message.author.username.toLowerCase() + "-" + message.author.discriminator) {

                message.channel.send("You already made a ticket");

                bool = true;
            }
        });

        if (bool == true) return;
        message.guild.channels.create('ticket-'+message.author.username + "-" + message.author.discriminator, "text").then((createdChan) => { // Maak kanaal
            createdChan.setParent(categoryId).then((settedParent) => { // Zet kanaal in category.
                
                createdChan.updateOverwrite(message.author, { VIEW_CHANNEL: true, ATTACH_FILES: true, SEND_MESSAGES: true, READ_MESSAGE_HISTORY: true, MENTION_EVERYONE: false });
                createdChan.updateOverwrite(createdChan.guild.roles.everyone, { VIEW_CHANNEL: false });
                createdChan.updateOverwrite(createdChan.guild.roles.cache.get('699348979913326612'), { VIEW_CHANNEL: true, ATTACH_FILES: true, SEND_MESSAGES: true, READ_MESSAGE_HISTORY: true, USE_EXTERNAL_EMOJIS: true, MANAGE_MESSAGES: true, MANAGE_CHANNELS: true,ADD_REACTIONS: true, MENTION_EVERYONE: false  });
                createdChan.updateOverwrite(createdChan.guild.roles.cache.get('699348857833783417'), { VIEW_CHANNEL: true, ATTACH_FILES: true, SEND_MESSAGES: true, READ_MESSAGE_HISTORY: true, USE_EXTERNAL_EMOJIS: true, MANAGE_MESSAGES: true, MANAGE_CHANNELS: false,ADD_REACTIONS: true, MENTION_EVERYONE: false  });
                
                message.reply(`ticket has been created, go to ${createdChan}`)

                createdChan.send(`${message.author} Please reply with you\'re ticket request.`)
            })
        });
        
        cooldown.add(message.author.id);
            setTimeout(() =>{
                cooldown.delete(message.author.id)
            }, 300000)
        }
        
    },
};

