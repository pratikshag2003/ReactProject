import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import  "./InfoBox.css";


export default function InfoBox({info}){
    const INIT_URL="https://images.unsplash.com/photo-1545134969-8debd725b007?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    
    let COlD_URL ="https://images.unsplash.com/photo-1579847641267-5445b760b991?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    let HOT_URL="https://media.istockphoto.com/id/518085884/photo/bright-dramatic-sunset.jpg?s=2048x2048&w=is&k=20&c=stOO1Au_Bg0HG-sgdv77IGBaWJorXhuVEqQ4AJz7ido=";

    let RAIN_URL="https://media.istockphoto.com/id/1257951336/photo/transparent-umbrella-under-rain-against-water-drops-splash-background-rainy-weather-concept.jpg?s=2048x2048&w=is&k=20&c=oCeUC-IkL0PeNBE1KwDUHBWw692n3T4T6I-usYtX_Qc=";
    return  (
 <div className="InfoBox">
      <div clasName="cardConatiner"   >     
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia 
      sx={{ height: 140 }} 
      image={
        info.humidity >80
        ? RAIN_URL
        :info.temp >15
        ?HOT_URL
        :COlD_URL
      }
      title="green iguana"
      ></CardMedia>
        
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.City}
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
            <p>Temperature={info.temp}&deg;C</p>
           <p>FeelsLike={info.feelsLike}</p> 
            <p>tempMin={info.tempMin}</p>
            <p>tempMax={info.tempMax}</p>
            <p>Humidity={info.humidity}</p>
            <p>
              The Wheather can be described as {info.weather} and feels like  {info.feelsLike}&deg; C
              </p>
            </Typography>
        </CardContent>
        </Card>
            </div>
            </div>
        )
      }