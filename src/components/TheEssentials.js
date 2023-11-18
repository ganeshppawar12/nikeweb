import React from 'react'
import e1 from './images/essential1.png'
import e2 from './images/essential2.png'
import e3 from './images/essential3.png'
import './TheEssentials.css';



const TheEssentials = () => {
  return (
    <div className='essentialContainer'>
        <h3 className='essentialTitel'>The Essentials</h3>
        <div className='essentialimgContainer' >
            <img src={e1}></img>
            <img src={e2}></img>
            <img src={e3}></img>
        </div>
    </div>
  )
}

export default TheEssentials