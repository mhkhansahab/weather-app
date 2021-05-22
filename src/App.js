import getData from "./axios/axios-call";
import { useEffect , useState } from "react";
import './App.css';
import Navbar from "./components/nav";
import Card from "./components/card";
import NightBackground from "./components/night-bg";
import DayBackground from "./components/day-bg";
import MainScreen from "./components/main-screen";

function App() {

  const [cityData, setCityData] = useState({
    city : null,
    data: null,
    regError: "",
  })

  useEffect(() => {
    console.log(cityData);
  }, [cityData])
  // useEffect(() => {
  //   getData("karachi");
  // }, [])

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
    const regExp = /^[a-zA-Z]+$/;

    const data = {...cityData, city : e.target.value};

    if(!regExp.test(e.target.value)){
        data.regError = "*Incorrect Name";
    }else{
        data.regError = "";
    }

    setCityData(data)
  }
  
  return (
    <div className="App">
      {console.log("render....")}
      {/* <MainScreen nameHandler={debounce((e)=>nameHandler(e),500)} errorMsg={cityData.regError}></MainScreen> */}
      {/* <NightBackground>
        <Navbar></Navbar>
        <Card></Card>
      </NightBackground>
      */}
     <DayBackground>
        <Navbar></Navbar>
        <Card></Card>
     </DayBackground>
      
    </div>
  );
}

export default App;
