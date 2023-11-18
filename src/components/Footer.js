import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import PlaceIcon from '@mui/icons-material/Place';
import './footer.css'

const Footer = () => {
  return (

    <div className='footercont' style={{background:'black'}}>
    <div className='footer'>

        <div className='footerLeftSide'>
            <div className='information'>
                <ul>
                    <li>FIND A STORE</li>
                    <li>BECOME A MEMBER</li>
                    <li>Send Us Feedback</li>
                </ul>
            </div>
            <div className='getHelp'>

                <ul>
            <p className='help'>GET HELP</p>
                    <li>Order Status</li>
                    <li>Delivery</li>
                    <li>Return</li>
                    <li>Payment Option</li>
                    <li>Contact Us On Nike.com inquiries</li>
                    <li>Contact Us On All Other inquiries</li>
                </ul>
            </div>
            <div className='AboutUs'>
                <ul>
            <p className='help'>ABOUT NIKE</p>

                    <li>News</li>
                    <li>Careers</li>
                    <li>Inventors</li>
                    <li>Sustainability</li>
                    <li>Contact Us On All Other inquiries</li>

                </ul>
            </div>
        </div>
        <div  className='footerRightSide'>
          <TwitterIcon className='Social'></TwitterIcon>
          <FacebookIcon className='Social'></FacebookIcon>
          <YouTubeIcon className='Social'></YouTubeIcon>
          <InstagramIcon className='Social'></InstagramIcon>
        </div>
    </div>
    <div className='subFooter'>

        <div className='place'>
           
            <p > <span className='point'><PlaceIcon></PlaceIcon> </span> <span className='india'>India</span> <span className='reserved'>© 2023 Nike, Inc. All Right Reserved</span> </p>
          
        </div>
        {/* <div className="GuidesInfo">
        <div>
        <ul>
        <li>Nike Air</li>
        <li>Nike Air</li>
        <li>Nike Air</li>
        <li>Nike Air</li>

        </ul></div>
        <div></div>
        <div></div>

        </div> */}
        <div className='Otherinfo'>
            <ul>
                <li className='guides'>Guides</li>
                <li>Terms of Sale</li>
                <li>Terms of Use</li>
                <li>Nike Privacy Policy</li>

            </ul>
        </div>
    </div>
    </div>
  )
}

export default Footer