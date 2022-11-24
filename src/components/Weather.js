import React, { useEffect, useState } from 'react'
import './style/style.css'
import axios from 'axios';  

export default function Weather() {
  const[city,setcity]= useState("")
  const[search,setSearch]=useState("")
  const[temp_min,settemp_min]=useState("")
  const[temp_max,settemp_max]=useState("")

  useEffect(()=>
{ 
  axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=58c73ce9e1821258cd6b4ea5fab3de43`).then((response)=>{
// console.log(response)
setcity(response.data.name)

console.log(response.data.main.temp_min -273.15)
settemp_min(Math.round(response.data.main.temp_min -273.15))
settemp_max(Math.round(response.data.main.temp_max -273.15))


  })
})

  function handleChange(event)
  {
  setSearch(event.target.value)

  }

  return (
    <div className='box' >
        <div className='inputData'>
            <input 
            type="search"
            className='inputFeild'
            onChange={handleChange}
             />
        
        </div>

        <div className='info'>
        
           <h2 className='location'> 
          
           <i className="fa fa-street-view"></i> 
           
           {city}
           </h2>
           <h1 className='temp'>

           </h1>
           <h3 className='tempmin_max'>
            Min:{temp_min} | Max:{temp_max}
           </h3>
        </div>
        <div className='wave-one'></div>
       <div className='wave-two'></div>
       <div className='wave-three'></div>
       </div>
    
       
       
  )
}
