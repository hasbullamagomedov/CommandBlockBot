module.exports = {
    name: 'sorry',
    description: "this is a sorry reply command!",
    execute(client, message, cmd, args){
        message.channel.send('bitch you are not sympathetic!');
    }
}