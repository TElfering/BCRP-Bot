const cooldown = new Set();
const blueman = [
    "https://www.youtube.com/watch?v=-nuzcEKR8_0&list=PLK9ZPdR22-OEOrHkTBxRPr4lwiPVmk2H5",
    "https://www.youtube.com/watch?v=jJ9SuE2ncqk&list=PLK9ZPdR22-OEOrHkTBxRPr4lwiPVmk2H5&index=2", 
    "https://www.youtube.com/watch?v=aCa7e-U13ms",
    "https://www.youtube.com/watch?v=qL1etWVFRq0",
    "https://www.youtube.com/watch?v=DZ0TQYA4-ew",
    "https://www.youtube.com/watch?v=AeawjqQcKws",
    "https://www.youtube.com/watch?v=IH-omnFcA8k",
    "https://www.youtube.com/watch?v=G72A5QXlD5A",
    "https://www.youtube.com/watch?v=-lzF1AEnpgI",
    "https://www.youtube.com/watch?v=5Erj9y4D3iY",
    "https://www.youtube.com/watch?v=Zdz_iBHtmss",
    "https://www.youtube.com/watch?v=naLI7RkNtQE",
    ]

const response = blueman[Math.floor(Math.random()*blueman.length)]

module.exports = {
	name: 'blueman',
	description: 'blueman good',
	execute(message, args) {
		if(cooldown.has(message.guild.id)) {
            message.reply('You need to wait 30 Seconds');
        }else {
            message.channel.send(response).then().catch(console.error);
        cooldown.add(message.guild.id);
            setTimeout(() =>{
                cooldown.delete(message.guild.id)
            }, 30000)
        }
	},
};