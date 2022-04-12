import React, { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import BasicPlot from "./plot";
const Api_Key = "c717ab506269416bab9231151220103";

function App() {
  const [hourTemp, setHourTemp] = useState([]);
  const [city, setCity] = useState("Warsaw");

  const test = (e) => {
    console.log(e);
  };
  useEffect(() => {
    fetch(
      `
      http://api.weatherapi.com/v1/forecast.json?key=${Api_Key}&q=${city}&hours=24&aqi=no&alerts=no
      `
    )
      .then((jsonResult) => jsonResult.json())
      .then((hourResult) => hourResult.forecast.forecastday[0].hour)
      .then((tempResult) => setHourTemp(tempResult));
  }, [city]);

  return (
    <div className="App">
      <h1>Weather forecast application</h1>
      <div className="selectBox">
        <label>Select Your city</label>
        <select value={city} onChange={(e) => setCity(e.target.value)}>
          <option>Sydney</option>
          <option>Warsaw</option>
          <option>Hong Kong</option>
          <option>London</option>
          <option>Tokyo</option>
        </select>
      </div>
      <BasicPlot tempResult={hourTemp} />
    </div>
  );
}

export default App;
