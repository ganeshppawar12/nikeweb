import React from 'react'
import airjordan from '../components/images/airJordan.png'
import './signin.css'
import Nav from '../components/Nav'

const Signin = () => {
  return (
<>
    <Nav></Nav>

    <div className='SignInContainer'>
        <div className='LoginLogo'>
    <img Link="#" src="https://cdn-icons-png.flaticon.com/128/732/732229.png"></img>
    <img src={airjordan}></img>
        </div>
        <div className='EmailContainer'>
            <h2>Enter your email to join us or sign in.</h2>
            <h5>India <span className='change'>Change</span></h5>
        </div>
        <div className='inputBox'>           <input placeholder='Email'></input>
        </div>
        <div className='privecy'>
            <h5>By Continuing, I agree to Nike's <span className='pre'>Privacy Policy.</span> and <span className='pre'>Terms Of Use.</span></h5>
        </div>
        <div className='conbtn'>
            <button>Continue</button>
        </div>
    </div>
    </>
  )
}

export default Signin