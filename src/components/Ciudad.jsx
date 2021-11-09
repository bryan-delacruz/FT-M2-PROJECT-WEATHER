import React from "react";
import { useParams } from "react-router";

export default function Ciudad({ onFilter }) {
  // const [city, setCity] = useState({});

  const { id } = useParams();

  let city = onFilter(id);

  return !city ? (
    <div>No se encontró la ciudad</div>
  ) : (
    <div>
      <div className="container">
        <h2>{city.name}</h2>
        <div>
          <div>Temperatura: {city.temp} ºC</div>
          <div>Clima: {city.weather}</div>
          <div>Viento: {city.wind} km/h</div>
          <div>Cantidad de nubes: {city.clouds}</div>
          <div>Latitud: {city.latitud}º</div>
          <div>Longitud: {city.longitud}º</div>
        </div>
      </div>
    </div>
  );
}
