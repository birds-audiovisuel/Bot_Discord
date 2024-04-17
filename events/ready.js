
const Discord = require('discord.js');

module.exports = {
    name: 'ready',
    description: 'Envoie un message privé pour indiquer que le bot est prêt.',

    // Supprime le paramètre message car cette commande sera exécutée automatiquement lors du démarrage du bot
    execute(client) {
        const userId = '401411509194063872'; // Remplace cela par ton ID utilisateur

        // Vérifie si l'ID de l'utilisateur a été défini
        if (!userId) {
            console.error("L'ID de l'utilisateur n'a pas été défini.");
            return;
        }

        // Envoie le message privé à l'utilisateur
        const user = client.users.cache.get(userId);
        if (user) {
            user.send('Le bot est prêt !')
                .then(() => console.log('Message privé envoyé avec succès à ton compte.'))
                .catch(error => console.error('Erreur lors de l\'envoi du message privé :', error));
        } else {
            console.error("Impossible de trouver l'utilisateur avec l'ID spécifié.");
        }
    },
};