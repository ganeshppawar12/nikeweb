import React, { useState } from 'react'
import F1 from './images/feartued0.png'
import F2 from './images/featured2.png'
import F3 from './images/featured3.png'
import F4 from './images/featured4.png'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
// import { , Menu } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import './featured.css'





const Featured = () => {

  const [poster, setPoster] = useState([
    { 
      id:"1",
      img:F1,
      titel:"For Him"
    },
    {
      id:"2",
      img:F2,
      titel:"For Her"
    },
    {
      id:"3",
      img:F3,
      titel:"For Kid"
    },
    {
      id:"4",
      img:F4,
      titel:"Accesories"
    },
  ])
   const [forward, setForward] = useState(0)
  const handelBackword = ()=>{
  let box = document.querySelector('.FeaturedImage')

  let width = box.clientWidth;
  box.scrollLeft = box.scrollLeft - width;
  // console.log(width)
  }
  const   handelForward= ()=>{
  let box = document.querySelector('.FeaturedImage')

 let width = box.clientWidth;
  box.scrollLeft = box.scrollLeft + width;
  // console.log(width);
  }
 
  return (
    <>
    <div className='Featured'>
        <h3>Features</h3>
        <div className='Arrowbtn' >

<ArrowBackIosNewIcon onClick={handelBackword} className='arrow'></ArrowBackIosNewIcon>

<ArrowForwardIosIcon  onClick={handelForward} className='arrow'></ArrowForwardIosIcon>


        </div>
        <div className='FeaturedImage' >
 
            

          {
            poster.map((iteam, index)=>(
              <>
              

              <div className=' image'>
               
              <img src={iteam.img}></img>
              <h3>{iteam.titel}</h3>
              </div>

              </>
            ))
          

}
</div>

<div/>


    </div>
    </>
  )
}

export default Featured