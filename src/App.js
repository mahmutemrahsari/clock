//import logo from "./logo.svg";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const d0 = require("./digits/0.png");
  const d1 = require("./digits/1.png");
  const d2 = require("./digits/2.png");
  const d3 = require("./digits/3.png");
  const d4 = require("./digits/4.png");
  const d5 = require("./digits/5.png");
  const d6 = require("./digits/6.png");
  const d7 = require("./digits/7.png");
  const d8 = require("./digits/8.png");
  const d9 = require("./digits/9.png");
  const dc = require("./digits/c.png");

  const images = new Array(d0, d1, d2, d3, d4, d5, d6, d7, d8, d9);
  const [hour1, setHour1] = useState(images[0]);
  const [hour2, setHour2] = useState(images[0]);
  const [minute1, setMinute1] = useState(images[0]);
  const [minute2, setMinute2] = useState(images[0]);
  const [second1, setSecond1] = useState(images[0]);
  const [second2, setSecond2] = useState(images[0]);

  const interval = () => {
    setInterval(function () {
      let date = new Date();
      let hour = String(date.getHours());
      let minute = String(date.getMinutes());
      let second = String(date.getSeconds());

      if (hour < 10) {
        setHour1(images[0]);
        setHour2(images[hour.charAt(0)]);
      } else {
        setHour1(images[hour.charAt(0)]);
        setHour2(images[hour.charAt(1)]);
      }

      if (minute < 10) {
        setMinute1(images[0]);
        setMinute2(images[minute.charAt(0)]);
      } else {
        setMinute1(images[minute.charAt(0)]);
        setMinute2(images[minute.charAt(1)]);
      }

      if (second < 10) {
        setSecond1(images[0]);
        setSecond2(images[second.charAt(0)]);
      } else {
        setSecond1(images[second.charAt(0)]);
        setSecond2(images[second.charAt(1)]);
      }
    }, 1000);
  };

  useEffect(() => {
    interval();
  }, [interval]);

  return (
    <div className="App">
      <img id="hour1" className="images" alt="d0" src={hour1} />
      <img id="hour2" className="images" alt="d0" src={hour2} />
      <img id="colunm1" className="images" alt="dc" src={dc} />
      <img id="minute1" className="images" alt="d0" src={minute1} />
      <img id="minute2" className="images" alt="d0" src={minute2} />
      <img id="colunm2" className="images" alt="dc" src={dc} />
      <img id="second1" className="images" alt="d0" src={second1} />
      <img id="second2" className="images" alt="d0" src={second2} />
    </div>
  );
}

export default App;
