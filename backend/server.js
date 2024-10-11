// server.js
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();  // Charger les variables d'environnement

const app = express();
const port = process.env.PORT || 8081;

// Middleware pour gérer les CORS et le parsing des requêtes
app.use(cors());
app.use(bodyParser.json());

// Route pour envoyer un email
app.post('/send-email', (req, res) => {
  const { firstName, lastName, email, message } = req.body;

  // Configuration du transporteur Nodemailer (en utilisant Gmail)
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,  // Email du fichier .env
      pass: process.env.EMAIL_PASS,  // Mot de passe d'application Gmail
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER,  // L'adresse email de destination
    subject: `Message de ${firstName} ${lastName}`,
    text: `
      Nom: ${firstName} ${lastName}
      Email: ${email}
      Message: ${message}
    `,
  };

  // Envoi de l'email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      return res.status(500).json({ error: 'Erreur lors de l\'envoi de l\'email.' });
    }
    console.log('Email envoyé: ' + info.response);
    res.status(200).json({ message: 'Email envoyé avec succès.' });
  });
});

// Lancer le serveur
app.listen(port, () => {
  console.log(`Serveur backend en cours d'exécution sur le port ${port}`);
});
