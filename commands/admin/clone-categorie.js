const Discord = require("discord.js");

module.exports = {
    name: "clone-categorie",
    description: "Commande pour cloner une catégorie dans un serveur Discord",
    async execute(message, args) {
        if (!message.member.permissions.has("ADMINISTRATOR")) {
            return message.reply("vous n'êtes pas autorisé à exécuter cette commande.");
        }

        // Récupération de l'ID de la catégorie à cloner
        const categoryId = args[0];
        const category = message.guild.channels.cache.get(categoryId);

        // Vérification que la catégorie existe
        if (!category || category.type !== "GUILD_CATEGORY") {
            return message.reply("la catégorie spécifiée est invalide.");
        }

        try {
            // Création de la nouvelle catégorie
            const newCategory = await message.guild.channels.create(category.name, {
                type: "GUILD_CATEGORY",
            });

            // Clonage des salons dans la nouvelle catégorie
            category.children.forEach(async (channel) => {
                if (channel.type === "GUILD_TEXT") {
                    await message.guild.channels.create(channel.name, {
                        type: "GUILD_TEXT",
                        parent: newCategory,
                        topic: channel.topic,
                    });
                } else if (channel.type === "GUILD_VOICE") {
                    await message.guild.channels.create(channel.name, {
                        type: "GUILD_VOICE",
                        parent: newCategory,
                        userLimit: channel.userLimit,
                    });
                }
            });

            // Clonage des rôles rattachés à la catégorie
            category.permissionOverwrites.cache.forEach(async (permission, id) => {
                const role = message.guild.roles.cache.get(id);
                if (role) {
                    await newCategory.permissionOverwrites.create(role, permission);
                }
            });

            message.reply("La catégorie a été clonée avec succès !");
        } catch (error) {
            console.error(error);
            message.reply("Une erreur est survenue lors du clonage de la catégorie.");
        }
    },
};