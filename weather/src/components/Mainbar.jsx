import React from "react";
import "./mainbar.css";

function Mainbar({ info }) {
  return (
    <div>
      <div className="adressdiv">
        <h1>{info.place}</h1>
        <img src="../public/location.webp" alt="" />
      </div>
      <div className="avrgdiv">
        <div>
          <p className="minp">{info.mintemp}°C</p>
          <span>min temp</span>
        </div>
        <div>
          <p className="maxp">{info.maxtemp}°C</p>
          <span>max temp</span>
        </div>
      </div>
      <div className="weatherdiv">
        <div>
          <p>{info.feels}°C</p>
          <span>Feels Like</span>
          <img src="../public/Group.webp" alt="" />
        </div>
        <div>
          <p>{info.humidity}%</p>
          <span>Humidity</span>
          <img src="../public/Vector.webp" alt="" />
        </div>
        <div>
          <p>{info.wind} m/s</p>
          <span>Wind</span>
          <img src="../public/Shape.webp" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Mainbar;
