module.exports = {
    name: 'emotes',
    description: 'change text to emotes',
    aliases: [],
    execute(bot, message, command){
    const emote = message.content.slice(1).split(/ +/).shift().toLowerCase();
        if(emote === 'pog'){
            message.delete();
            message.channel.send("<:pog:579867699136561161>")
        }else if (emote === 'kekw' || emote === 'KEKW' || emote === 'Kekw'){
            message.delete();
            message.channel.send("<:KEKW:789338111799853086>")
        }
    }
}






