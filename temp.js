import React ,{useEffect, useState}from 'react'
import Weathercard from './weathercard'
import "./style.css"
const Temp = () => {
  const[searchValue,setSearchValue]=useState("Pune")
  const[tempInfo,setTempInfo]=useState({})
  const getWeatherInfo=async()=>{
       try {
       // let url=`https://api.openweathermap.org/data/2.5/weather?lat=18.5204&lon=73.8567&units=metric&appid=655a35ca40b4920c5a2b2c7dacfa111d`;
       let url=`https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=655a35ca40b4920c5a2b2c7dacfa111d`
       
        let res= await fetch(url)
          let data=await res.json()
        // console.log(data)
         const{temp,humidity,pressure}=data .main
         const{main:weathermood}=data.weather[0]
         const{name}=data;
         const{speed}=data.wind
       const{country,sunset}=data.sys
        const myNewWeatherInfo={
        temp,
        humidity,
        pressure,
        weathermood,
        name,
        speed,
        country,
        sunset
        }
        setTempInfo(myNewWeatherInfo)
        //console.log(temp)

       } catch (error) {
        console.log(error)
       }
  }


  useEffect(()=>{
    getWeatherInfo()
},[])
  return (
    <>
      <div className="wrap">
        <div className="search">
       <input 
       type="search" 
       placeholder="search..."
       autoFocus
       id="search"
       className="searchTerm"
       value={searchValue }
       onChange={(e)=>setSearchValue(e.target.value)}/>
       <button className="searchButton" type="button" onClick={getWeatherInfo}> 
        Search
       </button>
        </div>
  </div> 
           {/* <div className="wrap">
        <div className="search">
          <input
            type="search"
            placeholder="search..."
            autoFocus
            id="search"
            className="searchTerm"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />

          <button
            className="searchButton"
            type="button"
            onClick={getWeatherInfo}>
            Search
          </button>
        </div>
      </div> */}
        {/* our temp card */}
       <Weathercard {...tempInfo}/> 
       

    </>
  )
}

export default Temp
