module.exports = (Discord, bot) =>{
    console.log('Pog Bot is online'); 

    const id = '227549640516567041';
    const guild = bot.guilds.cache.find((g) => g.id === id);
    guild.members.cache.each((member) => {
        if (member.user.presence.status == 'online' && !member.user.bot){
            console.log(member.user.username)
        }
      });

    //bot.setInterval(getUsers(), 300000) // Runs every 5 min
}