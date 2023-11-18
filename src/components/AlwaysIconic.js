import React, { useState } from 'react'
import AirJordan from './images/Air Jordan 1.png'
import Airmax from './images/Air Max.png'
import Dunk from './images/Dunk.png'
import NikeBlazer from './images/Nike Blazer.png'
import Metcon from './images/Metcon.png'
import Pegasus from './images/Pegasus Running Shoes.png'
import AirForce from './images/Air Force 1.png'
import './always.css';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { IconButton, Menu } from '@mui/material';







const AlwaysIconic = () => {

    const [alwaysiconic, setAlwaysiconic] = useState([

        {
            id:"1",
            img:AirJordan,
            titel:"Air Jordan 1",
          
        },
        {
            id:"2",
            img:Airmax,
            titel:"Air Max",
          
        },
        {
            id:"3",
            img:Dunk,
            titel:"Dunk",
          
        },
        {
            id:"4",
            img:NikeBlazer,
            titel:"Nike Blazer",
          
        },
        {
            id:"5",
            img:Metcon,
            titel:"Metcon",
          
        },
        {
            id:"6",
            img:Pegasus,
            titel:"Pegasus Running Shoes",
          
        },
        {
            id:"7",
            img:AirForce,
            titel:"Air Force 1",
          
        }

    ])

    const handelBackword = ()=>{
        let box = document.querySelector('.AlwaysIconicContainer')
      
        let width = box.clientWidth;
        box.scrollLeft = box.scrollLeft - width;
        // console.log(width)
        }
        const   handelForward= ()=>{
        let box = document.querySelector('.AlwaysIconicContainer')
      
       let width = box.clientWidth;
        box.scrollLeft = box.scrollLeft + width;
        // console.log(width);
        }
  return (
    <>
    <div  className='AlwaysIconicMainContainer'>
    <div className='AlwaysHead'>Always Iconic</div>
    <div className='AlwaysIconicContainer'>
        <button className='AlwaysBtn' onClick={handelBackword}><ArrowBackIosNewIcon ></ArrowBackIosNewIcon></button>
        {
            alwaysiconic.map((iteam)=>(
                <div>
                <div className='alwaysImg'> <img src={iteam.img}></img></div>
                <p className='alwaysPara'>{iteam.titel}</p>
                </div>
                
            ))
        }
        <button className='AlwaysBtn2' onClick={handelForward} ><ArrowForwardIosIcon  ></ArrowForwardIosIcon></button>

    </div>
    </div>
    </>
  )
}

export default AlwaysIconic