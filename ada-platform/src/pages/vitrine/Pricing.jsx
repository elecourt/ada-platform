import React, { useState } from 'react';
import VitrineLayout from '../../layouts/VitrineLayout';
import '../../styles/Pricing.css'; // Fichier CSS pour styliser la page des tarifs
import iconDesign from '../../assets/icons/forfait-design.png';
import iconCommunication from '../../assets/icons/forfait-communication.png';
import iconComplet from '../../assets/icons/forfait-complet.png';

const Pricing = () => {
  const [selectedCategory, setSelectedCategory] = useState('micro');
  const [openQuestionIndex, setOpenQuestionIndex] = useState(null); // État pour savoir quelle question est ouverte

  const pricingData = {
    micro: [
      { icon: iconDesign, title: 'Forfait design', price: '90€ TTC/mois', features: ['Service 1', 'Service 2', 'Service 3'], className: 'forfait-design' },
      { icon: 'path-to-icon', title: 'Forfait 2 Micro', price: '€200', features: ['Service 1', 'Service 2', 'Service 3'], className: 'forfait-communication' },
      { icon: 'path-to-icon', title: 'Forfait 3 Micro', price: '€300', features: ['Service 1', 'Service 2', 'Service 3'], className: 'forfait-full' },
    ],
    tpe: [
      { icon: iconDesign, title: 'Forfait design', price: '€150', features: ['Service 1', 'Service 2', 'Service 3'], className: 'forfait-design' },
      { icon: 'path-to-icon', title: 'Forfait 2 TPE', price: '€250', features: ['Service 1', 'Service 2', 'Service 3'], className: 'forfait-communication' },
      { icon: 'path-to-icon', title: 'Forfait 3 TPE', price: '€350', features: ['Service 1', 'Service 2', 'Service 3'], className: 'forfait-full' },
    ],
  };

  const toggleQuestion = (index) => {
    // Si la question est déjà ouverte, on la ferme, sinon on l'ouvre
    setOpenQuestionIndex(openQuestionIndex === index ? null : index);
  };

  return (
    <VitrineLayout>
      {/* Section 1 : Titre et Petit Texte Centré */}
      <section className="pricing-intro-section">
        <h1>La plateforme Ada : <br />une tarification en 3 piliers</h1>
        <p>Ada est le seul acteur du marché à lever le voile sur ses tarifs. Simples, transparents et adaptés à vos besoins, les tarifs ci-dessous correspondent et s’adaptent à vos besoins en fonction de vos entreprises. </p>
      </section>

      {/* Section 2 : 3 Cards avec icône, titre, et texte */}
      <section className="pricing-cards-section">
        <div className="pricing-card design">
          <img src={iconDesign} alt="icon design" />
          <h3>Un forfait plutôt design</h3>
          <p>Pour une petite entreprise, posséder une identité visuelle, une communication efficace et un logo est essentiel. Ces éléments sont des piliers de votre image de marque. Ils vous permettent de vous démarquer de la concurrence, de gagner la confiance des clients et de bâtir une reconnaissance durable. Une bonne communication et un logo bien conçu reflètent le professionnalisme et la crédibilité de votre entreprise.</p>
        </div>
        <div className="pricing-card communication">
          <img src={iconCommunication} alt="icon design" />
          <h3>Un forfait plutôt communication</h3>
          <p>Un forfait axé sur la communication, le marketing et les réseaux sociaux est indispensable pour une petite entreprise. Il permet de maximiser votre visibilité en ligne, d'engager votre audience de manière plus efficace et de faire la promotion de vos services de manière ciblée. Avec une stratégie bien définie, vous pouvez atteindre de nouveaux clients, augmenter votre notoriété et faire grandir votre entreprise.</p>
        </div>
        <div className="pricing-card complet">
        <img src={iconComplet} alt="icon design" />
          <h3>La solution complète </h3>
          <p>Allier une identité visuelle avec une stratégie de communication est un atout majeur pour toute petite entreprise. Avec le forfait full, vous optimisez votre visibilité et renforcez votre présence sur le marché. De plus, avoir un site internet professionnel est un véritable plus, offrant une vitrine accessible 24/7 pour présenter vos services et attirer de nouveaux clients. Ensemble, ces éléments constituent une base solide pour la croissance et le succès de votre entreprise.</p>
        </div>
      </section>

      {/* Section 3 : Slider pour changer les forfaits */}
      <section className="pricing-slider-section">
        <div className="slider-controls">
          <h2>Nos tarifs pour les ...</h2>
          <div className="slider-buttons">
            <button 
              className={selectedCategory === 'micro' ? 'active' : ''}
              onClick={() => setSelectedCategory('micro')}>
              Micro-entrepreneur
            </button>
            <button 
              className={selectedCategory === 'tpe' ? 'active' : ''}
              onClick={() => setSelectedCategory('tpe')}>
              TPE
            </button>
          </div>
        </div>
        <div className="pricing-plans">
  {pricingData[selectedCategory].map((plan, index) => (
    <div key={index} className={`pricing-plan-card ${plan.className}`}>
      <img src={plan.icon} alt={`${plan.title} Icon`} />
      <h3>{plan.title}</h3>
      <p className="price">{plan.price}</p>
      <hr />
      <ul>
        {plan.features.map((feature, i) => (
          <li key={i}>&#10003; {feature}</li>
        ))}
      </ul>
      <p className="description">Ce plan inclut tout ce dont vous avez besoin pour réussir.</p>
      <hr />
    </div>
  ))}
</div>
      </section>

      {/* Section 4 : FAQ */}
      <section className="faq-section">
        <h2>Des questions ?</h2>
        <div className="faq">
          {/* Question 1 */}
          <div className="faq-item">
            <div 
              className="faq-question" 
              onClick={() => toggleQuestion(0)}  // Toggle question 1
            >
              <h4>Comment puis-je souscrire ?</h4>
            </div>
            <div className={`faq-answer ${openQuestionIndex === 0 ? 'open' : ''}`}>
              <p>Vous pouvez souscrire en ligne en quelques clics, ou bien nous contacter directement pour plus d'informations.</p>
            </div>
          </div>

          {/* Question 2 */}
          <div className="faq-item">
            <div 
              className="faq-question" 
              onClick={() => toggleQuestion(1)}  // Toggle question 2
            >
              <h4>Quels modes de paiement acceptez-vous ?</h4>
            </div>
            <div className={`faq-answer ${openQuestionIndex === 1 ? 'open' : ''}`}>
              <p>Nous acceptons les cartes de crédit, PayPal et les virements bancaires.</p>
            </div>
          </div>

          {/* Question 3 */}
          <div className="faq-item">
            <div 
              className="faq-question" 
              onClick={() => toggleQuestion(2)}  // Toggle question 3
            >
              <h4>Est-il possible de changer de forfait ?</h4>
            </div>
            <div className={`faq-answer ${openQuestionIndex === 2 ? 'open' : ''}`}>
              <p>Oui, vous pouvez changer de forfait à tout moment sans frais supplémentaires.</p>
            </div>
          </div>

          {/* Question 4 */}
          <div className="faq-item">
            <div 
              className="faq-question" 
              onClick={() => toggleQuestion(3)}  // Toggle question 4
            >
              <h4>Y a-t-il des frais cachés ?</h4>
            </div>
            <div className={`faq-answer ${openQuestionIndex === 3 ? 'open' : ''}`}>
              <p>Non, tous nos frais sont transparents et clairement indiqués dans les plans.</p>
            </div>
          </div>
        </div>
      </section>
    </VitrineLayout>
  );
};

export default Pricing;
