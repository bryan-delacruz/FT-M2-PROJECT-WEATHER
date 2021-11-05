import React, { useState, useEffect } from "react";
import { useParams } from "react-router";

export default function Ciudad({ cities }) {
  const [city, setCity] = useState({});
  const { id } = useParams();

  useEffect(() => {
    // console.log(cities);
    setCity(cities.filter((c) => c.id === parseInt(id))[0]);
  }, [id, cities]);
  //   console.log(cities);
  console.log(city);
  return (
    <div>
      <div className="container">
        <h2>{city.name}</h2>
        <div className="info">
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
