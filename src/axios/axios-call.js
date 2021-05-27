import axios from "axios";

const getData = async (name)=>{
    const options = {
        method: 'GET',
        url: 'https://community-open-weather-map.p.rapidapi.com/weather',
        params: {
          q: name,
          lat: '0',
          lon: '0',
          id: '2172797',
          lang: 'null',
          units: "metric",
          mode: 'xml, html'
        },
        headers: {
          'x-rapidapi-key': '2afdc9fa8cmsheaa6d800875c59ap1ef7c6jsn8f0411164b7f',
          'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com'
        }
      };
      
      try{
        const response = await axios.request(options)
        return response.data;
      }catch{
        return "error";
      }
      
}

export default getData;

