import "./../styles/card.css";

const card = ()=>{
    return(
        <div className = "card">
            <div className="card-content">
                <div className="title">Islamabad</div>
                <div>Thursday 02:00 pm</div>
                <div>Sunny</div>
            </div>
            <div className="bottom-tiles">
                <div className="tile">Precipitation : 1%</div>
                <div className="tile">Humidity : 55%</div>
                <div className="tile">Wind : 26 km/h</div>
            </div>
        </div>
    );
}

export default card;