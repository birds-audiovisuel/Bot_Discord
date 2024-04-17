const { MessageEmbed } = require('discord.js');

module.exports = function msgPriveBienvenu(member) {
    member.send(`Bienvenue sur notre serveur !\n\nSi tu as des questions, n'hésite pas à utiliser la commande \`/help\` !\n\nTu peux nous suivre sur nos réseaux : [Instagram](https://google.fr) [Youtube](https://youtube.com) [SoundCloud](https://soundcloud.com) [Spotify](https://spotify.com)`)
        .then(() => console.log(`Le message privé n°1 a bien été envoyé à l'utilisateur : ${member.user.tag}`))
        .catch(error => console.error(`Erreur lors de l'envoi du message privé n°1 à l'utilisateur : ${member.user.tag}`, error));

    const embed = new MessageEmbed()
        .setColor('#FF0000')
        .setTitle('Birds AudioVisuel')
        .setDescription('Bienvenue sur notre serveur !\n\nSi tu as des questions, n\'hésite pas à utiliser la commande `/help` !\n\nTu peux nous suivre sur nos réseaux : [Instagram](https://google.fr) [Youtube](https://youtube.com) [SoundCloud](https://soundcloud.com) [Spotify](https://spotify.com)')
        .addField('Accès aux salons', 'Pour avoir accès à l\'ensemble des salons, tu dois te rendre dans le salon <#CHANNEL_ID> et réagir à la réaction :white_check_mark: !')
        .setFooter('Birds AudioVisuel - Association');

    member.send({ embeds: [embed] })
        .then(() => console.log(`Le message privé a bien été envoyé à l'utilisateur : ${member.user.tag}`))
        .catch(error => console.error(`Erreur lors de l'envoi du message privé à l'utilisateur : ${member.user.tag}`, error));
};
