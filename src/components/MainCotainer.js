import React from 'react'
// import { motion } from "framer-motion";
import nikeWall from './images/Screenshot 2023-11-07 125240.png';
import nikeSamllwall from './images/samllSizeWall.png'
import './mainContainer.css';

const MainCotainer = () => {
  return (
    <>
   
   <div className='MainContainer'>
     {/* <img src={nikeWall}></img> */}
     <picture className='picture'>
    <source className='picnikeSamllwall' media="(max-width: 600px)" srcset={nikeSamllwall}></source>
    {/* <source media="(max-width: 1071px)" srcset={nikeWall}></source> */}

    <img className='picnikeWall' src={nikeWall} alt="IfItDoesntMatchAnyMedia"></img>
</picture>
     
   </div>
   <div className='NikeSlogan'>
    <h1>Gifts that move you</h1>
    <h6>This year's gift. Next year's greatness.</h6>
    <div className='shopbtn'>
      <button>Shop</button>
      <button>Explore</button>

    </div>
   </div>
   </>
  )
}

export default MainCotainer