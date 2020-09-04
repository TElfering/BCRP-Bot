const Discord = require('discord.js')

const client = new Discord.Client();

const bot = new Discord.Client({partials: ['CHANNEL', 'MESSAGE', 'REACTION',]});

const ms = require('ms');

const cooldown = new Set();

const token = 'NzM1ODU1ODcxMTk5ODA1NTcy.XxmVVA.ZO8fdsFBeyYIRu8ludzCAhiJ8LA';

const PREFIX = '-';

Discord.Prefix = '-'

const fs = require('fs');


client.commands = new Discord.Collection();

const commandsFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandsFiles) {
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}


Discord.version = '1.1.6'

bot.on('ready', () => {
    console.log('Bot Online');
    bot.user.setActivity('Blue County RP™');
})

bot.on("messageDelete", async message => {
    if (message.author.bot) return;
    let logs = await message.guild.fetchAuditLogs({type: 72});
    let entry = logs.entries.first();

    const discordChannelid = '720718795811061802'

    const discordChannel = message.guild.channels.cache.get(discordChannelid)

    const deleteEmbedtwo = new Discord.MessageEmbed()
        //.setAuthor(`${message.author.username}${message.author.discriminator}`, `${message.author.avatarURL()}`, 'https://bluecountyrp.net')
        //.setTitle(`${message.author.avatar} ${message.author.username}${message.author.discriminator}`)
        .setTitle('Uncached Message Deleted')
        .setColor('#006FE4')
        .addField("Message Author", `Unknown`)
        .addField("Channel Message Deleted", `${message.channel}`)
        .addField("Message Content", `Unknown`)
        .setTimestamp()
        .setFooter(`Message ID: ${message.id}`);

    const deleteEmbed = new Discord.MessageEmbed()
        //.setAuthor(`${message.author.username}${message.author.discriminator}`, `${message.author.avatarURL()}`, 'https://bluecountyrp.net')
        //.setTitle(`${message.author.avatar} ${message.author.username}${message.author.discriminator}`)
        .setTitle('Message Deleted')
        .setColor('#006FE4')
        .addField("Message Author", `${message.author}`)
        .addField("Channel Message Deleted", `${message.channel}`)
        .addField("Message Content", `${message.content}`)
        .setTimestamp()
        .setFooter(`Message ID: ${message.id}`);

        if (message.partial) {
            discordChannel.send(deleteEmbedtwo)
        }else discordChannel.send(deleteEmbed)
  });

bot.on('guildMemberAdd', member => {

    const welcomechannel = member.guild.channels.cache.find(welcomechannel => welcomechannel.name === '💭general');
    if (!welcomechannel) return;

    welcomechannel.send(`Let's welcome ${member} to Blue County RP🎉\n Apply in <#720673454424195182> to join one of our departments`)

    //member.roles.add(member.guild.roles.cache.find(role => role.name === "Civilian"));

});

bot.on('message', async message => {
    if (message.channel.id === "720687502498857061") {
        message.react('👍')
            .then(() => { 
                message.react('👎')
            });
    }
});

bot.on('message', async message => {
    if (message.channel.id === "720686249505063002") {
        message.react('✅')
            .then(() => { 
                message.react('❌')
            });
    }
});

