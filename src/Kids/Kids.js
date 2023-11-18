import React, { useEffect, useState } from "react";
import Nav from "../components/Nav";
import kidsWall from "../components/images/kidsWall.png";
import kidjumping from "../components/images/kidJumping.png";
import KidSize1 from "../components/images/nike-kids1.jpg";
import KidSize2 from "../components/images/NikeKids2.webp";
import KidSize3 from "../components/images/kidseatue3.png";
import KidEssential1 from "../components/images/Ke1.png";
import KidEssential2 from "../components/images/ke2.png";
import KidEssential3 from "../components/images/k3.png";
import sammScrrenWall from "../components/images/featured3.png";
import SamllJumpingKid from "../components/images/SamllJumpingKid.png";
import kidsSmallSize1 from "../components/images/kidsSizeSamll1.png";
import kidsSmallSize2 from "../components/images/kidsSizeSamll2.png";
import kidsSmallSize3 from "../components/images/kidsSizeSamll3.png";
import Kssmall1 from "../components/images/KeSamall1.png";
import Kssmall2 from "../components/images/KeSamall2.png";
import Kssmall3 from "../components/images/KeSamall3.png";

import Data from '../Data/DataKids.JSON'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import "./kids.css";

const Kids = () => {

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
  const [product, setProduct] = useState([])
   
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
   
  return (
    <div>
      <Nav></Nav>
      <div className="KidsMainContainer">
        <div className="KidsNavBar">
          <h3>Kids</h3>
        </div>



        <div>
           
        </div>
        <div className="KidWallImg">
          {/* <img src={wallimg}></img> */}
          <picture>
            <source media="(max-width: 600px)" srcset={sammScrrenWall}></source>
            <source media="(min-width: 601px)" srcset={kidsWall}></source>
            <img
              src={kidsWall}
              alt="Chris standing up holding his daughter Elva"
            ></img>
          </picture>
          <div className="KidsSlogan">
            <h1>GiftS THAT KEEP GOING</h1>
            <h6>So he won't ever have to stop</h6>
            <div className="KidsBtn">
              <button>Shop</button>
              <button>Explore</button>
            </div>
          </div>
        </div>



        <div className='MainProductContainer'>
          <div className='ProductContainer'>
            <h3 className='shopbysporth3'>Trend Alert</h3>
            <div className='Arrowbtn'> 
            <h4 className='arrowShop'>Shop</h4>
                <ArrowBackIosNewIcon className='arrow' onClick={handelBackword}></ArrowBackIosNewIcon>
                <ArrowForwardIosIcon className='arrow' onClick={handelForward}></ArrowForwardIosIcon>
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







        <div className="KidsBasketBallContainer">
          <h3>Dont't Miss</h3>

          <div className="KidsBasketBallImg">
            {/* <img src={wallimg}></img> */}
            <picture>
              <source
                media="(max-width: 600px)"
                srcset={SamllJumpingKid}
              ></source>
              <source media="(min-width: 601px)" srcset={kidjumping}></source>
              <img
                src={kidjumping}
                alt="Chris standing up holding his daughter Elva"
              ></img>
            </picture>
            <div className="KidsBasketBallSlogan">
              <h1>jump for the sky in the lebron xxi</h1>
              {/* <h1>the lebron xxi</h1> */}

              <h6>
                The LeBron XXI latest colorway 'new Age Of Sport,' created with
                forefoot flexibility to help kids feel springy all day
              </h6>
              <div className="menbtn">
                <button>Shop</button>
              </div>
            </div>
          </div>
        </div>

        <div className="KisdSizesForAllContainer">
          <h3>Size For All</h3>
          <div className="KidsSizeForAllImgContainer">
            <div className="KidsSIzeImg1">
              {/* <img src={KidSize1}></img> */}
              <picture>
                <source
                  media="(max-width: 600px)"
                  srcset={kidsSmallSize1}
                ></source>
                <source media="(min-width: 601px)" srcset={KidSize1}></source>
                <img
                  src={KidSize1}
                  alt="Chris standing up holding his daughter Elva"
                ></img>
              </picture>
            </div>
            <div className="KidsSIzeImg2">
              {/* <img src={KidSize2}></img> */}
              <picture>
                <source
                  media="(max-width: 600px)"
                  srcset={kidsSmallSize2}
                ></source>
                <source media="(min-width: 601px)" srcset={KidSize2}></source>
                <img
                  src={KidSize2}
                  alt="Chris standing up holding his daughter Elva"
                ></img>
              </picture>
              {/* <img src={KidSize3}></img> */}
              <picture>
                <source
                  media="(max-width: 600px)"
                  srcset={kidsSmallSize3}
                ></source>
                <source media="(min-width: 601px)" srcset={KidSize3}></source>
                <img
                  src={KidSize3}
                  alt="Chris standing up holding his daughter Elva"
                ></img>
              </picture>
            </div>
          </div>
        </div>

        <div className="KisdEssentialContainer">
          <h3>The Essentials</h3>
          <div className="KidsEssentialImgContainer">
            <div className="KidsEssentialImg1">
              {/* <img src={KidEssential1}></img> */}
              <picture>
                <source media="(max-width: 600px)" srcset={Kssmall1}></source>
                <source
                  media="(min-width: 601px)"
                  srcset={KidEssential1}
                ></source>
                <img
                  src={KidEssential1}
                  alt="Chris standing up holding his daughter Elva"
                ></img>
              </picture>
            </div>
            <div className="KidsEssentialImg2">
              {/* <img src={KidEssential2}></img> */}
              <picture>
                <source media="(max-width: 600px)" srcset={Kssmall2}></source>
                <source
                  media="(min-width: 601px)"
                  srcset={KidEssential2}
                ></source>
                <img
                  src={KidEssential2}
                  alt="Chris standing up holding his daughter Elva"
                ></img>
              </picture>
              {/* <img src={KidEssential3}></img> */}
              <picture>
                <source media="(max-width: 600px)" srcset={Kssmall3}></source>
                <source
                  media="(min-width: 601px)"
                  srcset={KidEssential3}
                ></source>
                <img
                  src={KidEssential3}
                  alt="Chris standing up holding his daughter Elva"
                ></img>
              </picture>
            </div>
          </div>
        </div>


        <div className='endpartContainer'>
        <div className='endpart'>
        <div className='icon'>
            <h3>Kids' Icons</h3>
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
        <h3>Kids' Shoes</h3>

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
        <h3>Kids' Clothing</h3>

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
        <h3>Kids Sports</h3>

        <ul>
                <li>Infant & Toddler Shoes</li>
                <li>Kids' Shoes</li>
                <li>Kids' Jordan Shoes</li>
                <li>Kids' Basketball Shoes</li>
                <li>Kids' Running Shoes</li>
                <li>Kids' Backpacks </li>
                <li>Kids' Clothings </li>
                <li>Kids' Shocks </li>

            </ul>
        </div>
        </div>
    </div>


      </div>
    </div>
  );
};

export default Kids;
