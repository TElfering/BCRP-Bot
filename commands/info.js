module.exports = {
	name: 'info',
	description: 'info command',
	execute(message, args) {
        if (args[1] === 'website') {
            message.channel.send('https://www.bluecountyrp.net');
        } else if (args[1] === 'ip') {
            message.channel.send('Direct Connect: 185.249.197.219:30400');
        }else if(args[1] === 'youtube'){
            message.channel.send('https://www.youtube.com/channel/UCO4Kxs2EyGOX0qGAGK4-mrQ');
        } else {
            message.channel.send('Invalid Command')
        }
	},
};