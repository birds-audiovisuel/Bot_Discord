module.exports = {
    name: 'kick',
    description: 'Expulser un membre du serveur.',
    execute(message, args) {
        const member = message.mentions.members.first();
        if (!member) return message.reply('Vous devez mentionner le membre que vous voulez expulser !.');
        member.kick(args.slice(1).join(' '))
            .then(() => message.reply(`${member.user.tag} a été expulsé du serveur.`))
            .catch(error => {
                console.error(error);
                message.reply('Une erreur est survenue lors de l\'expulsion du membre.');
            });
    },
};