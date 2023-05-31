import React, { useEffect, useState } from 'react'
import './App.css';
import Search from './Components/Search';
import Modal from './Components/Modal';
import Filtering from './Components/Filtering';

function App() {
  let[rockets,setRockets]= useState([])
  let[height,setHeight]=useState(0)
  let[engine,setEngine]=useState("")
  let[legs,setLegs]=useState(0)

  let handleheight=(e)=>{
    setHeight(e.target.value)
  }
  let handleengine=(e)=>{
    setEngine(e.target.value)
  }
  let handlelegs=(e)=>{
    setLegs(e.target.value)
  }

  let filrock=rockets.filter((ele)=>{
    return ele.height.feet>=height 
  })

    useEffect(()=>{
        fetch("https://api.spacexdata.com/v3/rockets").then((res)=>res.json()).then((data)=>setRockets(data))
    })
    return (
      <div className='container'>  
      <h1 style={{fontFamily:"Dancing Script",textAlign:"center",color:"white",margin:"20px",padding:"10px"}}>SpaceX Rockets' Land 🚀</h1>
      <Filtering onH={handleheight} onE={handleengine} onL={handlelegs}/>
      <div className='row'>
         {filrock.map((ele)=>{
             return  <>
             <Search ele={ele}/>
             <Modal ele={ele}/>
              </>
          })}
      </div>

      </div>
    );
}

export default App;