bot.on("messageReactionAdd", async function (messageReaction, user) {
    if (messageReaction.message.partial) await messageReaction.message.fetch();
    if (messageReaction.partial) await messageReaction.fetch();

    if (user.bot) return;
    if (!messageReaction.message.guild) return;
    if (messageReaction.message.channel.id === "720673454424195182") {
        if (messageReaction.emoji.name === '🚓') {
            await messageReaction.message.guild.members.cache.get(user.id).roles.add("699457047602790421") //LEO | INTERVIEW-ME
            await messageReaction.message.guild.members.cache.get(user.id).roles.add("733652698943062029") //CIVILIAN (GREYED OUT)
            await messageReaction.message.guild.members.cache.get(user.id).send('Thanks for Applying for the Law Enforcement Department! Please go to <#720690031584477301> to request an Interview')
        }
        if (messageReaction.emoji.name === '🚒') {
            await messageReaction.message.guild.members.cache.get(user.id).roles.add("699457093115052122") //FIRE | INTERVIEW-ME
            await messageReaction.message.guild.members.cache.get(user.id).roles.add("733652698943062029") //CIVILIAN (GREYED OUT)
            await messageReaction.message.guild.members.cache.get(user.id).send('Thanks for Applying for the Fire Department! Please contact an FTO and request an Interview')
        }
        if (messageReaction.emoji.name === '📞') {
            await messageReaction.message.guild.members.cache.get(user.id).roles.add("741594351431450708") //DISPATCH | INTERVIEW-ME
            await messageReaction.message.guild.members.cache.get(user.id).roles.add("733652698943062029") //CIVILIAN (GREYED OUT)
            await messageReaction.message.guild.members.cache.get(user.id).send('Thanks for Applying for the Dispatch Department! Please contact an FTO and request an Interview')
        }
    }
})


bot.on("messageReactionAdd", async function (messageReaction, user) {
    if (messageReaction.message.partial) await messageReaction.message.fetch();
    if (messageReaction.partial) await messageReaction.fetch();

    if (user.bot) return;
    if (!messageReaction.message.guild) return;
    if (messageReaction.message.channel.id === "720678120616624139") {
        if (messageReaction.emoji.name === 'NA') {
            await messageReaction.message.guild.members.cache.get(user.id).roles.add("714471800125521991")
            await messageReaction.message.guild.members.cache.get(user.id).roles.add("714467880086798366")//INFO ROLES
        }
        if (messageReaction.emoji.name === 'EU') {
            await messageReaction.message.guild.members.cache.get(user.id).roles.add("714471586920661032")
            await messageReaction.message.guild.members.cache.get(user.id).roles.add("714467880086798366")//INFO ROLES
        }
        if (messageReaction.emoji.name === 'Discord') {
            await messageReaction.message.guild.members.cache.get(user.id).roles.add("714471905100562492")
            await messageReaction.message.guild.members.cache.get(user.id).roles.add("714467880086798366")//INFO ROLES
        }
        if (messageReaction.emoji.name === '📷') {
            await messageReaction.message.guild.members.cache.get(user.id).roles.add("714472043667652699")
            await messageReaction.message.guild.members.cache.get(user.id).roles.add("714467880086798366")//INFO ROLES
        }
    }
})

bot.on("messageReactionRemove", async (reaction, user) => {
    if (reaction.message.partial) await reaction.message.fetch();
    if (reaction.partial) await reaction.fetch();

    if (user.bot) return;
    if (!reaction.message.guild) return;
    if (reaction.message.channel.id === "720673454424195182") {
        if (reaction.emoji.name === '🚓') {-
            await reaction.message.guild.members.cache.get(user.id).roles.remove("699457047602790421") //LEO | INTERVIEW-ME
            await reaction.message.guild.members.cache.get(user.id).roles.remove("733652698943062029") //CIVILIAN (GREYED OUT)
        }
        if (reaction.emoji.name === '🚒') {
            await reaction.message.guild.members.cache.get(user.id).roles.remove("699457093115052122") //FIRE | INTERVIEW-ME
            await reaction.message.guild.members.cache.get(user.id).roles.remove("733652698943062029") //CIVILIAN (GREYED OUT)
        }
        if (reaction.emoji.name === '📞') {
            await reaction.message.guild.members.cache.get(user.id).roles.remove("741594351431450708") //DISPATCH | INTERVIEW-ME
            await reaction.message.guild.members.cache.get(user.id).roles.remove("733652698943062029") //CIVILIAN (GREYED OUT)
        }
    }
})


