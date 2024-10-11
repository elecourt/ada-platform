import React from 'react';
import VitrineLayout from '../../layouts/VitrineLayout';
import '../../styles/LegalesPages.css';

const Cookies = () => {
  return (
    <VitrineLayout>
      <section className="legal-page">
        <h1>Cookies</h1>

        <div className="legal-section">
          <h2>Qu'est-ce qu'un cookie ?</h2>
          <p>Un cookie est un petit fichier texte qui est stocké sur votre appareil lorsque vous visitez un site web. Les cookies nous aident à améliorer la navigation et les fonctionnalités de notre site.</p>
        </div>

        <div className="legal-section">
          <h2>Types de cookies utilisés</h2>
          <ul>
            <li><strong>Cookies essentiels :</strong> Ces cookies sont nécessaires au bon fonctionnement du site.</li>
            <li><strong>Cookies analytiques :</strong> Ils nous permettent d'analyser la manière dont les utilisateurs interagissent avec notre site.</li>
            <li><strong>Cookies de publicité :</strong> Utilisés pour personnaliser les annonces que vous voyez sur notre site.</li>
          </ul>
        </div>

        <div className="legal-section">
          <h2>Gestion des cookies</h2>
          <p>Vous pouvez choisir de désactiver ou de supprimer les cookies via les paramètres de votre navigateur. Cependant, cela peut affecter certaines fonctionnalités du site.</p>
        </div>
      </section>
    </VitrineLayout>
  );
};

export default Cookies;