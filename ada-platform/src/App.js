import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/vitrine/Home";
import About from "./pages/vitrine/About";
import Services from "./pages/vitrine/Services";
import Pricing from "./pages/vitrine/Pricing";
import News from "./pages/vitrine/News";
import Contact from "./pages/vitrine/Contact";
import Login from "./pages/auth/Login";
import AdminDashboard from "./pages/admin/Dashboard";
import AdminClient from "./pages/admin/Clients";
import AdminProfile from "./pages/client/Profile";
import AdminResources from "./pages/client/Resources";
import AdminSafeBox from "./pages/client/SafeBox";
import ClientDashboard from "./pages/client/Dashboard";
import Agenda from "./pages/client/Agenda";
import ClientProfile from "./pages/client/Profile";
import ClientResources from "./pages/client/Resources";
import ClientSafeBox from "./pages/client/SafeBox";

// Import des nouvelles pages légales
import PolitiqueConfidentialite from "./pages/vitrine/Confidentialite";
import Cookies from "./pages/vitrine/Cookies";
import MentionsLegales from "./pages/vitrine/MentionsLegales";

function App() {
  return (
    <Router>
      <Routes>
        {/* Routes pour la vitrine */}
        <Route path="/" element={<Home />} />  {/* Page d'accueil */}
        <Route path="about" element={<About />} />  {/* Page à propos */}
        <Route path="services" element={<Services />} />  {/* Page services */}
        <Route path="pricing" element={<Pricing />} />  {/* Page tarification */}
        <Route path="news" element={<News />} />  {/* Page actualités */}
        <Route path="contact" element={<Contact />} />  {/* Page contact */}

        {/* Routes légales */}
        <Route path="/politique-confidentialite" element={<PolitiqueConfidentialite />} />  {/* Politique de confidentialité */}
        <Route path="/cookies" element={<Cookies />} />  {/* Cookies */}
        <Route path="/mentions-legales" element={<MentionsLegales />} />  {/* Mentions légales */}

        {/* Routes pour la partie Admin (requiert un compte administrateur) */}
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/safebox" element={<AdminSafeBox />} />
        <Route path="/admin/resources" element={<AdminResources />} />
        <Route path="/admin/profile" element={<AdminProfile />} />
        <Route path="/admin/clients" element={<AdminClient />} />

        {/* Routes pour la partie Client */}
        <Route path="/client/dashboard" element={<ClientDashboard />} />
        <Route path="/client/safebox" element={<ClientSafeBox />} />
        <Route path="/client/resources" element={<ClientResources />} />
        <Route path="/client/agenda" element={<Agenda />} />
        <Route path="/client/profile" element={<ClientProfile />} />

        {/* Route de connexion */}
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