bot.on("messageReactionRemove", async (reaction, user) => {
    if (reaction.message.partial) await reaction.message.fetch();
    if (reaction.partial) await reaction.fetch();

    if (user.bot) return;
    if (!reaction.message.guild) return;
    if (reaction.message.channel.id === "720678120616624139") {
        if (reaction.emoji.name === 'NA') {
            await reaction.message.guild.members.cache.get(user.id).roles.remove("714471800125521991")
            await reaction.message.guild.members.cache.get(user.id).roles.remove("714467880086798366")//INFO ROLES
        }
        if (reaction.emoji.name === 'EU') {
            await reaction.message.guild.members.cache.get(user.id).roles.remove("714471586920661032")
            await reaction.message.guild.members.cache.get(user.id).roles.remove("714467880086798366")//INFO ROLES
        }
        if (reaction.emoji.name === 'Discord') {
            await reaction.message.guild.members.cache.get(user.id).roles.remove("714471905100562492")
            await reaction.message.guild.members.cache.get(user.id).roles.remove("714467880086798366")//INFO ROLES
        }
        if (reaction.emoji.name === '📷') {
            await reaction.message.guild.members.cache.get(user.id).roles.remove("714472043667652699")
            await reaction.message.guild.members.cache.get(user.id).roles.remove("714467880086798366")//INFO ROLES
        }
    }
})


//commands no prefix

