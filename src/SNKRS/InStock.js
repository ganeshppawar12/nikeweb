import React, { useEffect, useState } from 'react'
import instockData from '../Data/InStockData.JSON';
import SNKRSNAv from './SNKRSNAv';
import './instock.css';
import { useDispatch, useSelector } from 'react-redux';


const InStock = () => {
    const [instock, setInstock] = useState([])
    // const [toggel, setToggel] = useState()
    // const toggelFunction = ()=>{
    //     setToggel(!toggel)
    // }

    const lightTheme = useSelector((state) => state.themeKey);
    const dispatch = useDispatch();
    const fetchData = async()=>{
        const res = await fetch(instockData);
        const data = await res.json();
        setInstock(data);
        console.log(data)
    }

    useEffect(()=>{
        fetchData();
    },[instock])
  return (
    <div>
      <SNKRSNAv></SNKRSNAv>
<div className='inStockContainer'>
    <div className={lightTheme ?'instocklist':'productlistContainer2'}>
        {

instock.map((iteam)=>(
<>
<div  className='inStockBox'>
    <div className={lightTheme ?'instockimg':'SNKRSimg2'}>
        <img src={iteam.img}></img>
    </div>
    <div className={lightTheme ?'imstockInformation': "SNKRSiformation2"}>
        <p className={lightTheme ?'instocktitel':"SNKRStitel2"}>{iteam.titel}</p>
        <p className={lightTheme ?'instockColor':"SNKRScolor2"}>{iteam.color}</p>
        
        {iteam.value?<p className='instockBuy'>{iteam.buy}</p>:<p className='instockSold'>{iteam.sold}</p>}
        {/* {iteam.value ? <p>{iteam.sold}</p>:<p></p>} */}
        


    </div>
</div>

</>
))

        }
    </div>
</div>
{/* <video className='video' width="320" height="240" controls>
  <source src="https://player.vimeo.com/external/417383180.sd.mp4?s=c076c4b863e54faa6488b5a7fee79e555530296b&profile_id=165&oauth2_token_id=57447761" type="video/mp4"></source>
  <source src="movie.ogg" type="video/ogg"></source>
  Your browser does not support the video tag.
</video> */}

    </div>
  )
}

export default InStock