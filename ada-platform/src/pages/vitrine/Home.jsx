import React from 'react';
import VitrineLayout from '../../layouts/VitrineLayout';
import '../../styles/Home.css'; // CSS pour styliser la page d'accueil
import partnerPhida from '../../assets/images/partner_phida.png';
import partner2 from '../../assets/images/partner2.png';
import partner3 from '../../assets/images/logo_b&z.png';
import partner4 from '../../assets/images/partner3.png';
import partner5 from '../../assets/images/partner4.png';
import partner6 from '../../assets/images/partner6.png';
import featureImage from '../../assets/images/Home-feature.png';
import clientVanessa from '../../assets/images/client-vanessa-caux.png';
import clientPierre from '../../assets/images/client-pierre-alain.png';
import clientMaureen from '../../assets/images/client-maureen.png';
import article2 from '../../assets/images/Blog-article2.png';
import article3 from '../../assets/images/Blog-article3.png';
import article4 from '../../assets/images/Blog-article4.png';

const Home = () => {
  return (
    <VitrineLayout>
      {/* Section 1 : Image pleine page avec texte et bouton */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Avec Ada concentrez vous sur ce qui compte !</h1>
          <p>Accompagnement juridique, comptabilité, communication, administration. <br />Entrepreneurs du bâtiment, avec Ada, gagnez du temps, déléguez nous vos tâches !</p>
          <button className="cta-button">Je délègue mes tâches</button>
        </div>
      </section>

      {/* Section chevauchante avec deux cards */}
      <section className="cards-section">
        <div className="card cardGauche">
            <div className="card-number"><h2>1</h2></div>
          <h3>Micro-entreprise</h3>
          <p>L'offre des indépendants</p>
          <button className="cta-button">En savoir plus</button>
        </div>
        <div className="card cardDroite">
        <div className="card-number"><h2>2</h2></div>
          <h3>TPE</h3>
          <p>L'offre pour les équipe (1 à 19 salariés)</p>
          <button className="cta-button">En savoir plus</button>
        </div>
      </section>

      {/* Section partenaires */}
      <section className="partners-section">
        <h2>Ils nous font confiance :</h2>
        <img src={partnerPhida} alt="Logo Phida" />
        <img src={partner2} alt="Logo 2" />
        <img src={partner3} alt="Logo 3" />
        <img src={partner4} alt="Logo 4" />
        <img src={partner5} alt="Logo 5" />
        <img src={partner6} alt="Logo 6" />
      </section>

      {/* Section grande card avec image à gauche */}
      <section className="feature-card-home">
        <div className="image">
            <img src={featureImage} alt="Feature Image" />
        </div>
        <div className="content">
          <h2>A chaque organisation sa solution</h2>
          <p>Votre  entreprise mérite une attention particulière. Nous avons la solution pour vous aider à gérer votre comptabilité, simplifier vos tâches administratives et dynamiser votre communication. Notre équipe s'adapte à vos besoins, en offrant des services sur mesure qui correspondent à ce que vous recherchez. Nous sommes là pour vous accompagner à chaque étape. Faites confiance à notre équipe pour vous aider à atteindre vos objectifs !</p>
          <div className="mini-cards">
            <div className="mini-card cardGauche">
              <h4>L'offre des indépendants</h4>
              <p>Notre solution s'adapte parfaitement aux besoins des micro-entreprises, vous offrant un soutien personnalisé et efficace.</p>
            </div>
            <div className="mini-card cardDroite">
              <h4>L'offre pour les équipes</h4>
              <p>Pour les TPE, nous proposons des services sur mesure pour optimiser votre comptabilité, vos tâches administratives et votre communication.</p>
            </div>
          </div>
          <button className="cta-button">Voir plus</button>
        </div>
      </section>

      {/* Section avis clients */}
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

      {/* Section Blog */}
      <section className="blog-section">
        <h2>Nos articles</h2>
        <div className="articles">
          <div className="article-card">
            <img src={article3} alt="Titre Article" />
            <h4>Où trouver son bilan comptable ?</h4>
            <p>Découvrez les étapes essentielles pour obtenir votre bilan comptable en toute simplicité et assurer la santé financière de votre entreprise !</p>
            <a href='#'>Lire plus</a>
          </div>
          <div className="article-card">
            <img src={article4} alt="Titre Article" />
            <h4>Comment gérer un impayé ?</h4>
            <p>Apprenez les stratégies efficaces pour gérer les impayés et maintenir une trésorerie saine pour votre entreprise !</p>
            <a href='#'>Lire plus</a>
          </div>
          <div className="article-card">
            <img src={article2} alt="Titre Article" />
            <h4>Pourquoi avoir un un logo ?</h4>
            <p>Découvrez pourquoi avoir un logo est essentiel pour renforcer l'identité de votre entreprise et attirer davantage de clients !</p>
            <a href='#'>Lire plus</a>
          </div>
        </div>
        <button className="cta-button see-more-button">Voir plus</button>
      </section>
    </VitrineLayout>
  );
};

export default Home;
