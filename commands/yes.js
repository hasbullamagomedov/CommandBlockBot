module.exports = {
    name: 'yes',
    aliases: ['ye', 'yea', 'ya'],
    description: "this is a good command!",
    execute(client, message, cmd, args){
        message.channel.send('good');
    }
}