import React from 'react'
import letest from './images/The letest.png'
import letest1 from './images/latest1.png'
import letest2 from './images/letest2.png'


import './theletest.css'

const Thelatest = () => {
  return (
    <>
    <div className='TheLetestContainer'>
<h3 className='letest'>The Latest</h3>
    <div className='Thelatest'>
      {/* <img src={letest}></img> */}
      <picture>
  <source media="(max-width: 600px)" srcset={letest1}></source>
  <source media="(min-width: 601px)" srcset={letest}></source>
  <img src={letest} alt="Chris standing up holding his daughter Elva"></img>
</picture>


    </div>
    <div className='letestImg2'>
    <img src={letest2}></img>
    </div>
    {/* <div className='NikeSlogan'>
     <h1>Gifts that move you</h1>
     <h6>This year's gift. Next year's greatness.</h6>
     <div className='shopbtn'>
       <button>Shop</button>
       <button>Explore</button>
 
     </div>
    </div> */}
    </div>
    </>
  )
}

export default Thelatest