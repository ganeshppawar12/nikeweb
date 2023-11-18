import React, { useState } from 'react'
import basketball  from './images/basketball.png'
import golf  from './images/Golf.png'
import trail  from './images/trail.png'
import tennis  from './images/tennis.png'
import football  from './images/football.png'
import './shopbysport.css'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';







const ShopbySport = () => {
    const handelBackword = ()=>{
        let box = document.querySelector('.shopbysportbox')
      
        let width = box.clientWidth;
        box.scrollLeft = box.scrollLeft - width;
        // console.log(width)
        }
        const   handelForward= ()=>{
        let box = document.querySelector('.shopbysportbox')
      
       let width = box.clientWidth;
        box.scrollLeft = box.scrollLeft + width;
        // console.log(width);
        }
 

    const [shopbtsport, setShopbtsport] = useState([
        {
            id:"1",
            img:basketball,
            titel:"Nike Basketball",
            para:"Styles made for your game.",
            shop:"Shop"
        },
        {
            id: "2",
            img:golf,
            titel:"Nike Golf",
            para:"Conquer any course in style.",
            shop:"Shop"
        },
        {
            id: "3",
            img:trail,
            titel:"Nike Trail",
            para:"Gear that leads to wild places.",
            shop:"Shop"
        },
        {
            id: "4",
            img:tennis,
            titel:"Nike Tennis",
            para:"Serve up and Conquer in style.",
            shop:"Shop"
        },
        {
            id: "5",
            img:football,
            titel:"Nike Footbal",
            para:"Bring mad style to the pitch with the letest gear.",
            shop:"Shop"
        }
    ])

    
  return (
    <div className='ShopbySport'>

        <div className='shopbysportContainer'>
            <h3 className='shopbysporth3'>Shop by Sport</h3>
            <div className='Arrowbtn'> 
                <ArrowBackIosNewIcon onClick={handelBackword} className='arrow'></ArrowBackIosNewIcon>
                <ArrowForwardIosIcon onClick={handelForward} className='arrow'></ArrowForwardIosIcon>
            </div>
        </div>
          <div className='shopbysportbox'>
       
            {
                shopbtsport.map((iteam)=>(
                   <>
                   <div className='ShopbySportgroup'>
                  <div className='shopbysportimg'><img src={iteam.img}></img></div>
                  <div className='shopTitelPara'>
                   <div className='iteamtitel'>{iteam.titel}</div>
                   <div className='iteampara'>{iteam.para}</div>
                   </div>
                   <div className='iteamshop'>{iteam.shop}</div>
                   </div>

                   </>
                ))
            }
      
          </div>
    </div>
  )
}

export default ShopbySport