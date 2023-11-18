import React from 'react'
import Dontmiss from './images/dontmiss.png';
import DotmissSmall from './images/DotmissSamllScreen.png'
import './dotmiss.css';

const DontMiss = () => {
  return (
    <div className='DontMissContainer'>
    <h3 className='DontMissTitel'>Don't Miss</h3>
    <div className='DontMiss'>
        {/* <div> <img src={Dontmiss}></img></div> */}
        <picture>
  <source media="(max-width: 600px)" srcset={DotmissSmall}></source>
  <source media="(min-width: 601px)" srcset={Dontmiss}></source>
  <img src={Dontmiss}alt="Chris standing up holding his daughter Elva"></img>
</picture>
    </div>
    <div className='DontMissSlogan'>
        
        <h1 className='DontMissh1'>UNLIMITED PANT</h1>
        <p className='DontMisspara'>Stretch and flex for all your workouts</p>
        <button className='DontMissbtn'>Shop</button>
    </div>
    </div>
  )
}

export default DontMiss