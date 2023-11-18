import React, { useEffect, useState } from 'react'
import UpcomingData from '../Data/UpcomingData.JSON';
import SNKRSNAv from './SNKRSNAv';
import './upcoming.css'

const UpcommingSNKRS = () => {

    const [upcominglist,setUpcominglist] = useState([])

    const fetchData = async()=>{
        const res = await fetch(UpcomingData);
        const data = await res.json();
        setUpcominglist(data)
console.log(data)
    }

    useEffect(()=>{
        fetchData();
    })


  return (
    <div>
      <SNKRSNAv></SNKRSNAv>

        <div className='upcomingContainer'>
            {
upcominglist.map((iteam)=>(
    <>
    <div className='upcomingbox'> 
        <div className='upcomingimg '>
            <img src={iteam.img}></img>
        </div>
        <div className='upcomingIformation '>
            <p className='UpcomingSNKRStitel'>{iteam.titel}</p>
            <p className='UpcominSNKRScolor'>{iteam.color}</p>
            <p className='UpcominSNKRSstutas'>{iteam.status}</p>
            <div className='relesedDate'>
            <p className='relesedmonth'>{iteam.month}</p>
            <p className='relsedmothdate'>{iteam.date}</p>
            </div>
          



        </div>
    </div>
    </>
))
            }
        </div>
        <video src="Interpretation:
As per the above data, 14% of respondents are strongly agree with that facility provided by the organisation. 47% of respondents are agree, 10% of respondents are strongly disagree, 29% of respondents are disagree.
 
"></video>
    </div>
  )
}

export default UpcommingSNKRS