import React, { useState } from 'react'
import Nav from '../components/Nav'
import customvideo from '../components/images/customiseNike.mp4'
import cus1 from '../components/images/cus1.png'
import cus2 from '../components/images/cu2.png'
import cus3 from '../components/images/cus3.png'
import cus4 from '../components/images/cus4.png'
import cus5 from '../components/images/cus5.png'
import cus6 from '../components/images/cus6.png'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import m1 from '../components/images/member1.png';
import m2 from '../components/images/member2.png'
import customiseGif from '../components/images/customiseGif.gif'
import customiseFeatureGif from '../components/images/CustomiseFeature.gif'


import './customise.css'


const Customise = () => {
    const [custom, setCustom] = useState([
{
    id:1,
    img:cus1,
    titel:"Air Force 1 By you",
    status:"Customise"
}
,{
    id:2,
    img:cus2,
    titel:"Waffle One By you",
    status:"Customise"
}
,{
    id:3,
    img:cus3,
    titel:"Blazer Low '77 By you",
    status:"Customise"
},{
    id:4,
    img:cus4,
    titel:"Blazer Low '77 By you",
    status:"Customise"
},{
    id:5,
    img:cus5,
    titel:"Air Force 1 By you",
    status:"Customise"
},{
    id:6,
    img:cus6,
    titel:"Blazer Low '77 By you",
    status:"Customise"
}

    ])

    const handelBackword = ()=>{
        let box = document.querySelector('.Nikebyyou')
      
        let width = box.clientWidth;
        box.scrollLeft = box.scrollLeft - width;
        // console.log(width)
        }
        const   handelForward= ()=>{
        let box = document.querySelector('.Nikebyyou')
      
       let width = box.clientWidth;
        box.scrollLeft = box.scrollLeft + width;
        // console.log(width);
        }
  return (
    <>
    <Nav></Nav>
    <div className='customContainer'>

       
<div className='CustomiseNavBar'>
    <h2 className='customH2'>Nike By You</h2>
    <div className='CutomiseUl'>
        <ul>
            <li>Newest</li>
            <li>Men</li>
            <li>Woman</li>
        </ul>
    </div>
    </div>

    <div className='MainCustomiseGif'>
            <img src={customiseGif}></img>
            <div className='CustomiseSlogone'>
                <h1>add your magic</h1>
                <h1>Touch</h1>
                <h6>When all that inspiration goes into your shoe design, anything feels possible. Voila! Try your hand at making that so-you shoe with Nike's co-creation service</h6>
                <div className='CustomiseBtn'>
                    <button>Customise</button>
                </div>
            </div>
        </div>

        <div className='MainCustomiseGif'>
            <div className='customiseGifImg'>
                <div className='customiseGifImg2'>
                <img src='https://i.pinimg.com/originals/6f/e7/b0/6fe7b06bb6deb70155df5d7e3329ed82.gif'></img>
            <img src="https://i.pinimg.com/originals/b2/03/21/b2032137280f6d8f43a2315cecaff21d.gif"></img>
                </div>
          
            <img src={customiseFeatureGif}></img>
            </div>
           
            <div className='CustomiseSlogone'>
                <h1>What's your thing</h1>
                
                <h6>Whatever makes you <i>you,</i> put it in your shoe with Nike's co-creation service.</h6>
                <div className='CustomiseBtn'>
                    <button>Customise</button>
                </div>
            </div>
        </div>
    {/* <div className='customiseVideo'>
        <video src="https://player.vimeo.com/external/417383180.sd.mp4?s=c076c4b863e54faa6488b5a7fee79e555530296b&profile_id=165&oauth2_token_id=57447761"></video>
        <video width="320" height="240" controls>
   <source src="https://player.vimeo.com/external/417383180.sd.mp4?s=c076c4b863e54faa6488b5a7fee79e555530296b&profile_id=165&oauth2_token_id=57447761"></source>
   
</video>
    </div> */}
    <div className='membershop'>
        <h2 className='customH2'>Member Shop</h2>
     <div className='memberShopimg'>
<img src={m1}></img>
<img src={m2}></img>

    </div>
    </div>
<div className='nikebyYouMainContainer'>
    <div className='nikebyyoubar'>
    <h2 className='customH2'> #Nike By You</h2>
    <div className='Arrowbtn'> 
                <ArrowBackIosNewIcon className='arrow'onClick={handelBackword} ></ArrowBackIosNewIcon>
                <ArrowForwardIosIcon className='arrow'onClick={handelForward}></ArrowForwardIosIcon>
            </div>
    </div>
   
    <div className='Nikebyyou'>
{
    custom.map((iteam)=>(
        <>
        <div className='customBox'>
            <div className='cutomImg'>
                <img src={iteam.img}></img>
            </div>
            <div className='cutominfromation'>
                <p className='cutomTitel'>{iteam.titel}</p>
                <p className='cutomStatus'>{iteam.status}</p>
            </div>
        </div>
        </>
    ))
}
    </div>
    </div>
    </div>
    </>
  )
}

export default Customise