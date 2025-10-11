import React from 'react'
import site_building from '../../assets/designing_img.png'

const UnderConstruction = () => {
  return (
        <div className="construction">        
           <h1>Under construction 🚧 </h1>
           <img src={site_building} alt="" />
         </div>    
  )
}

export default UnderConstruction