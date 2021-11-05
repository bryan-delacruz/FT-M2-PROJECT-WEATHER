import { useState } from "react";

import Nav from "./components/Nav";
import Cards from "./components/Cards";

function App() {
  const [cities, setCities] = useState([]);

  const [ciudadEncontrada, setCiudadEncontrada] = useState(true);

  const apiKey = "70768fa2a74f80d07699f5445c8f3d52";

  function onSearch(ciudad) {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`
    )
      .then((r) => r.json())
      .then((recurso) => {
        if (recurso.main !== undefined) {
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon,
          };
          setCities((oldCities) => [...oldCities, ciudad]);
          setCiudadEncontrada(true);
        } else {
          setCiudadEncontrada(false);
          console.log(ciudadEncontrada);
          // alert("Ciudad no encontrada");
        }
      });
  }

  function onClose(id) {
    setCities((oldCities) => oldCities.filter((c) => c.id !== id));
  }

  const alert = () => {
    return !ciudadEncontrada ? (
      <div class="alert alert-info alert-dismissible fade show mt-3">
        <strong>La ciudad no fue encontrada</strong>
        <button type="button" class="close" onClick={() => handleAlert()}>
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    ) : null;
  };

  const handleAlert = () => {
    setCiudadEncontrada(true);
  };

  return (
    <div className="App">
      <Nav onSearch={onSearch} />
      {alert()}
      <hr />
      {}
      <Cards cities={cities} onClose={onClose} />
    </div>
  );
}

export default App;
