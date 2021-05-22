import "./../styles/main-screen.css";

const mainscreen = (props)=>{
    return(
        <div className="main-screen">
            <div className="weather-title">Weather App</div>
            <div>
                <input type="text" className="my-input" placeholder="Enter Your City Name" onChange={(e)=>props.nameHandler(e)}></input>
                <div className="error">{props.errorMsg}</div>
                </div>
        </div>
    );
}

export default mainscreen;