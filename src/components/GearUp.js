import React, { useState } from 'react'
import gearup from './images/GearUp.png'
import GearupShoes from './images/Gearupshoe.png';
import gearupsecondimg from './images/gearupsecondImg.png';
import './gearup.css'

const GearUp = () => {
  const [blibking, setBlinking] = useState(true);

  const blink  = ()=>{
    
  setBlinking(!blibking)
  
   
  }
  setInterval(blink,6000);

  return (
    <div className='GearupContainer'>
    <h3 className='gearUpTitel'>Gear Up</h3>
    <div className='Gearup'>
        {/* <div> <img src={gearup}></img></div> */}
        <picture>
  <source media="(max-width: 600px)" srcset={ blibking ? GearupShoes :gearupsecondimg }></source>
  <source media="(min-width: 601px)" srcset={gearup}></source>
  <img src={gearup} alt="Chris standing up holding his daughter Elva"></img>
</picture>
    </div>
   
    <div className='gearUpSlogan'>
        <h3 className='GearupH3'>'Mud, Sweat & Tears'</h3>
        <h1 className='Gearuph1'>ZION 3</h1>
        <p className='Gearuppara'>Zion set his sights on the sky and put in the work to get there. Mud, Sweat & Tears were his fuel to take flight-now make them you own.</p>
        <button className='Gearupbtn'>Shop</button>
    </div>
    </div>
  )
}

export default GearUp