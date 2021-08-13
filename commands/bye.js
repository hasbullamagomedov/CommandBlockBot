module.exports = {
    name: 'bye',
    aliases: ['byebye', 'bai'],
    description: "this is a bye command!",
    execute(client, message, cmd, args){
        message.channel.send('bye!');
    }
}