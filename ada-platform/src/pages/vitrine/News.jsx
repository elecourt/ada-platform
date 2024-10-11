import React, { useState } from 'react';
import VitrineLayout from '../../layouts/VitrineLayout';
import '../../styles/News.css'; // Fichier CSS pour styliser la page actualité
import article1 from '../../assets/images/Blog-article1.png';
import article2 from '../../assets/images/Blog-article2.png';
import article3 from '../../assets/images/Blog-article3.png';
import article4 from '../../assets/images/Blog-article4.png';

// Article data
const articlesData = [
  {
    id: 1,
    title: 'Comment Phida devient notre partenaire',
    category: 'Actualités',
    image: article1,
    text: 'Texte de l\'article 1.', // Ajouté pour la cohérence
  },
  {
    id: 2,
    title: 'Pourquoi avoir un un logo ?',
    category: 'Conseils',
    image: article2,
    text: 'Texte de l\'article 2.',
  },
  {
    id: 3,
    title: 'Où trouver son bilan comptable ?',
    category: 'Nouveautés',
    image: article3,
    text: 'Texte de l\'article 3.',
  },
  {
    id: 4,
    title: 'Comment gérer un impayé ?',
    category: 'Événements',
    image: article4,
  },
];

const categories = ['Tout', 'Actualités', 'Conseils', 'Nouveautés', 'Événements'];

const Actualite = () => {
  const [selectedCategory, setSelectedCategory] = useState('Tout');

  const filteredArticles = articlesData.filter(article => 
    selectedCategory === 'Tout' || article.category === selectedCategory
  );

  return (
    <VitrineLayout>
      {/* Section 1: Hero Section */}
      <section className="hero-actualite">
        <div className="hero-left">
          <h1>Un peu de lecture</h1>
          <p>Pour vous aider à déchiffrer toutes les nuances de l’entreprenariat.</p>
        </div>
      </section>

      {/* Section 2: Main Articles */}
      <section className="main-articles">
        <div className="main-article">
          <img src={articlesData[0].image} alt={articlesData[0].title} />
          <h4>{articlesData[0].category}</h4>
          <h2>{articlesData[0].title}</h2>
          <a href='#'>Lire plus</a>
        </div>
        <div className="sidebar-articles">
          {articlesData.slice(1, 4).map(article => (
            <div className="sidebar-article" key={article.id}>
              <img src={article.image} alt={article.title} />
              <div>
                <h4>{article.category}</h4>
                <h2>{article.title}</h2>
                <a href='#'>Lire plus</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 3: All Articles */}
      <section className="all-articles">
        <h2>Tous nos articles</h2>
        
        {/* Button filter for larger screens */}
        <div className="article-filter-buttons">
          {categories.map(category => (
            <button
              key={category}
              className={`filter-button ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Dropdown filter for smaller screens */}
        <div className="article-filter-dropdown">
          <select 
            value={selectedCategory} 
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="filter-dropdown"
          >
            {categories.map(category => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        
        <div className="articles-grid">
          {filteredArticles.map(article => (
            <div className="article-card" key={article.id}>
              <img src={article.image} alt={article.title} />
              <h4>{article.category}</h4>
              <h2>{article.title}</h2>
              <p>{article.text || 'Pas de texte disponible.'}</p>
              <a href='#'>Lire plus</a>
            </div>
          ))}
        </div>
      </section>
    </VitrineLayout>
  );
};

export default Actualite;
