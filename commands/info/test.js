/*module.exports = {
    name: 'test',
    description: 'Test de fonctionnement du bot',
    execute(interaction) {
        interaction.reply(`Tout va bien je suis opérationnel ! N'hésitez pas à m'appeler je suis à votre disposition !!!`);
    },
};*/
/***GPT3 */
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('test')
        .setDescription('Test de fonctionnement du bot'),
    async execute(interaction) {
        await interaction.reply(`Tout va bien, je suis opérationnel ! N'hésitez pas à m'appeler, je suis à votre disposition !!!`);
    },
};
