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

function Sidebar({ weather }) {
  const day = new Date();
  const week1 = day.getDay();
  const Celsius = (weather.temp - 32) / 1.8;

  return (
    <div className="side">
      <h1>{week[week1]}</h1>
      <p>{weather.date}</p>
      <img src={weather.icon} alt="" />
      <h2>{Celsius.toFixed()}°C</h2>
      <h3>{weather.desc}</h3>
    </div>
  );
}

export default Sidebar;
