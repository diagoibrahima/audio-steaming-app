const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

app.use(express.json());

const authRoutes = require('./routes/auth');
const audioRoutes = require('./routes/audio');


// Connexion à la base de données MongoDB
mongoose.connect('mongodb://localhost:27017/audioStreaming', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("Connected to MongoDB"));

app.get('/', (req, res) => {
  res.send('Bienvenue sur la plateforme de streaming audio');
});

app.listen(port, () => {
  console.log(`Le serveur tourne sur le port ${port}`);
});

app.use('/api/auth', authRoutes);

app.use('/api/audio', audioRoutes);


