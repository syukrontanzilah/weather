import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {
  IoMdSunny,
  IoMdRainy,
  IoMdCloudy,
  IoMdSnow,
  IoMdThunderstorm,
  IoMdSearch,
} from 'react-icons/io';
import {
  BsCloudHaze2Fill,
  BsCloudDrizzleFill,
  BsEye,
  BsWater,
  BsThermometer,
  BsWind,
} from 'react-icons/bs';
import {TbTemperatureCelsius} from 'react-icons/tb';
import {ImSpinner8} from 'react-icons/im';

// api key weather
const APIKey = 'befbe1072b7242f25bc785584e508a60'


const App = () => {
  const [data, setData] = useState(null);
  const [location, setLocation] = useState('Jakarta');
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${APIKey}`;

  const getData = async () => {
    try{
      await axios.get(url)
      .then(res => {
        const data = res.data;
        setData(data);
        // console.log('response nya==>', data);        
      })

    }catch(err){
      console.log(err)
    }
  }

  useEffect(()=>{
    getData();
  },[location]);

  
  if(!data){
    return(
      <div>
        <div>
          <ImSpinner8 className='text-5xl animate-spin'/>
        </div>
      </div>
    )
  }

  let icon;
  const icoApi = data.weather[0].main;
  switch(icoApi){
    case 'Clouds':
      icon = <IoMdCloudy size={50}/>;
      break;
    case 'Haze':
      icon = <BsCloudHaze2Fill size={50} />;
      break;
    case 'Rain':
      icon = <IoMdRainy size={50} />;
      break;
    case 'Clear':
      icon = <IoMdSunny size={50} />;
      break;
    case 'Drizzle':
      icon = <BsCloudDrizzleFill size={50} />;
      break;
    case 'Snow':
      icon = <IoMdSnow size={50} />;
      break;   
    case 'Thunderstorm':
      icon = <IoMdThunderstorm size={50} />;
      break;
  }

  return (
      <div className='w-full h-screen bg-gradientBg bg-no-repeat bg-cover bg-center flex flex-col items-center justify-center'>
        {/* form */}
        <form>

        </form>
        {/* card */}
        <div>
          {/* card top */}
          <div>card top</div>
          {/* card body */}
          <div>card body</div>
          {/* card bottom */}
          <div>card bottom</div>
        </div>
      </div>
  )
};

export default App;
