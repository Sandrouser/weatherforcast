import React, { useEffect, useRef, useState } from "react";
import Sidebar from "./components/Sidebar.jsx";
import Mainbar from "./components/Mainbar.jsx";
import Input from "./components/Input.jsx";
import Day from "./components/Day.jsx";

function App() {
  const [days, setDays] = useState([]);
  const [weather, setWeather] = useState({});
  const [change, setChange] = useState(0);
  console.log(change);
  useEffect(() => {
    func1();
  }, [change]);

  async function func1(a = "tbilisi") {
    const res = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${a}?key=3DGCS8AQ24RQ4PYWDGJ57F4N4`
    );
    const data = await res.json();
    console.log(data);
    setDays(data.days);
    setWeather({
      date: data.days[change].datetime,
      icon: data.days[change].icon,
      temp: data.days[change].temp,
      desc: data.days[change].conditions,
      maxtemp: ((data.days[change].tempmax - 32) / 1.8).toFixed(),
      mintemp: ((data.days[change].tempmin - 32) / 1.8).toFixed(),
      feels: ((data.days[change].feelslike - 32) / 1.8).toFixed(),
      humidity: data.days[change].humidity,
      wind: data.days[change].windspeed,
      place: data.resolvedAddress,
    });
  }

  return (
    <div className="div1">
      <div className="div2">
        <div className="div3">
          <Sidebar change={change} weather={weather} />
        </div>
        <div className="mainbar">
          <Input loc={func1} />
          <Mainbar info={weather} />
        </div>
      </div>
      <div className="divday">
        <Day changed={change} time={setChange} days={days} />
      </div>
    </div>
  );
}

export default App;
