import React, { useState, useEffect } from 'react'
// import {Data} from './Data.json';
import Data from '../Data/Data.JSON'
import { Key } from '@mui/icons-material';
import './trendalert.css'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const TrendAlert = () => {
    const [product, setProduct] = useState([])
  
    const handelBackword = ()=>{
      let box = document.querySelector('.prodauctsContainer')
    
      let width = box.clientWidth;
      box.scrollLeft = box.scrollLeft - width;
      // console.log(width)
      }
      const   handelForward= ()=>{
      let box = document.querySelector('.prodauctsContainer')
    
     let width = box.clientWidth;
      box.scrollLeft = box.scrollLeft + width;
      // console.log(width);
      }

    useEffect(()=>{
      const feachdata = async ()=>{
        const res = await fetch(Data)
        // console.log(res)
        res.json().then(json =>{
        // console.log(res)

          setProduct(json);
        })
      }
      feachdata();
    },[setProduct]);
    // console.log(Data)

  return (
    <div className='MainProductContainer'>
          <div className='ProductContainer'>
            <h3 className='shopbysporth3'>Trend Alert</h3>
            <div className='Arrowbtn'> 
            <h4 className='arrowShop' >Shop</h4>
                <ArrowBackIosNewIcon onClick={handelBackword} className='arrow' ></ArrowBackIosNewIcon>
                <ArrowForwardIosIcon onClick={handelForward} className='arrow'></ArrowForwardIosIcon>
            </div>
        </div>
         <div className='prodauctsContainer'>
          {
            product.map((iteam)=>(
              <>
               <div className='productBox'>
              <div className='productimg'>
               
              <img src={iteam.img}></img>

              </div>
              <p className='producttitel'> {iteam.titel}</p>
              <p className='productCategory'>{iteam.category}</p>
              <p className='productmrp'>MRP: {iteam.mrp}</p>
              </div>
              </>
            ))
          }
         </div>

        
    </div>
  )
}

export default TrendAlert