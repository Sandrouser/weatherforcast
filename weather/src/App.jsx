import React, { useEffect, useRef, useState } from "react";
import Sidebar from "./components/Sidebar.jsx";
import Mainbar from "./components/Mainbar.jsx";
import Input from "./components/Input.jsx";

function App() {
  const [weather, setWeather] = useState({});

  useEffect(() => {
    func1();
  }, []);

  async function func1(a = "tbilisi") {
    const res = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${a}?key=3DGCS8AQ24RQ4PYWDGJ57F4N4`
    );
    const data = await res.json();
    console.log(data);
    setWeather({
      Day: "Thursday",
      date: data.days[0].datetime,
      icon: "../../public/sunny.webp",
      temp: data.days[0].temp,
      desc: data.days[0].conditions,
      maxtemp: ((data.days[0].tempmax - 32) / 1.8).toFixed(),
      mintemp: ((data.days[0].tempmin - 32) / 1.8).toFixed(),
      feels: ((data.days[0].feelslike - 32) / 1.8).toFixed(),
      humidity: data.days[0].humidity,
      wind: data.days[0].windspeed,
      place: data.resolvedAddress,
    });
  }

  return (
    <div className="div1">
      <div className="div2">
        <div className="div3">
          <Sidebar weather={weather} />
        </div>
        <div className="mainbar">
          <Input loc={func1} />
          <Mainbar info={weather} />
        </div>
      </div>
    </div>
  );
}

export default App;
