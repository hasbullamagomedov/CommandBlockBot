module.exports = {
    name: 'kick',
    description: "This command kicks a member!",
    execute(client, message, cmd, args){
        const target = message.mentions.users.first();
        if(target){
            const memberTarget = message.guild.members.cache.get(target.id);
            memberTarget.kick();
            message.channel.send("User has been kicked");
        }else{
            message.channel.send(`Who are you trying to kick Bitch!`);
        }
    }
}