module.exports = {
    name: 'ping',
    description: "this is a ping command!",
    execute(client, message, cmd, args){
        message.channel.send(`Command Block's latency is ${client.ws.ping}ms` );
    }
}