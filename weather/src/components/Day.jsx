import React, { useState } from "react";
import "./day.css";

const week = ["კვ.", "ორ.", "სამ.", "ოთხ.", "ხუთ.", "პარ.", "შაბ."];

function Day({ days, time, changed }) {
  const da = days.slice(1, 8);
  const day = new Date();
  const week1 = day.getDay();
  function func1(index) {
    const x = index + week1;
    if (x < 7) {
      return week[x];
    } else {
      return week[x - 7];
    }
  }

  return (
    <div>
      <div className="flexbox">
        {da.map((item, index) => (
          <div
            className={`daybox ${
              changed === index ? "border-clicked" : "border"
            }`}
            key={index}
            onClick={() => time(index)}
          >
            <h1>{func1(index)}</h1>
            <h2>{((item.temp - 32) / 1.8).toFixed()}°C </h2>
            <img
              className="pic"
              src={`../../public/weather-icons/${item.icon}.png`}
              alt=""
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Day;