bot.on('message', async message => {
    //if (message.content.startsWith('williams')) {
        //message.channel.send('Who is Williams?');
    //}

    if (message.content.includes('cops dont shoot out windows')) {
        message.channel.send('https://www.youtube.com/watch?v=aCa7e-U13ms');
    }

    if (message.content.startsWith('Alphonse')) {
        message.channel.send('Who is Alphonse? You mean THE LEGEND!');
    }

    if (message.content.includes('https://discord.gg')) {
        if (message.member.permissions.has('MANAGE_MESSAGES'))return;
        message.delete()
        const inviteWarnEmbed = new Discord.MessageEmbed()
        .addField('Warned', `${message.author}You can not send invites`)
        await message.channel.send(inviteWarnEmbed)
    }

    //if (message.content.startsWith('ping')) {
        //message.channel.send('pong!');
    //}

    //if (message.content.startsWith('https://tenor.com/view/hello-there-gif-9442662')) {
        //message.channel.send('https://tenor.com/view/grevious-general-kenobi-star-wars-gif-11406339')
    //}

    //if (message.content.startsWith('https://tenor.com/view/hello-there-obi-wan-general-kenobi-obi-wan-kenobi-star-wars-gif-13024140')) {
        //message.channel.send('https://tenor.com/view/grevious-general-kenobi-star-wars-gif-11406339')
    //}

    //commands with prefix

    if (message.author.bot || !message.content.startsWith(PREFIX)) return;

    const args = message.content.slice(PREFIX.length).split(/ +/g);

    switch (args[0]) {
        case 'ping':
            client.commands.get('ping').execute(message, args);
            break;

        case 'info':
            client.commands.get('info').execute(message, args);
            break;

        case 'clear':
            client.commands.get('clear').execute(message, args);
            break;

        case 'kick':
            client.commands.get('kick').execute(message, args);
            break;

        case 'ban':
            client.commands.get('ban').execute(message, args);
            break;

        case 'warn':
            client.commands.get('warn').execute(message, args);
            break;

        case 'unwarn':
            client.commands.get('unwarn').execute(message, args, Discord);
            break;

        case 'react':
                let reactionEmbed = new Discord.MessageEmbed()
                    .setTitle('__Blue County RP - Application__')
                    .setColor('#006FE4')
                    .addField('🚓 Law Enforcement', 'The duties of a law enforcement officer, focus on protecting people and property. They patrol the areas they are assigned, which sometimes include entire jurisdictions, respond to calls, enforce laws, make arrests, issue citations, and occasionally testify in court cases.')
                    .addField('🚒 Fire Department', 'The duties of a firefighter are to help protect the public in emergency situations. They respond to a wide variety of calls, such as car crashes, chemical spills, flooding, water rescue and general rescue as well as fires. They use sophisticated firefighting and rescue equipment.')
                    .addField('📞 911 Communications', 'Is a telephone, radio or computer operator that connects people in need with fire, police and medical emergency services. In addition to dispatching emergency services, 911 Dispatchers often remain in communication with callers, advising them and attempting to keep them calm as they await help.')
                    .addField('\u200B', '*To apply for one of the above departments, click on the coresponding reaction. If a reaction is missing, the department is not hiring*')
                let msgEmbed = await message.channel.send(reactionEmbed)
                msgEmbed.react('🚓')
                    .then(() => {
                        msgEmbed.react('🚒')
                    }).then(() => {
                        msgEmbed.react('📞')
                    })
            break;
    
        case 'react2':
                    let reaction2Embed = new Discord.MessageEmbed()
                        .setTitle('React to this message to get roles!')
                        .setColor('#006FE4')
                        .addField('\u200B', '<:NA:741593437530488855> NA Notified')
                        .addField('\u200B', '<:EU:741593413995987054> EU Notified')
                        .addField('\u200B', '<:Discord:702216964331929621> Server Notified')
                        .addField('\u200B', '📷 Media Notified')
                    let msgReaction2 = await message.channel.send(reaction2Embed)
                    msgReaction2.react(':NA:741593437530488855')
                        .then(() => {
                            msgReaction2.react(':EU:741593413995987054')
                        }).then(() => {
                            msgReaction2.react(':Discord:702216964331929621')
                        }).then(() => {
                            msgReaction2.react('📷')
                        })
            break;

        case 'eu':
            client.commands.get('eu').execute(message, args);
            break;

        case 'na':
            client.commands.get('na').execute(message, args);
            break;

        case 'commands':
            client.commands.get('commandlist').execute(message, args);
            break;

        case 'bot':
            client.commands.get('bot').execute(message, args);
            break;

        case 'mute':
            client.commands.get('mute').execute(message, args);
            break;

        case 'ticket':
            client.commands.get('ticket').execute(message, args);
            break;

        case 'report':
            client.commands.get('report').execute(message, args);
            break;

        case 'blueman':
            client.commands.get('blueman').execute(message, args);
            break;
        
        case 'rps':
            if (!args[1]) return message.reply('Please say Rock, Paper or Scisors')
            number = 3;
            const rpsrandom = Math.floor (Math.random() * (number - 1 + 1)) + 1;
            switch (rpsrandom) {
                case 1: message.channel.send ('**Rock**'); break;
                case 2: message.channel.send ('**Paper**'); break;
                case 3: message.channel.send ('**Scissors**'); 
            }
            break;
        

        case '8ball':
            if (!args[2]) return message.reply('You need to give a sentence of atleast 2 words')
            number = 17;
            const ballrandom = Math.floor (Math.random() * (number - 1 + 1)) + 1;
            switch (ballrandom) {
                case 1: message.channel.send ('**Yes**'); break;
                case 2: message.channel.send ('**No**'); break;
                case 3: message.channel.send ('**Probably**'); break;
                case 4: message.channel.send ('**Maybe**'); break;
                case 5: message.channel.send ('**Most likely**'); break;
                case 6: message.channel.send ('**It is certain**'); break;
                case 7: message.channel.send ('**Without a doubt**'); break;
                case 8: message.channel.send ('**As I see it, yes**'); break;
                case 9: message.channel.send ('**Signs point to yes**'); break;
                case 10: message.channel.send ('**Ask again later**'); break;
                case 11: message.channel.send ('**Better not tell you now**'); break;
                case 12: message.channel.send ('**Cannot predict now**'); break;
                case 13: message.channel.send ('**Concentrate and ask again**'); break;
                case 14: message.channel.send ('**Don\'t count on it**'); break;
                case 15: message.channel.send ('**My sources say no**'); break;
                case 16: message.channel.send ('**Outlook not so good**'); break;
                case 17: message.channel.send ('**Very doubtful**'); 
            break;
        }
    }

});


bot.login(token);