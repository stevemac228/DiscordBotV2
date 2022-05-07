module.exports = (Discord, bot, message) =>{
    const prefix = '-';
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    
    const args = message.content.slice(prefix.length).split(/ +/);
    let cmd = args.shift().toLowerCase();
    if(cmd === 'pog' || cmd === 'kekw'){
        cmd = 'emotes';
    }
    const command = bot.commands.get(cmd) || bot.commands.find(a => a.aliases && a.aliases.includes(cmd));


    if(command) command.execute(bot, message, args,cmd, Discord);
}