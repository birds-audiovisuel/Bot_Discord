const axios = require('axios');

// URL de l'API Discord pour éditer l'application associée au bot
const url = "https://discord.com/api/v10/applications/1136714871904403466";

// Remplacez ces valeurs par vos propres informations d'authentification
const token = "MTEzNjcxNDg3MTkwNDQwMzQ2Ng.GqZ63k.yBvVUcnIekxKEsZl4UWlwRrMSAKKSafpgUvZiA";

// Paramètres à mettre à jour
const data = {
    custom_install_url: "https://bot-discord.birds-audiovisuel.fr/",
    description: "Le bot officiel de l'association Birds AudioVisuel est disponible sur nos serveurs !",
    interactions_endpoint_url: "https://bot-discord.birds-audiovisuel.fr/"
};

// En-tête de requête avec le jeton d'authentification
const headers = {
    Authorization: `Bot ${token}`,
    "Content-Type": "application/json"
};

// Envoi de la requête PATCH
axios.patch(url, data, { headers })
    .then(response => {
        console.log("Mise à jour de l'application réussie.");
    })
    .catch(error => {
        console.error("Échec de la mise à jour de l'application :", error.response.status);
        console.error(error.response.data);
        console.error(error.require);
        console.error(error.message);
        console.error(error.stack);
        console.error(error.custom_install_url);
    });
