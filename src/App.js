import { useState } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Alert from "./components/Alert";

import Nav from "./components/Nav";
import Cards from "./components/Cards";
import About from "./components/About";
import Ciudad from "./components/Ciudad";
import axios from "axios";

function App() {
  const [cities, setCities] = useState([]);

  const [ciudadEncontrada, setCiudadEncontrada] = useState(true);

  const apiKey = "70768fa2a74f80d07699f5445c8f3d52";

  function onSearch(ciudad) {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`
      )
      // .then((r) => r.json())
      .then((json) => {
        let recurso = json.data;
        // console.log(recurso);
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
        }
      })
      .catch((e) => {
        setCiudadEncontrada(false);
      });
  }

  const onClose = (id) => {
    setCities((oldCities) => oldCities.filter((c) => c.id !== id));
  };

  const handleAlert = () => {
    setCiudadEncontrada(true);
  };

  const onFilter = (id) => {
    return cities.filter((c) => c.id === parseInt(id))[0];
  };

  return (
    <Router>
      <Nav onSearch={onSearch} />
      <Alert ciudadEncontrada={ciudadEncontrada} handleAlert={handleAlert} />
      <hr />
      <Routes>
        <Route path="/" element={<Cards cities={cities} onClose={onClose} />} />
        <Route path="/about" exact element={<About />} />
        <Route
          path="/ciudad/:id"
          element={<Ciudad onFilter={onFilter} city={cities} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
