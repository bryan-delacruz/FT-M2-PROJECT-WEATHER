import React, { useState, useEffect } from "react";
import { useParams } from "react-router";

export default function Ciudad({ cities }) {
  const [city, setCity] = useState({});

  const { id } = useParams();

  // console.log("ciudad antes useEffect", city);

  useEffect(() => {
    // console.log("usefecct");
    cities.find((e) => e.id === parseInt(id))
      ? setCity(cities.filter((c) => c.id === parseInt(id))[0])
      : setCity({});
  }, [id, cities]);

  // console.log("ciudad desp useEffect", city);

  return !city.id ? (
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
