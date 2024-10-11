import React, { useState } from 'react';
import VitrineLayout from '../../layouts/VitrineLayout';
import '../../styles/Contact.css';
import PhotoContact from '../../assets/images/Contact.png';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
    acceptTerms: false,
  });

  const [messageSent, setMessageSent] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.acceptTerms) {
      alert("Vous devez accepter les conditions d'utilisation avant de soumettre.");
      return;
    }

    try {
      const response = await fetch('http://213.156.132.75:8081/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        console.log('Email envoyé avec succès !', data);
        setMessageSent(true);
      } else {
        console.error('Erreur lors de l\'envoi de l\'email:', data);
      }
    } catch (err) {
      console.error('Erreur lors de l\'envoi de l\'email:', err);
    }
  };

  return (
    <VitrineLayout>
      <div className="contact-container">
        <h2 className="contact-title">Comment pouvons-nous vous aider ?</h2>
        <p className="contact-description">
        Vous avez une question sur notre plateforme ou sur nos prestations en général ? <br />
        N’hésitez pas à prendre contact avec nous, on sera ravie de discuter avec vous !         </p>

        {messageSent ? (
          <p className="success-message">Votre message a été envoyé avec succès !</p>
        ) : (
          <div className="contact-content">
            <div className="contact-form-container">
              <h3>Nous contacter</h3>
              <p>Notre équipe sera ravie d’échanger sur votre projet et de vous accompagner dans votre stratégie.</p>

              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="firstName">Prénom*</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="lastName">Nom*</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email*</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message*</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Votre message..."
                    required
                  />
                </div>

                <div className="form-group checkbox-group">
                  <input
                    type="checkbox"
                    id="acceptTerms"
                    name="acceptTerms"
                    checked={formData.acceptTerms}
                    onChange={handleChange}
                    required
                  />
                  <label htmlFor="acceptTerms">J'accepte les conditions générales d'utilisation</label>
                </div>

                <button type="submit" className="submit-button">J'envoie</button>
              </form>
            </div>

            <div className="contact-image-container">
                <img src={PhotoContact} alt="Contact" />
            </div>
          </div>
        )}
      </div>
    </VitrineLayout>
  );
};

export default Contact;
