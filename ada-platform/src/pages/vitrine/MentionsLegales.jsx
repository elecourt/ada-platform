import React from 'react';
import VitrineLayout from '../../layouts/VitrineLayout';
import '../../styles/LegalesPages.css';

const MentionsLegales = () => {
  return (
    <VitrineLayout>
      <section className="legal-page">
        <h1>Mentions Légales</h1>

        <div className="legal-section">
          <h2>Éditeur du site</h2>
          <p>ADA<br />14 Avenue du Rhône, 74000 Annecy<br />ada.aide.digitale@gmail.com</p>
        </div>

        <div className="legal-section">
          <h2>Hébergement du site</h2>
          <p>Le site est hébergé par LWS, dont le siège social est situé à 10, RUE PENTHIEVRE 75008 PARIS FRANCE.</p>
        </div>

        <div className="legal-section">
          <h2>Propriété intellectuelle</h2>
          <p>Tous les contenus présents sur ce site (textes, images, logos, etc.) sont protégés par des droits d'auteur et ne peuvent être réutilisés sans autorisation préalable.</p>
        </div>

        <div className="legal-section">
          <h2>Limitation de responsabilité</h2>
          <p>Nous ne pouvons être tenus responsables des dommages directs ou indirects résultant de l'utilisation de ce site web.</p>
        </div>
      </section>
    </VitrineLayout>
  );
};

export default MentionsLegales;