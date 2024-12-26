import React, { useEffect, useRef, useState } from "react";

const Weather = () => {
  const [weatherData, setWeatherData] = useState(false);
  const inputRef = useRef();
  const allIcons = {
    "01d": "./clear.png",
    "01n": "./clear.png",
    "02d": "./cloud.png",
    "02n": "./cloud.png",
    "03d": "./cloud.png",
    "03n": "./cloud.png",
    "04d": "./drizzle.png",
    "04n": "./drizzle.png",
    "09d": "./rain.png",
    "09n": "./rain.png",
    "10d": "./rain.png",
    "10n": "./rain.png",
    "13d": "./snow.png",
    "13n": "./snow.png",
  };
  const search = async (city) => {
    if(city === ""){
      alert("Enter City Name");
      return;
    }
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${
        import.meta.env.VITE_APP_ID
      }`;

      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      const icon = allIcons[data.weather[0].icon] || clear_icon;
      setWeatherData({
        humidity: data.main.humidity,
        wind: data.wind.speed,
        temprature: Math.floor(data.main.temp),
        location: data.name,
        icon: icon,
      });
    } catch (error) {
      setWeatherData(false);
      console.log("Error is fetching weather data");
    }
  };

  useEffect(() => {
    search("Sydney");
  }, []);

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <div className="flex flex-col items-center bg-gradient-to-r from-sky-500 to-blue-700 rounded-3xl p-16">
        <div className="flex flex-row gap-2 items-center rounded-3xl">
          <input
            type="text"
            placeholder="Search"
            ref={inputRef}
            className="border border-neutral-300 rounded-2xl p-2 px-5"
          />
          <img
            src="./search.png"
            alt="searchIcon"
            onClick={() => search(inputRef.current.value)}
            className="cursor-pointer bg-white p-2 rounded-xl"
          />
        </div>
        <div>
          <img src={weatherData.icon} alt="clearIcon" />
        </div>
        <div className="flex flex-col items-center justify-center text-white font-bold">
          <p className="text-3xl">
            {weatherData.temprature} <span className="text-lg">C</span>
          </p>
          <p className="text-3xl">{weatherData.location}</p>
        </div>
        <div className="flex flex-row justify-between gap-10 items-center justify-center m-5 mt-10">
          <div className="flex flex-row gap-2">
            <img src="humidity.png" alt="HumidityPng" className="h-8" />
            <div className="text-md font-bold text-white">
              <p>{weatherData.humidity} %</p>
              <p>Humidity</p>
            </div>
          </div>
          <div className="flex flex-row gap-2">
            <img src="wind.png" alt="HumidityPng" className="h-8" />
            <div className="text-md font-bold text-white">
              <p>{weatherData.wind} km/h</p>
              <p>Wind Speed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
