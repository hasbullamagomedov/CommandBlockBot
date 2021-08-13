module.exports = {
    name: 'ban',
    description: "This command bans a member!",
    execute(client, message, cmd, args){
        const target = message.mentions.users.first();
        if(target){
            const memberTarget = message.guild.members.cache.get(target.id);
            memberTarget.kick();
            message.channel.send("User has been Banned");
        }else{
            message.channel.send(`Who are you trying to ban Bitch!`);
        }
    }
}