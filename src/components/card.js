import "./../styles/card.css";
import CountUp from 'react-countup';
import React from "react";

// const clock = (props,time)=>{
//     const propsData = props.time;
//     if(propsData){
//     const tempTime = {...time};
//     const meridium = propsData.split(" ")[1];
//     const splittedTime = (propsData.split(" ")[0]).split(":");
//     var intTime = splittedTime.map((element)=>{
//         return parseInt(element);
//     })

//     intTime[2] = intTime[2]++;
//     if(intTime[2] >= 60){
//         intTime[1] = intTime[1]++;
//         if(intTime[1] >= 60){
//             intTime[0] = intTime[0]++;
//         }
//     }
    
//     tempTime.hour = intTime[0];
//     tempTime.sec = intTime[1];
//     tempTime.min = intTime[2];
//     tempTime.meridium = meridium;

//     return tempTime;
//     }
    
// }

const Card = (props)=>{

    // const [time, setTime] = useState({
    //         hour : 0,
    //         min : 0,
    //         sec: 0,
    //         meridium : "AM"
    // })

    // const obj = clock(props, time);
    // setTime(obj);

    // {
    //     time.hour.toString() +" : "+ 
    //     time.min.toString() + " : " + 
    //     time.sec.toString() +" "+
    //     time.meridium
    // }


    return(
        <div className = "card">
            <div className="card-content">
                <div className="title">{props.data.name}</div>
                <div>{props.time}</div>
                <div>{props.date}</div>
            </div>
            <div className="temparature"><CountUp className="count" start={0} end={props.data.main.temp} duration={2} delay={0.5}/> &deg;C</div>
            <div style={{"textAlign": "center"}}>{props.data.weather[0].main}</div>
            <div className="bottom-tiles">
                <div className="tile">Feels Like : {props.data.main.feels_like}&deg; C</div>
                <div className="tile">Humidity : {props.data.main.humidity}%</div>
                <div className="tile">Wind : {props.data.wind.speed} m/s</div>
            </div>
        </div>
    );
}

export default React.memo(Card);