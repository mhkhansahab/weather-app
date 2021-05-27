import "./../styles/card.css";
import CountUp from 'react-countup';

const card = (props)=>{
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

export default card;