import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const VitrineLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main>{children}</main>  {/* Assurez-vous que les enfants sont dans une balise comme <main> */}
      <Footer />
    </div>
  );
};

export default VitrineLayout;
