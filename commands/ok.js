module.exports = {
    name: 'ok',
    aliases: ['okay', 'k', 'okie'],
    description: "this is a ok reply command!",
    execute(client, message, cmd, args){
        message.channel.send('are you ok');
    }
}