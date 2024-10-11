import React from 'react';
import VitrineLayout from '../../layouts/VitrineLayout';
import '../../styles/About.css'; // CSS pour styliser la page "Qui sommes-nous"
import aboutPhoto from '../../assets/images/About.png';
import partnerPhida from '../../assets/images/partner_phida.png';
import partner2 from '../../assets/images/partner2.png';
import partner3 from '../../assets/images/logo_b&z.png';
import partner4 from '../../assets/images/partner3.png';
import partner5 from '../../assets/images/partner4.png';
import partner6 from '../../assets/images/partner6.png';

const About = () => {
  return (
    <VitrineLayout>
      {/* Section 1 : Titre et Texte à gauche, Image à droite */}
      <section className="about-intro-section">
        <div className="about-text">
          <h1>Un peu d'histoire ?</h1>
          <p>
          L’équipe Ada est spécialisés dans l'accompagnement des micros et des petites entreprises. Nous offrons des solutions complètes et personnalisées pour répondre à vos besoins spécifiques en matière de comptabilité, d'administration et de communication.
          </p>
        </div>
        <div className="about-image">
        <img src={aboutPhoto} alt="Logo 2" />
        </div>
      </section>

      {/* Section 2 : Ils nous font confiance (même section que sur la Home) */}
      <section className="partners-section">
        <h2>Ils nous font confiance :</h2>
        <img src={partnerPhida} alt="Logo Phida" />
        <img src={partner2} alt="Logo 2" />
        <img src={partner3} alt="Logo 3" />
        <img src={partner4} alt="Logo 4" />
        <img src={partner5} alt="Logo 5" />
        <img src={partner6} alt="Logo 6" />
      </section>

      {/* Section 3 : Texte centré avec bouton */}
      <section className="centered-text-section">
        <p>
        Qui sommes-nous ?<br />
Nous sommes une équipe dévouée de professionnels passionnés par l'idée d'aider les petites entreprises à réussir. Nous comprenons que chaque entreprise est unique, avec ses propres défis et objectifs. C'est pourquoi nous adaptons nos services pour correspondre précisément à vos besoins, que vous soyez une micro-entreprise ou une très petite entreprise (TPE). <br /><br />

Nos services : <br />
<li><span id='comptaOrange'>Comptabilité :</span> Nous simplifions la gestion de votre comptabilité, vous permettant de vous concentrer sur le développement de votre activité.</li>
<li><span id='adminBleu'>Administration : </span>De la création d’entreprise, passant par la gestion des tâches administratives à l'assistance juridique, nous sommes là pour vous aider à naviguer dans les complexités administratives.</li>
<li><span id='commJaune'>Communication : </span>Nous dynamisons votre présence en ligne et hors ligne, en gérant vos réseaux sociaux, en créant des sites internet attractifs et en concevant des cartes de visite et autres supports professionnelles.</li><br /><br />

Pourquoi choisir notre solution ?<br />
<li>Adaptabilité : Nos services sont conçus pour s'adapter parfaitement aux besoins des micro-entreprises et des TPE.</li>
<li>Personnalisation : Nous offrons des solutions sur mesure qui répondent spécifiquement à vos attentes et exigences.</li>
<li>Expertise : Avec notre expertise, vous bénéficiez d'un soutien complet et professionnel à chaque étape de votre développement.</li><br /><br />

Notre mission :<br />
Notre mission est de fournir un soutien intégral et adapté aux petites entreprises, en leur offrant les outils nécessaires pour prospérer dans leur domaine. Nous croyons en l'importance d'une gestion efficace et d'une communication stratégique pour assurer le succès de votre entreprise.<br /><br />

Faites confiance à l’équipe Ada pour vous accompagner dans votre croissance et découvrir comment nous pouvons transformer votre entreprise dès aujourd'hui !
        </p>
        <button className="cta-button" onClick={() => window.location.href = '/contact'}>Je demande un rendez-vous</button>
      </section>

      {/* Section 4 : Chiffres Clé */}
      <section className="key-numbers-section">
        <h2>Chiffres clés</h2>
        <div className="key-numbers">
          <div className="key-number-card">
            <div className="vertical-bar"></div>
            <div><h3>30</h3>
            <p>Entreprises nous font confiance</p></div>
          </div>
          <div className="key-number-card">
            <div className="vertical-bar"></div>
            <div>
              <h3>100%</h3>
              <p>De nos clients nous recommande</p>
            </div>
          </div>
          <div className="key-number-card">
            <div className="vertical-bar"></div>
            <div>
              <h3>5/5</h3>
              <p>Etoiles sur Google</p>
            </div>
          </div>
        </div>
        <button className="cta-button" onClick={() => window.location.href = '/services'}>Découvrir nos services</button>
      </section>
    </VitrineLayout>
  );
};

export default About;
