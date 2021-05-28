import "./../styles/main-screen.css";
import React from "react";

const Mainscreen = (props)=>{

    const keyHandler = (e)=>{
        if(e.key === "Enter"){
            props.getForecast();
        }
    }

    return(
        <div className="main-screen">
            <div className="weather-title">Weather App</div>
            <div className="input-container">
                <input type="text" className="my-input" placeholder="Enter City Name.." 
                onChange={(e)=>props.nameHandler(e)}
                onKeyPress={(e)=>keyHandler(e)}
                ></input>
                <div className="error">{props.errorMsg}</div>
            </div>
            <div className="btn-container" onClick={props.getForecast} >
                {
                    props.showSpinner ? 
                    <div className="loader"></div> :
                    <button>Get Forecast</button>
                }
            </div>
        </div>
    );
}

export default Mainscreen;