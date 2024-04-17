const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'ping',
    description: 'Renvoie le ping du bot',

    // Définir la commande en tant que globale
    async execute(interaction) {
        // Répondre immédiatement à l'interaction avec un message de chargement
        await interaction.reply('Ping en cours...');

        // Calcule le ping en soustrayant le temps actuel par le temps de l'interaction
        const ping = Date.now() - interaction.createdTimestamp;

        // Crée un embed pour afficher le ping
        const embed = new MessageEmbed()
            .setTitle('Ping du bot')
            .addField('Ping', `${ping}ms`, true)
            .setColor('#0099ff');

        // Mise à jour de l'interaction avec l'embed
        await interaction.editReply({ embeds: [embed] });
    },
};
