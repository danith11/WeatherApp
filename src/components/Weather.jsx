import React from "react";
import { CiSearch } from "react-icons/ci";

const Weather = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <div className="flex flex-col items-center bg-gradient-to-r from-sky-500 to-blue-700 rounded-3xl p-16">
        <div className="flex flex-row gap-2 items-center rounded-3xl">
          <input
            type="text"
            placeholder="Search"
            className="border border-neutral-300 rounded-2xl p-2 px-5"
          />
          <CiSearch className="text-white font-extrabold cursor-pointer" />
        </div>
        <div>
          <img src="./clear.png" alt="clearIcon" />
        </div>
        <div className="flex flex-col items-center justify-center text-white font-bold">
          <p className="text-3xl">
            16 <span className="text-lg">C</span>
          </p>
          <p className="text-3xl">London</p>
        </div>
        <div className="flex flex-row justify-between gap-10 items-center justify-center m-5 mt-10">
          <div className="flex flex-row gap-2">
            <img src="humidity.png" alt="HumidityPng" className="h-8" />
            <div className="text-md font-bold text-white">
              <p>91 %</p>
              <p>Humidity</p>
            </div>
          </div>
          <div className="flex flex-row gap-2">
            <img src="wind.png" alt="HumidityPng" className="h-8" />
            <div className="text-md font-bold text-white">
              <p>3.6 km/h</p>
              <p>Wind Speed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
