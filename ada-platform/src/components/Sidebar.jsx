import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside>
      <ul>
        <li><Link to="/admin/dashboard">Home</Link></li>
        <li><Link to="/admin/safebox">Coffre-fort</Link></li>
        <li><Link to="/admin/resources">Ressources</Link></li>
        <li><Link to="/admin/profile">Profil</Link></li>
        <li><Link to="/admin/clients">Client</Link></li>
      </ul>
    </aside>
  );
};

export default Sidebar;
