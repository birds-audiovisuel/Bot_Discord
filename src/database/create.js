const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');

const modelDir = path.join(__dirname, 'models');

// Connecter à MongoDB
mongoose.connect('mongodb://localhost:27017/yourDatabaseName', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('Connexion à MongoDB réussie.'))
  .catch((err) => console.error('Erreur de connexion à MongoDB:', err));

// Vérifier si le dossier "model" existe
if (fs.existsSync(modelDir)) {
    // Lire les fichiers du dossier "model"
    fs.readdir(modelDir, (err, files) => {
        if (err) {
            console.error('Erreur lors de la lecture du dossier "model":', err);
            return;
        }

        files.forEach((file) => {
            const filePath = path.join(modelDir, file);
            const modelSchema = require(filePath); // Supposons que chaque fichier exporte un schéma Mongoose

            // Créer un modèle Mongoose à partir du schéma
            const modelName = path.basename(file, '.js'); // Utiliser le nom du fichier comme nom du modèle
            const Model = mongoose.model(modelName, modelSchema);

            console.log(`Le modèle ${modelName} a été créé avec succès.`);
        });
    });
} else {
    console.error('Le dossier "model" n\'existe pas.');
}