import "./../styles/card.css";

const card = (props)=>{
    return(
        <div className = "card">
            <div className="card-content">
                <div className="title">{props.data.name}</div>
                <div>{props.time}</div>
                <div>{props.date}</div>
            </div>
            <div className="temparature">{props.data.main.temp}&deg; C</div>
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