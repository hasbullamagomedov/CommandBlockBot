const Discord = require('discord.js');

const bot = new Discord.Client({ws: {intents: Discord.Intents.ALL}});
require ("./html.js");

const client = new Discord.Client();

const fs = require('fs');

client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['command_handler', 'event_handler'].forEach(handler =>{
    require(`./handlers/${handler}`)(client, Discord);
})

client.on('channelCreate', (channel) => {
    channel.send('New Channel Added!')
})

const { GiveawaysManager } = require('discord-giveaways');
client.giveawaysManager = new GiveawaysManager(client, {
    storage: "./database.json",
    updateCountdownEvery: 3000,
    default: {
        botsCanWin: false,
        embedColor: "#FF0000",
        reaction: "🍺"
    }
});

client.login(process.env.token);