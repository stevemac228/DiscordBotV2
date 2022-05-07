const mongoose = require('mongoose');
const uri = "mongodb+srv://steven:3323gg6886sm01@cluster0.zxl4e.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const Discord = require('discord.js');
const bot = new Discord.Client();
const fs = require('fs');
const profileModel = require('../DiscordBot/profileSchema');
bot.commands = new Discord.Collection();
bot.events = new Discord.Collection();

['commandHandler', 'eventHandler'].forEach(handler =>{
    require(`./Handlers/${handler}`)(bot, Discord)
})

const commandFiles = fs.readdirSync('./Commands/').filter(file=> file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./Commands/${file}`);
    bot.commands.set(command.name, command)
}


//mongoose.connect(uri,{
//}).then(()=>{
//    console.log('Connected to Database')
//});

bot.login('ODA1NjE3MTUwMTQzMjM0MDQ4.YBdfcA.yIC0QoP5VFfZMYszAswK8zMF390')