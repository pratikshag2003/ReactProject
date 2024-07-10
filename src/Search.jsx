import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./Search.css";
import {useState} from "react";


export default  function SearchBox({updateInfo}){
   let [city,setCity] =useState("");
   let  [error, setError] = useState(false);
   let API_URL="https://api.openweathermap.org/data/2.5/weather";
   let API_KEY="ce1fb6ff65484c34b5372213bb920b7a";

  
   
     let getWhetherInfo=async()=>{
       try{
      let response= await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
      );
       let jsonResponse =await response.json();
        console.log(jsonResponse);
        let result={
         City:city,
         temp : jsonResponse.main.temp,
         tempMin: jsonResponse.main.temp_min,
         tempMax:jsonResponse.main.temp_max,
         humidity:jsonResponse.main.humidity,
         feelsLike:jsonResponse.main.feels_like,
         weather:jsonResponse.weather[0].description,


        };
        console.log(result);
        return result;
      }
      catch(err){
         throw err;
      }
    };

    let handelChange =(event)=>{
      setCity(event.target.value);
   };

   let handelSubmit=async (event)=>{
      event.preventDefault();
      try{
      console.log(city);
      setCity("");
      let newInfo = await getWhetherInfo();
      updateInfo(newInfo);
      }catch(err){
        setError(true);
      }
   };
  return (

<div className="searchBox">
  <form onSubmit={handelSubmit}>
  <TextField id="city"
   label="City Name" 
   variant="outlined" 
  required 
  value={city}
  onChange={handelChange} 
  />
  <br></br>
  <br></br>
  <Button 
  variant="contained" 
  type="submit" 
   > Search
   </Button>
  </form>
  {error && <p>No such place exit</p>}
</div>

  );

 }
    

    
