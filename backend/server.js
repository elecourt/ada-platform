const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 8081;

app.use(cors());
app.use(bodyParser.json());

app.post('/send-email', (req, res) => {
  const { firstName, lastName, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER,
    subject: `Message de ${firstName} ${lastName}`,
    text: `
      Nom: ${firstName} ${lastName}
      Email: ${email}
      Message: ${message}
    `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      return res.status(500).json({ error: 'Erreur lors de l\'envoi de l\'email.' });
    }
    console.log('Email envoyé: ' + info.response);
    res.status(200).json({ message: 'Email envoyé avec succès.' });
  });
});

app.listen(port, () => {
  console.log(`Serveur backend en cours d'exécution sur le port ${port}`);
});
