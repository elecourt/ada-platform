import React from 'react';
import VitrineLayout from '../../layouts/VitrineLayout';
import '../../styles/Login.css';

const Login = () => {
  return (
    <VitrineLayout>
      <div className="login-container">
        <h2 className="login-title">Connexion</h2>
        <h3 className="login-subtitle">Se connecter à la plateforme</h3>
        
        <form className="login-form">
          <div className="form-group">
            <label htmlFor="email">Email*</label>
            <input type="email" id="email" required />
          </div>

          <div className="form-group">
            <label htmlFor="password">Mot de passe*</label>
            <input type="password" id="password" required />
          </div>

          <button type="submit" className="login-button">Je me connecte</button>
        </form>

        <div className="forgot-password">
          <p>Vous avez un problème ?</p>
          <a href="/forgot-password">Mot de passe oublié</a>
        </div>
      </div>
    </VitrineLayout>
  );
};

export default Login;
