module.exports = {
    name: 'rules',
    description: "Embeds!",
    execute(client, message, args, cmd, Discord) {
       const newEmbed = new Discord.MessageEmbed()
       .setColor('#99ff00')
       .setTitle('Rules')
       .setURL('https://www.youtube.com/channel/UCAz5JW1_oryewk0eR-eP7Bw')
       .setDescription('These are the server rules.') 
       .addFields(
           {name: 'Rule 1', value: '***No swearing.***'},
           {name: 'Rule 2', value: '***You can say BITCH.***'},
           {name: 'Rule 3', value: '***No NSFW***'} 
       )
       .setImage('https://www.thefamouspeople.com/profiles/images/tubbo-5.jpg')
       .setFooter('Make sure to subscribe to Tubbo');

        message.channel.send(newEmbed);
    }


}