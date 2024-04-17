module.exports = {
    name: 'serverinfo',
    description: 'Affiche les informations sur le serveur',
    execute(message) {
        const server = message.guild;
        const memberCount = server.memberCount;
        const roleCount = server.roles.cache.size;
        const channelCount = server.channels.cache.size;
        const categoryCount = server.channels.cache.filter(channel => channel.type === 'category').size;
        const creationDate = server.createdAt.toDateString();
        const inviteLink = `https://discord.gg/${server.vanityURLCode || 'AUCUN'}`;

        const embed = new MessageEmbed()
            .setColor('#0099ff')
            .setTitle('Informations sur le serveur')
            .addField('Membres', memberCount, true)
            .addField('Rôles', roleCount, true)
            .addField('Channels', channelCount, true)
            .addField('Catégories', categoryCount, true)
            .addField('Date de création', creationDate, true)
            .addField('Lien d\'invitation', inviteLink);

        message.channel.send(embed);
    },
};const { MessageEmbed } = require('discord.js');

/****GPT3****/
/***
 
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'serverinfo',
    description: 'Affiche les informations sur le serveur',
    execute(message) {
        // Récupère les informations du serveur
        const server = message.guild;
        const memberCount = server.memberCount;
        const roleCount = server.roles.cache.size;
        const channelCount = server.channels.cache.size;
        const categoryCount = server.channels.cache.filter(channel => channel.type === 'GUILD_CATEGORY').size;
        const creationDate = server.createdAt.toDateString();
        const inviteLink = `https://discord.gg/${server.vanityURLCode || 'AUCUN'}`;

        // Crée un embed pour afficher les informations du serveur
        const embed = new MessageEmbed()
            .setColor('#0099ff')
            .setTitle('Informations sur le serveur')
            .addField('Membres', memberCount, true)
            .addField('Rôles', roleCount, true)
            .addField('Channels', channelCount, true)
            .addField('Catégories', categoryCount, true)
            .addField('Date de création', creationDate, true)
            .addField('Lien d\'invitation', inviteLink);

        // Envoie l'embed dans le canal où la commande a été utilisée
        message.channel.send({ embeds: [embed] });
    },
};
*/