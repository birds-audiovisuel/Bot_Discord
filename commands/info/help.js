/**
 * Affiche le menu des commandes du bot
 * 
 * @returns
 */
const commands = [
    {
        name: 'commande1',
        description: 'Description de la commande 1',
        usage: 'Utilisation de la commande 1'
    },
    {
        name: 'commande2',
        description: 'Description de la commande 2',
        usage: 'Utilisation de la commande 2'
    },
    // Ajoutez d'autres commandes ici
];

function afficherMenu() {
    console.log('Menu des commandes du bot :');
    commands.forEach(command => {
        console.log(`- ${command.name}: ${command.description}`);
        console.log(`  Utilisation : ${command.usage}`);
    });
}

afficherMenu();