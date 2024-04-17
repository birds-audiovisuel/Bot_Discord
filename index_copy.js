const { Client, GatewayIntentBits, Collection, MessageEmbed } = require('discord.js');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

const client = new Client({
    intents: [/*
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildBans,
        GatewayIntentBits.GuildEmojisAndStickers,
        GatewayIntentBits.GuildIntegrations,
        GatewayIntentBits.GuildWebhooks,
        GatewayIntentBits.GuildInvites,
        GatewayIntentBits.GuildVoiceStates,
        GatewayIntentBits.GuildPresences,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildMessageReactions,
        GatewayIntentBits.GuildMessageTyping,
        GatewayIntentBits.DirectMessages,
        GatewayIntentBits.DirectMessageReactions,
        GatewayIntentBits.DirectMessageTyping,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildScheduledEvents,
        GatewayIntentBits.AutoModerationConfiguration,
        GatewayIntentBits.AutoModerationExecution*/
        
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildBans,
        GatewayIntentBits.GuildEmojisAndStickers,
        GatewayIntentBits.GuildIntegrations,
        GatewayIntentBits.GuildWebhooks,
        GatewayIntentBits.GuildInvites,
        GatewayIntentBits.GuildVoiceStates,
        GatewayIntentBits.GuildPresences,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildMessageReactions,
        GatewayIntentBits.GuildMessageTyping,
        GatewayIntentBits.DirectMessages,
        GatewayIntentBits.DirectMessageReactions,
        GatewayIntentBits.DirectMessageTyping

    ],
    
    
});

client.once('ready', () => {
    client.user.setUsername('Birds AudioVisuel');
    client.user.setActivity('Version 1.0.0');
    client.user.setStatus('ne pas déranger');
    console.log(`Connecté avec le nom d'utilisateur ${client.user.username}.`);
    console.log(`Connecté avec le tag ${client.user.tag}.`);
    console.log(`Connecté avec l'id ${client.user.id}.`);
    console.log(`Connecté avec le statut ${client.user.presence.status}.`);
    console.log(`Connecté avec l'activité ${client.user.presence.activities}.`);
    console.log(`Connecté avec l'avatar ${client.user.avatar}.`);
    console.log(`Connecté en tant que bot ${client.user.bot}.`);


// Charger les fichiers de configuration
console.log('\x1b[93mChargement des fichiers de configuration...');
client.config = new Collection();
const configFiles = fs.readdirSync(path.resolve(__dirname, 'config')).filter(file => file.endsWith('.json'));
console.log(`\x1b[94mFichiers de configuration trouvés : ${configFiles.join(', ')}`);
for (const file of configFiles) {
    const config = require(path.join(__dirname, 'config', file));
    const configName = file.split('.')[0]; // Retire l'extension .json du nom du fichier
    client.config.set(configName, config);
    console.log(`\x1b[32mLe fichier de configuration ${file} a été chargé.`);
}
console.log('\x1b[92mTous les fichiers de configuration ont été chargés.\n');


// Créer une collection pour stocker les commandes
console.log('\x1b[93mChargement des commandes...');
client.commands = new Collection();
const commandFolders = fs.readdirSync(path.resolve(__dirname, 'commands'));
console.log(`\x1b[94mChargement des commandes trouvés : ${commandFolders.join(', ')}`);
// Charger les commandes depuis les sous-dossiers
for (const folder of commandFolders) {
    const folderPath = path.resolve(__dirname, 'commands', folder);
    const commandFiles = fs.readdirSync(folderPath).filter(file => file.endsWith('.js'));
    for (const file of commandFiles) {
        const command = require(path.join(folderPath, file));
        // Enregistrer la commande dans la collection
        client.commands.set(command.name, command);
        console.log(`\x1b[32mLa commande ${command.name} a été chargée.\x1b[0m`);
    }
}
console.log('\x1b[92mToutes les commandes ont été chargées.\x1b[0m\n');

// Charger les événements
console.log('\x1b[93mChargement des événements...');
const eventFiles = fs.readdirSync(path.resolve(__dirname, 'events')).filter(file => file.endsWith('.js'));
console.log(`\x1b[94mÉvénements trouvés : ${eventFiles.join(', ')}`);
for (const file of eventFiles) {
    const event = require(path.join(__dirname, 'events', file));
    if (event.once) {
        client.once(event.name, (...args) => event.execute(...args, client));
    } else {
        client.on(event.name, (...args) => event.execute(...args, client));
    }
    console.log(`\x1b[32mL'événement ${event.name} a été chargé.`);
}
console.log('\x1b[92mTous les événements ont été chargés.\x1b[0m\n');



client.once('ready', () => {
    client.user.setUsername('Birds AudioVisuel');
    client.user.setActivity('Version 1.0.0');
    client.user.setStatus('ne pas déranger');
    console.log(`Connecté avec le nom d'utilisateur ${client.user.username}.`);
    console.log(`Connecté avec le tag ${client.user.tag}.`);
    console.log(`Connecté avec l'id ${client.user.id}.`);
    console.log(`Connecté avec le statut ${client.user.presence.status}.`);
    console.log(`Connecté avec l'activité ${client.user.presence.activities}.`);
    console.log(`Connecté avec l'avatar ${client.user.avatar}.`);
    console.log(`Connecté en tant que bot ${client.user.bot}.`);
    console.log('\x1b[92mLe bot est prêt !\x1b[0m\n');
});


client.login(process.env.DISCORD_TOKEN);