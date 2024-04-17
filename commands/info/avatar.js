/***Copilot */
/***
 * Affiche l'avatar de l'utilisateur ou en crée un nouveau
 * @param {Message} message
 * @param {string[]} args
 * @returns
 *  
 */
const Discord = require('discord.js');

module.exports = {
    name: 'avatar',
    description: 'Affiche l\'avatar de l\'utilisateur ou en crée un nouveau',
    execute(message, args) {
        // Vérifiez si l'utilisateur a un avatar
        if (message.author.avatar) {
            // Affiche l'avatar de l'utilisateur
            const embed = new Discord.MessageEmbed()
                .setTitle('Votre Avatar')
                .setImage(message.author.avatarURL())
                .setColor('#00ff00');
            message.channel.send({ embeds: [embed] });
        } else {
            // Créez un nouvel avatar pour l'utilisateur
            message.channel.createWebhook('Mon Avatar', {
                avatar: 'https://example.com/my-avatar.png',
                reason: 'Création d\'un nouvel avatar'
            }).then(webhook => {
                message.channel.send('Vous n\'avez pas encore d\'avatar. En création d\'un nouveau...');
                // Enregistrez l'ID du webhook pour une utilisation ultérieure
                const webhookId = webhook.id;

                // Ajoutez des autorisations pour que seul le créateur puisse modifier le webhook
                webhook.edit({
                    name: 'Mon Avatar',
                    avatar: 'https://example.com/my-avatar.png',
                    reason: 'Autorisations du webhook'
                }).then(() => {
                    // Utilisez le webhook pour envoyer un message
                    webhook.send('Nouvel avatar créé !');
                }).catch(console.error);
            }).catch(console.error);
        }
    },
};

/*****GPT */
/**
    * Affiche l'avatar de l'utilisateur ou en crée un nouveau
    * @param {Message} message 
    * @param {string[]} args 
    */
/*
const { MessageEmbed } = require('discord.js');

// Créez une fonction pour gérer la commande
module.exports = {
    name: 'avatar',
    description: 'Affiche l\'avatar de l\'utilisateur ou en crée un nouveau',
    execute(message, args) {
        // Récupère l'utilisateur qui a envoyé le message
        const user = message.author;

        // Vérifie si l'utilisateur a un avatar
        if (user.avatar) {
            // Affiche l'avatar de l'utilisateur
            const embed = new MessageEmbed()
                .setTitle('Votre Avatar')
                .setImage(user.avatarURL())
                .setColor('#00ff00');
            message.channel.send({ embeds: [embed] });
        } else {
            // Crée un nouvel avatar pour l'utilisateur
            message.channel.createWebhook('Mon Avatar', {
                avatar: 'https://example.com/my-avatar.png',
                reason: 'Création d\'un nouvel avatar'
            }).then(webhook => {
                // Envoie un message pour informer l'utilisateur
                message.channel.send('Vous n\'avez pas encore d\'avatar. En création d\'un nouveau...');

                // Utilise le webhook pour envoyer un message
                webhook.send('Nouvel avatar créé !');
            }).catch(console.error);
        }
    },
};*/