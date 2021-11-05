import SearchBar from "./SearchBar.jsx";

import "./styles/Nav.css";

const Nav = ({ onSearch }) => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container">
        <h1 className="navbar-brand">e-Tiempo || ©bryan-delacruz</h1>
        <SearchBar onSearch={onSearch} />
      </div>
    </nav>
  );
};

export default Nav;
