// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo_ada2.png'; // Chemin vers le logo
import '../styles/Footer.css'; 

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-top">
                <div className="footer-logo">
                    <Link to="/">
                        <img src={logo} alt="ADA Logo" />
                    </Link>
                </div>
                <div className="footer-links">
                    <h4>A propos</h4>
                    <ul>
                        <li><Link to="/services">Nos Services</Link></li>
                        <li><Link to="/pricing">Tarifs</Link></li>
                        <li><Link to="/news">Actualités</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>
                <div className="footer-newsletter">
                    <h4>Newsletter</h4>
                    <p>Inscrivez-vous à notre newsletter pour rester à jour sur les fonctionnalités de la plateforme.</p>
                    <input type="email" placeholder="Email" />
                    <button>Je m'abonne</button>
                    <p className='legend'>En vous abonnant, vous acceptez notre <a href='#'>politique de confidentialité</a> et consentez à recevoir des mises à jour de notre société.</p>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="footer-privacy">
                    <p>© 2024 ADA. Tous droits réservés.</p>
                    <Link to="/politique-confidentialite">Politique de Confidentialité</Link>
                    <Link to="/cookies">Cookies</Link>
                    <Link to="/mentions-legales">Mentions Légales</Link>
                </div>
                <div className="footer-social">
                    <ul>
                        <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                        <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
