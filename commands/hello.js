module.exports = {
    name: 'hello',
    aliases: ['hi', 'hey'],
    description: "this is a hello command!",
    execute(client, message, cmd, args){
        message.channel.send('hello!');
    }
}