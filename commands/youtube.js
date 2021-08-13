module.exports = {
    name: 'youtube',
    description: "sends the youtube link!",
    execute(client, message, cmd, args){
        message.channel.send('https://www.youtube.com/channel/UCAz5JW1_oryewk0eR-eP7Bw');
    }
}