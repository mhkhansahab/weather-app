import "./../styles/card.css";
import CountUp from "react-countup";
import React, { useState, useEffect } from "react";

const objConverter = (time) => {
  const propsData = time;
  const meridium = propsData.split(" ")[1];
  const splittedTime = propsData.split(" ")[0].split(":");
  var intTime = splittedTime.map((element) => {
    return parseInt(element);
  });

  const tempTime = {
    hour: intTime[0],
    min: intTime[1],
    sec: intTime[2],
    meridium: meridium,
  };

  return tempTime;
};

const clock = (obj) => {
  const temp = { ...obj };

  temp.sec += 1;
  if (temp.sec >= 60) {
    temp.sec = 0;
    temp.min += 1;
    if (temp.min >= 60) {
      temp.min = 0;
      temp.hour += 1;
    }
  }
  return temp;
};

const Card = (props) => {
  const [time, setTime] = useState({
    hour: 0,
    min: 0,
    sec: 0,
    meridium: "AM",
  });

  useEffect(() => {
    const converted = objConverter(props.time);
    const obj1 = clock(converted);
    setTime(obj1);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      const obj2 = clock(time);
      setTime(obj2);
    }, 1000);
    
  }, [time]);

  return (
    <div className="card">
      <div className="card-content">
        <div className="title">{props.data.name}</div>
        <div>
          {time.hour.toString() +
            " : " +
            time.min.toString() +
            " : " +
            time.sec.toString() +
            " " +
            time.meridium}
        </div>
        <div>{props.date}</div>
      </div>
      <div className="temparature">
        <CountUp
          className="count"
          start={0}
          end={props.data.main.temp}
          duration={2}
          delay={0.5}
        />{" "}
        &deg;C
      </div>
      <div style={{ textAlign: "center" }}>{props.data.weather[0].main}</div>
      <div className="bottom-tiles">
        <div className="tile">
          Feels Like : {props.data.main.feels_like}&deg; C
        </div>
        <div className="tile">Humidity : {props.data.main.humidity}%</div>
        <div className="tile">Wind : {props.data.wind.speed} m/s</div>
      </div>
    </div>
  );
};

export default Card;
