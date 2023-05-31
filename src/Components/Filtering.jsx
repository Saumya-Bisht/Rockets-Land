import React from 'react'

function Filtering({onH,onE,onL}) {
  return (
    <div className='filter-wrapper'>
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