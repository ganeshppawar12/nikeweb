import React, { useState } from 'react'
import Nav from '../components/Nav'
import wallimg from '../components/images/menWall.png'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import u1 from '../components/images/u1.png'
import u2 from '../components/images/u2.png'
import u3 from '../components/images/u3.png'
import u4 from '../components/images/u4.png'
import manfeatured from '../components/images/manfeatured.png'
import Justin from '../components/Justin'
import ml1 from '../components/images/ml1.png'
import ml2 from '../components/images/ml2.png'
import ml3 from '../components/images/ml3.png'
import dontmiss from '../components/images/mendotmiss.png'
import me2 from '../components/images/me2.png'
import me1 from '../components/images/me1.png'
import me3 from '../components/images/me3.png'
import football from '../components/images/s8.png'
import Ruuning from '../components/images/s1.png'
import Sportswear from '../components/images/s2.png'
import Training from '../components/images/s3.png'
import Basketball from '../components/images/s4.png'
import Tennis from '../components/images/s5.png'
import Yoga from '../components/images/s6.png'
import small from '../components/images/feartued0.png'
import featuredsamll from '../components/images/manFeaturedsmall.png'
import Skatebording from '../components/images/s7.png'
import smallDontMiss from '../components/images/smallDotMiss.png'

import './man.css'







