import "./styles/Card.css";

export default function Card({ name, min, max, img, onClose }) {
  // acá va tu código
  return (
    <>
      <div className="card border-dark mb-3">
        <div className="card-header card-container-title">
          <h5>{name}</h5>
          <button
            type="button" className="close text-primary"
            onClick={onClose}
          >
            &times;
          </button>
        </div>
        <div className="card-container-text">
          <div className="card-body text-dark">
            <p className="card-text">Min {min}</p>
            <p className="card-text">Max {max}</p>
          </div>
          <img
            src={`http://openweathermap.org/img/wn/${img}@2x.png`}
            alt="img"
          />
        </div>
      </div>
    </>
  );
}
