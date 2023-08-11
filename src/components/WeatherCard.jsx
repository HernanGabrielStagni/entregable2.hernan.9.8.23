import React, { useState } from "react";

const WeatherCard = ({ weather, temperature }) => {
  const [isCelsius, setIsCelsius] = useState(true);
  const handleChangeTemperature = () => {
    setIsCelsius(!isCelsius);
  };
  const ulr1 = "/icons/animated/01d.svg";

  return (
    <div className="container">
      {/*  ********************************************************************* TITULO WEATHER */}
       
       <div className="container__weather">
         <h1><span>W</span>EATHE<span>R</span> </h1>
                <h2> App </h2>
      </div>
       
        
      
      {/*  ********************************************************************* TITULO CIUDAD */}
      <h2 className="title__city">{weather?.name} | {weather?.sys.country}</h2>
    
      {/*  ********************************************************************* CONTENEDOR BODY (SECUNDARIO) */}
      <div className="container__body">

         {/*  ********************************************************************* CONTENEDOR BODY SUPERIOR */}
        <div className="container__body-top">
          <h3 className="container__body-top-description">{weather?.weather[0].description}</h3>
         
          <div className="container__body-top-temper_icon">
            
            <div className="temp__c_f">
               {isCelsius
                 ? <h2><span>{temperature?.celsius} °C</span></h2>
                 : <h2><span>{temperature?.fahrenheit} °F</span></h2>
                }
               
                    </div>
     
     {/*  *********************   ICONO CLIMA DESCRIPTION (CLEAR SKY) */}
                 <div className="icon__description">
                   <img src={`https://openweathermap.org/img/wn/${weather?.weather[0].icon}@4x.png`} alt=""/>
             </div> 
          
          </div>            
         
        </div>    
       
       
        {/*  **************************************************** CONTENEDOR BODY INFERIOR (informacion clima) */}
        <div className="container__info-weather">
          

          <article className="info__weather">
             <div className="icon_data">
                <img src="/icons/mdi_weather-windy.svg" alt="" />
                <span>{weather?.wind.speed}</span>
             </div>
                
             <h3> m/s </h3> 
             <h3>Wind speed</h3>
          </article>   

          <article className="info__weather">
             <div className="icon_data">
             <img src="/icons/uil_raindrops-alt.svg" alt="" />
             <span>{weather?.main.humidity}</span>
             </div>
                
             <h3>  % </h3> 
             <h3>Humidity</h3>
          </article>   


          <article className="info__weather">
             <div className="icon_data">
             <img src="/icons/tabler_arrow-wave-right-down.svg" alt=""/>
             <span>{weather?.main.pressure}</span>
             </div>
                
             <h3>hPa</h3> 
             <h3>Pressure</h3>
          </article>   

        </div> 

       </div>
  
   {/*  *********************   BOTON DE CAMBIO  (C a F) */}
       <button onClick={handleChangeTemperature}>Change to {isCelsius ? "°F" : "°C"}</button>
       
    
    </div>
     );
};

export default WeatherCard;


{/* <div className="container">
              * ************   TITULO DE LA LOCALIDAD ************* 
              <h1><span>W</span>EATHE<span>R</span></h1>
              <h4> App </h4>

           * ************   TITULO DE LA LOCALIDAD *************  *
                <h2 className="title__place">{weather?.name} | {weather?.sys.country}</h2>
            
              <article className="container__body-top">
                <section className="card__body">
                  <header className="container__top"> 
                       {<h3>{weather?.weather[0].description}</h3>}
                    <div className="container__temper-weather">               
                      <span className="temp__c-f">
                            {isCelsius
                           ? <h2><span>{temperature?.celsius} °C</span></h2>
                            : <h2><span>{temperature?.fahrenheit} °F</span></h2>
                            }
                            
                           <button onClick={handleChangeTemperature}>Change to {isCelsius ? "°F" : "°C"}</button>
                     </span>
                     
                       <div className="icon__description">
                         <img src={`https://openweathermap.org/img/wn/${weather?.weather[0].icon}@4x.png`} alt=""/>
                       </div>
                    </div>
                  </header>

                  <article className="card__body-botton">
                    <ul>
                      <li>
                        <img src="/icons/mdi_weather-windy.svg" alt="" />
                        Wind speed: <span>{weather?.wind.speed} m/s </span>
                      </li>
                      
                      <li>
                        <img src="/icons/uil_raindrops-alt.svg" alt="" />
                        Humidity:<span>{weather?.main.humidity} %</span>
                      </li>
                      <li>
                        <img src="/icons/tabler_arrow-wave-right-down.svg" alt=""/>
                        Pressure: <span>{weather?.main.pressure} hPa </span>
                      </li>
                      <li>
                        <span>------------</span>
                      </li>

                      <li>
                        Visibility: <span>{weather?.visibility} mts.</span>
                      </li>
                      <li>
                        Visibility: <span>{weather?.visibility} mts.</span>
                      </li>
                    </ul>
                  </article>
                </section>
              </article>
    </div>
                          */}