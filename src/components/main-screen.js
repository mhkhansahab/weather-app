import "./../styles/main-screen.css";

const mainscreen = (props)=>{
    return(
        <div className="main-screen">
            <div className="weather-title">Weather App</div>
            <div className="input-container">
                <input type="text" className="my-input" placeholder="Enter Your City Name" onChange={(e)=>props.nameHandler(e)}></input>
                <div className="error">{props.errorMsg}</div>
            </div>
            <div className="btn-container" onClick={props.getForecast}>
                {
                    props.showSpinner ? 
                    <div className="loader"></div> :
                    <button>Get Forecast</button>
                }
            </div>
        </div>
    );
}

export default mainscreen;