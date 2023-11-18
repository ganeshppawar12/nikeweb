import React from 'react'
import justin from './images/Justin.png'
import SamllScreenJustIn from './images/SmallJustInImg.png'

import './justin.css'

const Justin = () => {
  return (
    <div className='justin'>
        <h3>Just In</h3>
        <div className='JustInImg'>
            {/* <img src={justin}></img> */}
            <picture>
  <source media="(max-width: 600px)" srcset={SamllScreenJustIn}></source>
  <source media="(min-width: 601px)" srcset={justin}></source>
  <img src={justin} alt="Chris standing up holding his daughter Elva"></img>
</picture>
        </div>
        <div className='justinSlogan'>
            <h4 className='AirMax'>Air Max Pulse Roam</h4>
            <h1 className='ROAM'>ROAM  ENDLESSLY</h1>
            <p className='justinp'>The Air Max Pulse Roam has arrived, leveled up to deal with anything the inner city can throw at it. Designed to be with you anywhere at anytime, from morning till night.</p>
        
        <div className='Justshopbtn'>
      <button>Shop Now</button>
    </div>
    </div>
    </div>
  )
}

export default Justin