import React, { useEffect, useState } from 'react'
import WomenBigWall from '../components/images/WomenWall.png'
import f1 from '../components/images/Wf1.png'
import f2 from '../components/images/wf2.png'
import ws1 from '../components/images/ws1.png'
import ws2 from '../components/images/ws2.png'
import ws3 from '../components/images/ws3.png'
import ws4 from '../components/images/ws4.png'
import wbg1 from '../components/images/wbg1.png'
import wbg2 from '../components/images/wbg2.png'
import wbg3 from '../components/images/wbg3.png'
import we1 from '../components/images/we1.png'
import we2 from '../components/images/we2.png'
import we3 from '../components/images/we3.png'
import we4 from '../components/images/we4.png'
import womenBaner1 from '../components/images/womenBaner.png'
import womenBane21 from '../components/images/womenbaner2.png'
import Nav from '../components/Nav'
import F2 from '../components/images/featured2.png'
import './women.css'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import smallBaner1 from '../components/images/samllBanar1.png'
import smallBaner2 from '../components/images/smallBaner2.png'
import data from '../Data/DataWomen.JSON'





const Women = () => {
   const [product, setProduct] = useState([])
    const [shop, setShop] =useState([
        {
            img:we1,
            titel:"Clothing"
        },
        {
            img:we2,
            titel:"Shoes"
        },
        {
            img:we3,
            titel:"Bras & Leggings"
        },
        {
            img:we4,
            titel:"Asseccories"
        }
    ])

    const fetchData = async()=>{
        const res = await fetch(data);
        const da = await res.json();
        setProduct(da);
    }

    useEffect(()=>{
        fetchData()
    })


    const handelBackword = ()=>{
        let box = document.querySelector('.womenmoreImg')
      
        let width = box.clientWidth;
        box.scrollLeft = box.scrollLeft - width;
        // console.log(width)
        }
        const   handelForward= ()=>{
        let box = document.querySelector('.womenmoreImg')
      
       let width = box.clientWidth;
        box.scrollLeft = box.scrollLeft + width;
        // console.log(width);
        }

        const SporthandelBackword = ()=>{
            let box = document.querySelector('.WomenTrandingNowBox')
          
            let width = box.clientWidth;
            box.scrollLeft = box.scrollLeft - width;
            // console.log(width)
            }
            const  sporthandelForward= ()=>{
            let box = document.querySelector('.WomenTrandingNowBox')
          
           let width = box.clientWidth;
            box.scrollLeft = box.scrollLeft + width;
            // console.log(width);
            }
      

            const WomenEhandelBackword = ()=>{
                let box = document.querySelector('.womenShopContainer')
              
                let width = box.clientWidth;
                box.scrollLeft = box.scrollLeft - width;
                // console.log(width)
                }
                const  WomenEhandelForward= ()=>{
                let box = document.querySelector('.womenShopContainer')
              
               let width = box.clientWidth;
                box.scrollLeft = box.scrollLeft + width;
                // console.log(width);
                }
  return (
    <div>

<Nav></Nav>
        <div className='MainWomenContainer'>

        <div className='WomenNavbar'>
            <h2 className='customH2'>Women</h2>
            <div className='womenmenu'>
                <ul>
                    <li>Shoes</li>
                    <li>Clothing</li>
                    <li>Pant & Leggings</li>
                    <li>Sports Bras</li>

                </ul>
            </div>
        </div>

        <div className='womenWallImg'>
        <picture>
  <source media="(max-width: 600px)" srcset={F2}></source>
  <source media="(min-width: 601px)" srcset={WomenBigWall}></source>
  <img src={WomenBigWall} alt="Chris standing up holding his daughter Elva"></img>
</picture>

<div className='manSlogan'>
  <h1>GiftS  THAT KEEP GOING</h1>
  <h6>So She won't ever have to stop</h6>
  <div className='menbtn'>
    <button>Shop</button>
    <button>Explore</button>

  </div>
</div>
        </div>
          <div className='womenGif'>
            <img src="https://i.pinimg.com/originals/2b/c8/15/2bc815e567fc0f092409f47f7c588c07.gif"></img>
          </div>

        <div className='womenFeature'>

            <h3>Featured</h3>
           

            <div className='womenFeaturedImg'>
                <img src={f1}></img>
                <img src={f2}></img>

            </div>
        </div>




        <div className='WomenMore'>
        <div className='Arrowbtn'> 
                <ArrowBackIosNewIcon className='arrow'  onClick={handelBackword}></ArrowBackIosNewIcon>
                <ArrowForwardIosIcon className='arrow' onClick={handelForward}></ArrowForwardIosIcon>
            </div>
            <div className='womenmoreImg'>
                <img src={ws1}></img>
                <img src={ws2}></img>
                <img src={ws3}></img>
                <img src={ws4}></img>

            </div>
        </div>

        <div className='womenTrandingNow'>
            <div className='womenTrandingNavBar'>
            <h3 className='customH2'>Trending Now</h3>
            <div className='Arrowbtn'> 
                <ArrowBackIosNewIcon className='arrow' onClick={SporthandelBackword}></ArrowBackIosNewIcon>
                <ArrowForwardIosIcon className='arrow' onClick={sporthandelForward}></ArrowForwardIosIcon>
            </div>
            </div>
            
     <div className='WomenTrandingNowBox'>
        {
            product.map((iteam)=>(
                <>
                <div className='WomenTrendingBox'>
                    <div className='WomenTrendingImg'>
                    <img src={iteam.img}></img>
                   
                    </div>
                    <div className='WomanTrendingInformation'>
                        <p className='WomenTrandingTitel'>{iteam.titel}</p>
                        <p className='WomenTrandingCategory'>{iteam.category}</p>
                        <p className='WomenTrandingMrp'>MRP {iteam.mrp}</p>
                    </div>
                </div>
                </>
            ))
        }

     </div>

</div>

        <div className='BuyingGuidesContainer'>
          <h3>Buying Guides</h3>
            <div className='BuyingGuideImg'>
              <img src={wbg1}></img>
              <img src={wbg2}></img>
              <img src={wbg3}></img>

            </div>
        </div>


        <div className='womenShopEssential'>
<div className='womenEssentialHead'>
            <h3>Shop the Essentials</h3>
            <div className='Arrowbtn'> 
                <ArrowBackIosNewIcon className='arrow'onClick={WomenEhandelBackword}></ArrowBackIosNewIcon>
                <ArrowForwardIosIcon className='arrow'onClick={WomenEhandelForward}></ArrowForwardIosIcon>
            </div></div>
            <div className='womenShopContainer'>

{
    shop.map((iteam)=>(

<>
    <div className='womenshopBox'>
        <div className='womenshopImg'>
            <img src={iteam.img}></img>
        </div>
        <div className='womenShopInfromation'>
<p>{iteam.titel}</p>
        </div>
    </div>
    </>
    ))
    
}
            </div>

        </div>


        <div className='womenBanet1'>
           <div className='womenBaner1img'>
            {/* <img src={womenBaner1}></img> */}
            <picture>
  <source media="(max-width: 600px)" srcset={smallBaner1}></source>
  <source media="(min-width: 601px)" srcset={womenBaner1}></source>
  <img src={womenBaner1} alt="Chris standing up holding his daughter Elva"></img>
</picture>
           </div>
           <div className='womenShopBtn'>
            <button>Explore NTC</button>
            <button>Explore NRC</button>
           </div>
        </div>

        <div className='womenBaner2'>
            <div className='womenbanerImg'>
                {/* <img src={womenBane21}></img> */}

                <picture>
  <source media="(max-width: 600px)" srcset={smallBaner2}></source>
  <source media="(min-width: 601px)" srcset={womenBane21}></source>
  <img src={womenBane21} alt="Chris standing up holding his daughter Elva"></img>
</picture>
            </div>
        </div>


        <div className='endpartContainer'>
        <div className='endpart'>
        <div className='icon'>
            <h3>womens' Icons</h3>
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
        <h3>womens' Shoes</h3>

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
        <h3>womens' Clothing</h3>

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
        <h3>womens'Sports</h3>

        <ul>
                <li>Infant & Toddler Shoes</li>
                <li>Womens' Shoes</li>
                <li>womens' Jordan Shoes</li>
                <li>womens' Basketball Shoes</li>
                <li>womens' Running Shoes</li>
                <li>womens' Backpacks </li>
                <li>womens' Clothings </li>
                <li>womens' Shocks </li>

            </ul>
        </div>
        </div>
    </div>
     
        </div>
    </div>
  )
}

export default Women