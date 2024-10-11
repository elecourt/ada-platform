import React from 'react';
import VitrineLayout from '../../layouts/VitrineLayout';
import '../../styles/LegalesPages.css';

const Confidentialite = () => {
  return (
    <VitrineLayout>
      <section className="legal-page">
        <h1>Politique de Confidentialité</h1>

        <div className="legal-section">
          <h2>Collecte des informations</h2>
          <p>Nous collectons certaines informations personnelles lorsque vous utilisez notre site, telles que votre nom, votre adresse e-mail et d'autres données pertinentes pour vous fournir nos services.</p>
        </div>

        <div className="legal-section">
          <h2>Utilisation des informations</h2>
          <p>Les informations que nous collectons sont utilisées uniquement pour améliorer nos services, personnaliser votre expérience et vous tenir informé de nos nouveautés.</p>
        </div>

        <div className="legal-section">
          <h2>Protection des données</h2>
          <p>Nous prenons la sécurité de vos informations personnelles très au sérieux et utilisons des technologies de sécurité pour les protéger.</p>
        </div>

        <div className="legal-section">
          <h2>Droits des utilisateurs</h2>
          <p>Vous avez le droit de demander l'accès, la modification ou la suppression de vos données à tout moment.</p>
        </div>

        <div className="center-button">
          <button className="cta-button" onClick={() => window.location.href = '/contact'}>Contactez-nous pour en savoir plus</button>
        </div>
      </section>
    </VitrineLayout>
  );
};

export default Confidentialite;