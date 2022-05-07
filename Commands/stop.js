module.exports = {
    name: 'stop',
    description: 'stop the bot and leave the channel',
    aliases: ['s'],
    async execute(bot, message, args) {
        const voiceChannel = message.member.voice.channel;
        if(!voiceChannel) return message.channel.send("You need to be in a voice channel to stop the music!");
        await voiceChannel.leave();
        await message.channel.send('Leaving channel :smiling_face_with_tear:')
 
    }
}