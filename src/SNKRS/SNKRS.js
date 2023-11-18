import React, { useEffect, useState } from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import './snkrs.css'
import snkrsnikelogo from '../components/images/SNKRSnike.png'
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import SNKRAData from "../Data/SNKRSData.JSON"
import ViewCompactIcon from '@mui/icons-material/ViewCompact';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
// import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";

import SNKRSNAv from './SNKRSNAv';
const SNKRS = () => {
    const [toggel, setToggel] = useState(true)
  const lightTheme = useSelector((state) => state.themeKey);
  const dispatch = useDispatch();


    const toggelFunction =()=>{
        setToggel(!toggel)
    console.log(toggel)

    }
    // toggelFunction()

    const [productlist, setProductlist] = useState([])

    const fatchdata = async()=>{
         const res = await fetch(SNKRAData);
         const data = await res.json();
         setProductlist(data)
         console.log(data);
    }
    useEffect(()=>{
        fatchdata()
    } ,[])
    
  return (
    <div className='SNKRSMainContainer'>
      
      <SNKRSNAv></SNKRSNAv>
<div className='prodtuctlistMainContainer'>
        <div className={lightTheme ? 'productlistContainer' : 'productlistContainer2'}>
            {
                productlist.map((iteam)=>(
                    
                    <>
                    <div className={lightTheme ?'productlistbox':'productlistbox2'}>
                        <div className={lightTheme ?'SNKRSimg' :'SNKRSimg2'}>
                            <img src={iteam.img}></img>
                        </div>
                        <div className={lightTheme?'SNKRSiformation': "SNKRSiformation2"}>
                            <p className={lightTheme ?'SNKRStitel':"SNKRStitel2"}>{iteam.titel}</p>
                            <p className={lightTheme ?'SNKRScolor':"SNKRScolor2"}>{iteam.color}</p>
                            {/* <p className={toggel ?'SNKRSstatus':"SNKRSstatus2"}>{iteam.status}</p> */}
                            {iteam.value ? <p className='buyiteam'>{iteam.buy}</p> : <p className={lightTheme ?'SNKRSstatus':"SNKRSstatus2"} >{iteam.status}</p>}
                           {/* <p className='itesmsold'>{iteam.sold}</p> */}


                        </div>
                    </div>
                    
                    </>
                ))
            }
        </div>
    </div>
    </div>
  )
}

export default SNKRS