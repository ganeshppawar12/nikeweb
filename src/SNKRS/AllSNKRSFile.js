import React from 'react'
import SNKRSNAv from './SNKRSNAv'
import SNKRS from './SNKRS'
import { Outlet } from 'react-router-dom';


const AllSNKRSFile = () => {
  return (
    <div>

        <SNKRSNAv></SNKRSNAv>
        <Outlet></Outlet>
        {/* <SNKRS></SNKRS> */}
    </div>
  )
}

export default AllSNKRSFile