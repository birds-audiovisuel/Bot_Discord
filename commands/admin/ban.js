module.exports = {
    name: 'ban',
    description: 'Bannir un membre du server',
    execute(interaction) {
        const member = interaction.options.getMember('member');
        if (!member) return interaction.reply('Vous devez mentionner le membre que vous voulez bannir!');
        member.ban({ reason: interaction.options.getString('reason') })
            .then(() => interaction.reply(`${member.user.tag} a été banni du serveur.`))
            .catch(error => {
                console.error(error);
                interaction.reply('Une erreur s\'est produite en essayant de bannir le membre.');
            });
    },
};