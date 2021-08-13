module.exports = {
    name: 'help',
    description: "Embeds!",
    execute(client, message, args, cmd, Discord) {
       const newEmbed = new Discord.MessageEmbed()
       .setColor('#99ff00')
       .setTitle('Commands')
       .setURL('https://www.youtube.com/user/Ph1LzA')
       .setDescription('These are the bot commands.') 
       .addFields(
            {name: 'Important', value: '`rules ticket`'},
            {name: 'Reply Commands', value: '`hello bye wyd sorry yes no ok`'},
            {name: 'Cutest Youtuber', value: '`youtube`'},
            {name: 'Config', value: '`ping clear / c (number) stats`'},
            {name: 'Music Commands', value: '`play skip`'},
            {name: 'Meme Commands', value: '`dmeme meme`'},
            {name: 'Admin Commands', value: '`mute ban kick`'},
            {name: 'Study Commands', value: '`pt`'},
            {name: 'Giveaway Commands', value: '`start end reroll`'}

           
       )
       .setImage('https://static.wikia.nocookie.net/youtube/images/a/af/Tubbo.jpg/revision/latest?cb=20201104114523')
       .setFooter('Pog Champ');

        message.channel.send(newEmbed);
    }


}