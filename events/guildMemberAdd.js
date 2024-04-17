const msgPriveBienvenu = require('../events/msgPriveBienvenu');

module.exports = {
    name: 'guildMemberAdd',
    async execute(member) {
        // Appel de la fonction pour envoyer un message privé de bienvenue au nouveau membre
        msgPriveBienvenu(member);
    },
};
