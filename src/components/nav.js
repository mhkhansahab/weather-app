import "./../styles/nav.css";


const navbar = (props)=>{
    return(
        <div className="navbar">
            <span className="back-icon" onClick={props.back}><i className="fas fa-arrow-left"></i></span>
            <span>Weather App</span>
        </div>
    );
}


export default navbar;