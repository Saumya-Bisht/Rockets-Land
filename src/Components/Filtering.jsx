import React from 'react'

function Filtering({onH,onE,onL}) {
  return (
    <div>
      <label style={{fontFamily:"Dancing Script",textAlign:"center",color:"white",margin:"20px",padding:"10px",fontSize:"larger"}}>Select a height to see the rockets of the exact selected height-</label>
        <select name='height' className='filter' onChange={onH}>
            <option value="0">---Select Height---</option>
            <option value="100"> Greater than 100 Feet</option>
            <option value="200"> Greater than 200 Feet</option>
            <option value="300"> Greater than 300 Feet</option>
        </select>
        
    </div>
  )
}

export default Filtering