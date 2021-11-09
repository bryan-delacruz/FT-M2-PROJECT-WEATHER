import React from "react";

const Alert = ({ ciudadEncontrada,handleAlert }) => {
  return !ciudadEncontrada ? (
    <div className="alert alert-info alert-dismissible fade show mt-3">
      <strong>La ciudad no fue encontrada</strong>
      <button type="button" className="close" onClick={() => handleAlert()}>
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  ) : null;
};

export default Alert;
