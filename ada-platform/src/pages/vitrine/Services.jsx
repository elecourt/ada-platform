import React, { useState } from 'react';
import VitrineLayout from '../../layouts/VitrineLayout';
import '../../styles/Services.css'; // Fichier CSS pour styliser la page services
import { FaAngleDown } from 'react-icons/fa'; // Import de l'icône

import serviceHeader from '../../assets/images/Service-header.png';
import creaEntreprise from '../../assets/icons/crea_entreprise.png';
import idVisuelle from '../../assets/icons/id_visuelle.png';
import compta from '../../assets/icons/compta.png';
import justice from '../../assets/icons/justice.png';
import reseau from '../../assets/icons/reseau.png';
import clientVanessa from '../../assets/images/client-vanessa-caux.png';
import clientPierre from '../../assets/images/client-pierre-alain.png';
import clientMaureen from '../../assets/images/client-maureen.png';
import serviceContact from '../../assets/images/services-contact.png';
import serviceDesign from '../../assets/images/service-design.png';
import serviceCommunication from '../../assets/images/service-communication.png';
import serviceFull from '../../assets/images/service-full.png';

const Services = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <VitrineLayout>
      {/* Section 1 : Titre, texte, bouton et image */}
      <section className="hero-services">
        <div className="hero-left">
          <h1>Le meilleur outil pour les entreprises du bâtiment ! </h1>
          <p>Avec Ada gagnez du temps sur les tâches qui vous déplaise. </p>
          <button className="cta-button" onClick={() => window.location.href = '/contact'}>Je délègue mes tâches</button>
        </div>
        <div className="hero-right">
          <img src={serviceHeader} alt="nos services" />
        </div>
      </section>

      {/* Section 2 : Services listés */}
      <section className="services-list">
        <h2>Que comprend la solution Ada ?</h2>
        <div className="services-grid">
          {/* Première ligne avec 3 items */}
          <div className="service-card">
            <img src={creaEntreprise} alt="Service 1" />
            <h4>Ouverture d'entreprise</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.</p>
          </div>
          <div className="service-card">
            <img src={idVisuelle} alt="Service 2" />
            <h4>Création d'identité visuelle</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.</p>
          </div>
          <div className="service-card">
            <img src={compta} alt="Service 3" />
            <h4>Gestion de la comptabilité</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.</p>
          </div>
        </div>

        {/* Deuxième ligne avec 2 items */}
        <div className="services-grid second-row">
          <div className="service-card">
            <img src={justice} alt="Service 4" />
            <h4>Assistance juridique</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.</p>
          </div>
          <div className="service-card">
            <img src={reseau} alt="Service 5" />
            <h4>Création et gestion des réseaux sociaux</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.</p>
          </div>
        </div>

        <div className="center-button">
          <button className="cta-button" onClick={() => window.location.href = '/pricing'}>Je vais voir les offres</button>
        </div>
      </section>

      {/* Section 3 : Avis clients */}
      <section className="testimonials-section">
        <h2>Avis clients</h2>
        <div className="testimonials">
          <div className="testimonial-card">
            <p>“Travailler avec Ada a transformé mon entreprise. Ils ont conçu un site internet qui a augmenté ma visibilité et mes demandes de devis. Cette solution est un véritable atout pour toutes les micro-entreprises du bâtiment. Je recommande vivement leurs services !"</p>
            <div className="author">
              <img src={clientVanessa} alt="Service 5" />
              <div>
                <h4>Vanessa Caux</h4>
                <p>Rouen, Vaness’Deco</p>
              </div>
            </div>
          </div>
          <div className="testimonial-card">
            <p>"En tant que micro-entreprise, j’avais  du mal à gérer ma communication. L’équipe Ada a pris en charge mes réseaux sociaux, mais a également créé un site internet moderne qui reflète parfaitement mes services. Merci pour votre professionnalisme et votre efficacité !"</p>
            <div className="author">
              <img src={clientPierre} alt="Service 5" />
              <div>
                <h4>Pierre-Alain Dumermuth</h4>
                <p>Hauteville sur Fier, Fredy Motoculture</p>
              </div>
            </div>
          </div>
          <div className="testimonial-card">
            <p>"L’équipe Ada a été d'un soutien inestimable lors d'un litige avec un client. Leur assistance juridique nous a permis de résoudre le conflit rapidement et de manière satisfaisante, sans perturber notre activité.  Je recommande vivement à toutes les petites entreprises du bâtiment !"</p>
            <div className="author">
              <img src={clientMaureen} alt="Service 5" />
              <div>
                <h4>Maureen Ballart</h4>
                <p>Chindrieux, BZ Multiservices</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 : Grande card */}
      <section className="feature-card">
        <div className="content">
          <h2>Imaginez : vous pourriez supprimer ces 3 heures perdues tous les mois ! </h2>
          <button className="cta-button" onClick={() => window.location.href = '/contact'}>Je réserve un appel de découverte</button>
        </div>
        <div className="image">
          <img src={serviceContact} alt="Service 5" />
        </div>
      </section>

      {/* Section 5 : Services supplémentaires */}
      <section className="additional-services">
        <div className="services-grid">
          <div className="service-card">
            <img src={serviceDesign} alt="Service 5" />
            <h4>Besoin de design ?</h4>
            <p>Pour une micro-entreprise, posséder une identité visuelle, une communication efficace et un logo est essentiel. Ces éléments sont des piliers de votre image de marque. Ils vous permettent de vous démarquer de la concurrence, de gagner la confiance des clients et de bâtir une reconnaissance durable. Une bonne communication et un logo bien conçu reflètent le professionnalisme et la crédibilité de votre entreprise.</p>
          </div>
          <div className="service-card">
            <img src={serviceCommunication} alt="Service 5" />
            <h4>Besoin de communication ?</h4>
            <p>Un forfait axé sur la communication, le marketing et les réseaux sociaux est indispensable pour une micro-entreprise. Il permet de maximiser votre visibilité en ligne, d'engager votre audience de manière plus efficace et de faire la promotion de vos services de manière ciblée. Avec une stratégie bien définie, vous pouvez atteindre de nouveaux clients, augmenter votre notoriété et faire croître votre entreprise.</p>
          </div>
          <div className="service-card">
            <img src={serviceFull} alt="Service 5" />
            <h4>Besoin d'une solution complète ?</h4>
            <p>Notre service de création de site internet complet inclut la conception, l'hébergement, la maintenance et l'assistance technique. Cela permet à votre entreprise d'avoir une présence en ligne professionnelle et d'attirer davantage de clients. Vous pouvez ainsi vous concentrer sur votre activité principale, tandis que nous gérons votre visibilité et votre image sur le web.</p>
          </div>
        </div>
      </section>

      {/* Section 6 : FAQ */}
      <section className="faq-section">
        <h2>Des questions ?</h2>
        <div className="faq">
          {faqItems.map((item, index) => (
            <div className="faq-item" key={index} onClick={() => toggleFaq(index)}>
              <div className="faq-question">
                <h4>{item.question}</h4>
                <FaAngleDown className={`icon ${activeFaq === index ? 'active' : ''}`} /> {/* Ajout de l'icône ici */}
              </div>
              <div className={`faq-answer ${activeFaq === index ? 'active' : ''}`}>
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </VitrineLayout>
  );
};

// Exemple de données pour les FAQ
const faqItems = [
  {
    question: "Comment créer mon entreprise ?",
    answer: "Il suffit de suivre les étapes d'enregistrement. Nous vous accompagnerons tout au long du processus.",
  },
  {
    question: "Quels services proposez-vous ?",
    answer: "Nous offrons des services de création d'entreprise, d'identité visuelle, de gestion comptable et plus encore.",
  },
  {
    question: "Comment fonctionne votre service d'assistance juridique ?",
    answer: "Notre service d'assistance juridique vous aide à gérer les litiges et à respecter la réglementation.",
  },
  {
    question: "Quels sont vos tarifs ?",
    answer: "Nos tarifs varient en fonction des services choisis. Vous pouvez consulter notre page de tarification pour plus de détails.",
  },
];

export default Services;
