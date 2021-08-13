module.exports = {
    name: 'no',
    aliases: ['nope', 'nah'],
    description: "this is a no reply command!",
    execute(client, message, cmd, args){
        message.channel.send('dont be stupid!');
    }
}