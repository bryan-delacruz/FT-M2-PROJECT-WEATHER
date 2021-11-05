import { useState } from "react";

import "./styles/SearchBar.css";

export default function SearchBar({ onSearch }) {
  // acá va tu código
  const [city, setCity] = useState("");

  const handleInputChange = (e) => {
    e.preventDefault();
    setCity(e.target.value);
  };

  return (
    <form className="form-inline">
      <input
        id="input"
        className="form-control mr-sm-2 form-input"
        type="text"
        value={city}
        placeholder="Ingresar ciudad"
        onChange={(e) => {
          handleInputChange(e);
        }}
      />
      <button
        className="btn btn-primary my-2 my-sm-0"
        type="onSubmit"
        onClick={(e) => {
          e.preventDefault();
          onSearch(city);
          setCity("");
        }}
      >
        Agregar
      </button>
    </form>
  );
}
