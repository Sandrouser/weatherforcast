import React from "react";
const week = [
  "კვირა",
  "ორშაბათი",
  "სამშაბათი",
  "ოთხშაბათი",
  "ხუთშაბათი",
  "პარასკევი",
  "შაბათი",
];

function Sidebar({ weather, change }) {
  const Celsius = (weather.temp - 32) / 1.8;
  const day1 = new Date();
  const week2 = day1.getDay();
  function func1(index) {
    const x = index + week2;
    if (x < 7) {
      return week[x];
    } else {
      return week[x - 7];
    }
  }

  return (
    <div className="side">
      <h1>{func1(change)}</h1>
      <p>{weather.date}</p>
      <img src={`../../public/weather-icons/${weather.icon}.png`} alt="" />
      <h2>{Celsius.toFixed()}°C</h2>
      <h3>{weather.desc}</h3>
    </div>
  );
}

export default Sidebar;
