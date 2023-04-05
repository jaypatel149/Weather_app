import React, { useState } from "react";
import axios from "axios";
import "../index.css";

const Weather = () => {
  const [data, setData] = useState({
    celcius: 10,
    name: "delhi",
    humidity: 10,
    speed: 2,
  });

  const [name, setName] = useState("");



  const HandlerClick = () => {
    if (name !== "") {
      const response =
        `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=3454cd95371eba9e6cae6a46092ea110&units=metric`;
      axios
        .get(response)
        .then((res) => {
          console.log(res.data);
          setData({
            ...data,
            celcius: res.data.main.temp,
            name: res.data.name,
            humidity: res.data.main.humidity,
            speed: res.data.wind.speed,
            pressure: res.data.main.pressure,
            sunrise: res.data.sys.sunrise,
          });
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-6">
          <div className="card p-5 bg-dark text-white">
            <h3 className="card-header text-center py-3">Weather</h3>
            <img
              src="./img/cloud.png"
              className="mx-auto d-block"
              alt="cloud"
            />
            <div className="card-body">
              <h5 className="card-title text-center py-4">
                Find Weather of your city
              </h5>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="City..."
                  onChange={(e) => setName(e.target.value)}
                />
                <button
                  className="btn btn-success"
                  type="button"
                  onClick={HandlerClick}
                >
                  search
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-6">
          <div className="card p-5 bg-dark text-white">
            <h3 className="card-header text-center py-3">Weather</h3>
            <div className="card-body">
              <div className="d-flex justify-content-center">
                <span style={{ fontSize: "2rem" }}>{data.celcius}°C</span>
                <span
                  style={{
                    fontSize: "1.5rem",
                    display: "flex",
                    alignItems: "center",
                    marginLeft: "2rem",
                  }}
                >
                  Cloudy
                </span>
              </div>
              <h2 className="card-title text-center py-4">{data.name}</h2>
              <h5 className="">Weather Info</h5>
              <div className="weather_info py-5">
                <div className="d-flex justify-content-between px-5">
                  <div className="sunrise">
                    <div className="d-flex align-items-center">
                      <div className="flex-shrink-0">
                        <img src="./img/sunrise.png" alt="..." />
                      </div>
                      <div className="flex-grow-1 ms-4">
                        <span>{Math.round(data.sunrise)}</span>
                        <p className="m-0 mb-0">Sunrise</p>
                      </div>
                    </div>
                  </div>
                  <div className="sunrise">
                    <div className="d-flex align-items-center">
                      <div className="flex-shrink-0">
                        <img src="./img/humidity.png" alt="..." />
                      </div>
                      <div className="flex-grow-1 ms-4">
                        <span>{Math.round(data.humidity)} %</span>
                        <p className="m-0 mb-0">humidity</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-between px-5 py-5">
                  <div className="sunrise">
                    <div className="d-flex align-items-center">
                      <div className="flex-shrink-0">
                        <img src="./img/wind.svg" alt="..." />
                      </div>
                      <div className="flex-grow-1 ms-4">
                        <span>{Math.round(data.speed)} km/h</span>
                        <p className="m-0 mb-0">wind</p>
                      </div>
                    </div>
                  </div>
                  <div className="sunrise">
                    <div className="d-flex align-items-center">
                      <div className="flex-shrink-0">
                        <img src="./img/pressure.png" alt="..." />
                      </div>
                      <div className="flex-grow-1 ms-4">
                        <span>{Math.round(data.pressure)}</span>
                        <p className="m-0 mb-0">pressure</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;




