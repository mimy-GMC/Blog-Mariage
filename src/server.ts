import express from 'express';
import mongoose from 'mongoose';
import routes from './routes/indexRoute';

// Configuration de l'application
const app = express();

// Création de notre port
const port = 3000

// Utilisation du Middleware
app.use(express.json());

// Routes
app.use('/api', routes);

// Connexion à la base de données et démarrage du serveur
mongoose.connect('mongodb+srv://celestegakosso234:z9Bc5GH5ntyxYjss@cluster1.1md2atk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1')
  .then(() => {
    console.log('Connexion à MongoDB établie');
    app.listen(port, () => {
      console.log('Serveur démarré sur le port 3000');
    });
  })
  .catch((err) => {
    console.error('Erreur de connexion à MongoDB:', err)
  });
