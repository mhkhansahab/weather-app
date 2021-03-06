import getData from "./axios/axios-call";
import { useState } from "react";
import './App.css';
import Navbar from "./components/nav";
import Card from "./components/card";
import NightBackground from "./components/night-bg";
import DayBackground from "./components/day-bg";
import MainScreen from "./components/main-screen";
import Swal from 'sweetalert2'

function App() {

  const [cityData, setCityData] = useState({
    city : "",
    data: null,
    regError: "",
  })

  const [showSpinner, setshowSpinner] = useState(false)

  const debounce = (func, wait) => {
    let timeout;
  
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
  
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  };

  const nameHandler=(e)=>{
    const regExp = /^[a-zA-Z ]+$/;

    const data = {...cityData, city : e.target.value};

    if(!regExp.test(e.target.value)){
        data.regError = "*Incorrect Name";
    }else{
        data.regError = "";
    }

    setCityData(data)
  }
  
  const getForecast = async ()=> {
    const wholeState = {...cityData}
    const city = wholeState.city.trim();
    const error = wholeState.regError;

    if(error !== "" || city === ""){
      Swal.fire('Write Something...')
    }else{
        setshowSpinner(true);
        const data = await getData(city);
       if(data !== "error"){
          wholeState.data = data;
          wholeState.city = city;
          wholeState.regError = "";

         setCityData(wholeState);
       }else{
          setshowSpinner(false);
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
          })
       }
    }
  }
  
  const desiredDate = (offset)=>{
    const date = new Date();
    const utc = date.getTime() + (date.getTimezoneOffset() * 60000);
    const desiredDate = new Date(utc + (3600000*offset/3600));
    return desiredDate;
  }

  const isDay = (offset)=>{
    const cityDate = desiredDate(offset);
    const hours = cityDate.getHours();
    if(hours >= 6 && hours <= 18){
      return true;
    }else{
      return false;
    }
  }

  const dateExtracter = (offset) => {
    const cityDate = desiredDate(offset);
    return cityDate.toDateString();
}

  const timeExtracter = (offset) => {
    const cityDate = desiredDate(offset);
    return cityDate.toLocaleTimeString();
}
  const backToHome = ()=>{
    const tempState = {...cityData};
    tempState.data = null;
    tempState.city = "";
    tempState.regError = "";

    setCityData(tempState);
    setshowSpinner(false);
  }

  return (
    <div className="App">
      
    {cityData.data 
      ?
      (
      isDay(cityData.data.timezone) 
      ? 
        <DayBackground>
          <Navbar back={backToHome}></Navbar>
          <Card 
            data={cityData.data} 
            time={timeExtracter(cityData.data.timezone)}
            date={dateExtracter(cityData.data.timezone)}></Card>
        </DayBackground> 
        :
        <NightBackground>
          <Navbar back={backToHome}></Navbar>
          <Card 
            data={cityData.data} 
            time={timeExtracter(cityData.data.timezone)}
            date={dateExtracter(cityData.data.timezone)}></Card>  
        </NightBackground>
      )
        :
        <MainScreen
         nameHandler={debounce((e)=>nameHandler(e),300)} 
         errorMsg={cityData.regError}
         getForecast = {getForecast}
         showSpinner = {showSpinner}>
         </MainScreen>
      }
      
    </div>
  );
}

export default App;