const Men = () => {
  const [shopbtsport, setShopbtsport] = useState([
    {
        id:"1",
        img:u1,
        titel:"Unlimited Short",
       
        shop:"Shop"
    },
    {
        id: "2",
        img:u2,
        titel:"Unlimited Pant",

        shop:"Shop"
    },
    {
        id: "3",
        img:u3,
        titel:"Primary Top",
       
        shop:"Shop"
    },
    {
        id: "4",
        img:u4,
        titel:"Unlimited Jacket",
       
        shop:"Shop"
    }
])

const [essential, setEsential] = useState([
  {
    id:1,
    img:me1,
    titel:"Clothing",
    shop: "Shop"
  }, {
    id:2,
    img:me2,
    titel:"Shoes",
    shop: "Shop"
  }, {
    id:3,
    img:me3,
    titel:"Accessories",
    shop: "Shop"
  }
])

const [sport, setSport] = useState([
  {
    id:1,
    img:football,
    titel:"Football"
  },{
    id:2,
    img:Ruuning,
    titel:"Ruuning"
  },
  {
    id:3,
    img:Sportswear,
    titel:"Sportswear"
  },
  {
    id:4,
    img:Training,
    titel:"Training"
  },
  {
    id:5,
    img:Basketball,
    titel:"Basketball"
  },
  {
    id:6,
    img:Tennis,
    titel:"Tennis"
  },{
    id:7,
    img:Yoga,
    titel:"Yoga"
  },{
    id:8,
    img:Skatebording,
    titel:"Skatebording"
  }
])



const handelBackword = ()=>{
  let box = document.querySelector('.unlimitedProductContainer')

  let width = box.clientWidth;
  box.scrollLeft = box.scrollLeft - width;
  // console.log(width)
  }
  const   handelForward= ()=>{
  let box = document.querySelector('.unlimitedProductContainer')

 let width = box.clientWidth;
  box.scrollLeft = box.scrollLeft + width;
  // console.log(width);
  }


  const SporthandelBackword = ()=>{
    let box = document.querySelector('.sportContainer')
  
    let width = box.clientWidth;
    box.scrollLeft = box.scrollLeft - width;
    // console.log(width)
    }
    const  sporthandelForward= ()=>{
    let box = document.querySelector('.sportContainer')
  
   let width = box.clientWidth;
    box.scrollLeft = box.scrollLeft + width;
    // console.log(width);
    }
  return (

    <>
    <Nav></Nav> 
    <div className='MenContainer'>

        <div className='MenNavbar'>
            <h2 className='customH2'>Men</h2>
            <div className='manmenu'>
                <ul>
                    <li>Shoes</li>
                    <li>Clothing</li>
                    <li>Gear</li>

                </ul>
            </div>
        </div>
        <div className='manwallimg'>
{/* <img src={wallimg}></img> */}
<picture>
  <source media="(max-width: 600px)" srcset={small}></source>
  <source media="(min-width: 601px)" srcset={wallimg}></source>
  <img src={wallimg} alt="Chris standing up holding his daughter Elva"></img>
</picture>
<div className='manSlogan'>
  <h1>GiftS  THAT KEEP GOING</h1>
  <h6>So he won't ever have to stop</h6>
  <div className='menbtn'>
    <button>Shop</button>
    <button>Explore</button>

  </div>
</div>
        </div>

        <div className='manGif'>
          <img src="https://i.pinimg.com/originals/fe/ee/4a/feee4aea65682c128be1cb9017201afc.gif"></img>
        </div>
        <div className='unlimitedmaniContainer'>
        <div className='unlimitedSection'>
          <h3>Men's Versatility</h3>
          <div className='Arrowbtn'> 
                <ArrowBackIosNewIcon onClick={handelBackword} className='arrow'></ArrowBackIosNewIcon>
                <ArrowForwardIosIcon onClick={handelForward} className='arrow'></ArrowForwardIosIcon>
            </div>
      

          </div>
          <div className='unlimitedProductContainer'>
            {
              shopbtsport.map((iteam)=>(
                <>
                <div className='unlimitedBox'>
                  <div className='unlimitedImg'>
                    <img src={iteam.img}></img>
                     </div>
                     <div className='unlimitedInfo'>
                       <p className='unlimitedTitel'>{iteam.titel}</p>
                       <p className='unlimitedShop'>{iteam.shop}</p>
                     </div>
                </div>
                </>
              ))
            }
          </div>
         
        </div>
        <div className='manFeatureContainer'>
            <h3>Featured</h3>
            <div className='manfeatuedimg'>
              {/* <img src={manfeatured}></img> */}
              <picture>
  <source media="(max-width: 600px)" srcset={featuredsamll}></source>
  <source media="(min-width: 601px)" srcset={manfeatured}></source>
  <img src={manfeatured} alt="Chris standing up holding his daughter Elva"></img>
</picture>
            </div>
            <div className='manfeatureSlogon'>
            <h1>nike zoom tr1</h1>
            <h6>Light and responsive. Built for your workout and byound.</h6>
            <div className='menbtn'>
    <button>Shop</button>


  </div>
            </div>
          </div>
          <div>
    <Justin></Justin>
          </div>

          <div className='manletestContainer'>
            <h3>The Latest</h3>
            <div className='manLetestContaineimg'>
            <img src={ml1}></img>
            <img src={ml2}></img>
            <img src={ml3}></img>

            </div>
          </div>

          <div className='manDontMissContainer'>
            <h3> Don't Miss</h3>
            <div className='dontmiss'>
           {/* <img src={dontmiss}></img> */}
           
           <picture>
  <source media="(max-width: 600px)" srcset={smallDontMiss}></source>
  <source media="(min-width: 601px)" srcset={dontmiss}></source>
  <img src={dontmiss} alt="Chris standing up holding his daughter Elva"></img>
</picture>

            </div>
            <div className='mandontmissSlogon'>
              <h1>lebron xxi.</h1>
              <h1>created for you to rise</h1>
              <h6>Explode during takeoff and land softly in the LeBron XXI.</h6>
              <div className='menbtn'>
               <button>Shop</button>
            </div>
            </div>
          </div>

          <div className='manEssentialConatiner'>
<h3>Shop The Essentials</h3>
       <div className='ShoptheEssentialBox'>
        {

essential.map((iteam)=>(
<>

<div className='manEssentialBox'>
  <div className='ShopEsentialImg'>
    <img src={iteam.img}></img>
  </div>
  <div className='shopEssentialInformation'>
<p className='manessentialTitel'>{iteam.titel}</p>
<p className='manessentialShop'>{iteam.shop}</p>
  </div>
  
  </div>  
  </>
))
          
        }
       </div>
          </div>

          <div className='manShopBtcontainer'>
          <div className='shopbysportContainer'>
            <h3 className='shopbysporth3'>Shop by Sport</h3>
            <div className='Arrowbtn'> 
                <ArrowBackIosNewIcon className='arrow' onClick={SporthandelBackword}></ArrowBackIosNewIcon>
                <ArrowForwardIosIcon className='arrow' onClick={sporthandelForward}></ArrowForwardIosIcon>
            </div>
        </div>
        <div className='sportContainer'>
           {
            sport.map((iteam)=>(
              <>
              <div className='sportbox'>
  <div className='sportimg'>
  <img src={iteam.img}></img>
  </div>
  <div className='sportInformation'>
 <p>{iteam.titel}</p>
  </div>
              </div>
              
              </>
            ))
           
           }
        </div>
          </div>
         


          <div className='endpartContainer'>
        <div className='endpart'>
        <div className='icon'>
            <h3>Mens' Icons</h3>
            <ul>
                <li>Air Force 1</li>
                <li>Huarache</li>
                <li>Air Max 90</li>
                <li>Air Max 95</li>
                <li>Air Max 97</li>
                <li>Air Max 270</li>
                <li>Air Max 720</li>
                <li>All Air Max </li>
                {/* <li>Vapormax</li> */}

            </ul>
        </div>
        <div className='Shoes '>
        <h3>Mens' Shoes</h3>

        <ul>
                <li>All Shoes</li>
                <li>Custom Shoes</li>
                <li>Jordan Shoes</li>
                <li>Running Shoes</li>
                <li>Basketball Shoes</li>
                <li>Football Shoes</li>
                <li>Gym & Training Shoes</li>
                <li>Lifestyle Shoes</li>


            </ul>
        </div>
        <div className='Clothing'>
        <h3>Mens' Clothing</h3>

        <ul>
                <li>All Clothing</li>
                <li>Modest Wear</li>
                <li>Hoodies & Pullovers</li>
                <li>Shirts & Tops</li>
                <li>Jackets</li>
                <li>Compression & Nike Pro</li>
                <li>Trousers & Leggings</li>
                <li>Shorts</li>

            </ul>
        </div>
        <div className='Kidsiteam'>
        <h3>Mens'Sports</h3>

        <ul>
                <li>Infant & Toddler Shoes</li>
                <li>Mens' Shoes</li>
                <li>Mens' Jordan Shoes</li>
                <li>Mens' Basketball Shoes</li>
                <li>Mens' Running Shoes</li>
                <li>Mens' Backpacks </li>
                <li>Mens' Clothings </li>
                <li>Mens' Shocks </li>

            </ul>
        </div>
        </div>
    </div>

    </div>


    </>
  )
}

export default Men