import SearchBar from "./SearchBar.jsx";

import { NavLink } from "react-router-dom";

import "./styles/Nav.css";

const Nav = ({ onSearch }) => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container">
        <div>
          <h1 className="navbar-brand">e-Tiempo || ©bryan-delacruz</h1>
          <NavLink to="/">
            <button type="button" className="btn btn-dark mr-2">
              Inicio
            </button>
          </NavLink>
          <NavLink to="/about">
            <button type="button" className="btn btn-dark">
              About
            </button>
          </NavLink>
        </div>
        <SearchBar onSearch={onSearch} />
      </div>
    </nav>
  );
};

export default Nav;
