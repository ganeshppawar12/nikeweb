import React, { useEffect, useState } from 'react'
// import Data2 from '../Data/Data2.JSON'
import Data2 from '../Data/Data2.JSON'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import RemoveIcon from '@mui/icons-material/Remove';
import './cart.css'
import Nav from '../components/Nav';

const Cart = () => {

    const handelBackword = ()=>{
        let box = document.querySelector('.youmaightContainer')
      
        let width = box.clientWidth;
        box.scrollLeft = box.scrollLeft - width;
        // console.log(width)
        }
        const   handelForward= ()=>{
        let box = document.querySelector('.youmaightContainer')
      
       let width = box.clientWidth;
        box.scrollLeft = box.scrollLeft + width;
        // console.log(width);
        }

    const [youmightalso , setYoumightalso] = useState([])

    // const youMightFunction = async()=>{
    //     const res = await fetch(Data2);
    //     const data = await res.json();
    //     setYoumight(data)

    // }
    //  useEffect(()=>{
    //     youMightFunction()

    //  },[setYoumight])
    //  console.log(youMightFunction)
     useEffect(()=>{
        const feachdata = async ()=>{
          const res = await fetch(Data2)
          // console.log(res)
          res.json().then(json =>{
        //   console.log(res)
  
          setYoumightalso(json);
        //   console.log(json)

          })
        }
        feachdata();
      },[]);

  return (
    <>
    <Nav></Nav>
    <div className='CartContainer'>
        <div className='BagMainContainer'>
            <div className='BagContainer'>
<div className='Bag'>
    <h3>Bag</h3>
     <h4>There are no Iteams in your bag.</h4>
</div>
<div className='favourites'>
    <h3>Favourites</h3>
    <p>Want to view your favourites?</p>
    <p> <sapn className='join'>Join us</sapn> or <span className='join'>Sign in</span></p>
</div>
            </div>
            <div className='SummaryContainer'>
                <div className='summery'>
                    <h3>Summary</h3>
                </div>
                <div className='SubtotalContainer'>
                    <div className='subtotal'>
                    <h3>Subtotal <span className='questionMark'>?</span></h3>
                    <p><RemoveIcon className='minuslogo'></RemoveIcon></p>
                    </div>
                    <div className='subtotal'>
                    <h3>Estimated Delivery & Handling <span className='questionMark'>?</span></h3>
                    <p>Free</p>

                    </div>

                </div>
                <div className='Total'>
                    <h3>Total</h3>
                    <p><RemoveIcon className='minuslogo'></RemoveIcon></p>
                </div>
                <div className='Summarybtn'>
                    <button>Guest Checkout</button>
                    <button>Member Checkout</button>

                </div>
            </div>
            </div>
            <div className='Youmight'>
                
                    <h3 className='youmighth3'>You Might Also Like</h3>
                    <div className='Arrowbtn'> 
                <ArrowBackIosNewIcon className='arrow' onClick={handelBackword} ></ArrowBackIosNewIcon>
                <ArrowForwardIosIcon className='arrow' onClick={handelForward} ></ArrowForwardIosIcon>
            </div>
           <div className='youmaightContainer'>
            <div className='youmaightContainer'></div>
{
    youmightalso.map((iteam)=>(
        <div className='youmaightContainerBox'>
            <div className='youMightImg'>
            <img src={iteam.img}></img>
            </div>
            <div>
            <h3 className='yourtitel'>{iteam.titel}</h3>
            <h3 className='yourcategory'>{iteam.category}</h3>
            <h3 className='yourmrp'>MRP: {iteam.mrp}</h3>


        </div>
        </div>
    ))
}

           </div>
            </div>
    </div>
    </>
  )
}

export default Cart