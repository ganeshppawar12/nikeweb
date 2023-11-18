import React, { useState } from 'react'
import {Link} from 'react-router-dom';
import search from './images/search.png'
import airjordan from './images/airJordan.png'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import { IconButton, Menu } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
// import { motion } from "framer-motion"

import './nav.css'


const Nav = () => {
    const [toggle, setToggle] = useState(false);

    const handleToggle = ()=>{
       setToggle(!toggle);
    }
    
 
    
    return(
        <>
        <div className='Subnav'>
            <div className='airJordan'>  <img src={airjordan}></img></div>
            <div className='SubnavLinks'>
                <ul>
                    <li> Find A store |</li>
                    <li> Help |</li>
                    <li> Join Us |</li>
                    <Link to='/login' className='link2'>
                    <li> Sign In |</li>
                    </Link>

                </ul>
            </div>
        </div>
<div className= 'navbar' >
    <Link to='/'>
    <div className='navimg'>
    <img Link="#" src="https://cdn-icons-png.flaticon.com/128/732/732229.png"></img>

    </div>
    </Link>
    {/* <motion.div>
  animate={{ x: 100 }}
  transition={{ delay: 1 }} </motion.div> */}

    <div
  

     className={toggle ? 'hambu' :'options'}>
     <ul > 
      
      <li className='NewFeatured'> <Link className='link' >New & Featured</Link> 
    
      <div className='NewFeaturediteam'>
        <div className='newfearturebox'>
      <div>
        <h4 className='newfeatureheadtag'>New & Featured</h4>
        <ul className='newfeartureboxul'>
            <li>New Arrivals</li>
            <li>Latest Shoes</li>
            <li>Latest Clothing</li>
            <li>SNKRS Launch Calender</li>
            <li>Get 'Em in SNKRS</li>
            <li>Customise with Nike BY You</li>
            <li>Bestsellers</li>
            <li>Member Exclusive</li>
            <li>Top Kicks Under 8 000.00</li>

        </ul>
      </div>
      <div> <h4 className='newfeatureheadtag'>Shop icons</h4>
      <ul className='newfeartureboxul'>
            <li>Air Force 1</li>
            <li>Air Jordan 1</li>
            <li>Air Max</li>
            <li>Dunk</li>
            <li>Cortez</li>
            <li>Blazer</li>
            <li>Pegasus</li>

            </ul></div>


      <div> <h4 className='newfeatureheadtag'>New For Men</h4>
      <ul className='newfeartureboxul'>
            <li>Shoes</li>
            <li>Clothing</li>
            <li>Accessories</li>
            <li>Shop All New</li>

            </ul>
            </div>

      <div> <h4 className='newfeatureheadtag'>New For Woman</h4>
      <ul className='newfeartureboxul'>
        <li>Shoes</li>
            <li>Clothing</li>
            <li>Accessories</li>
            <li>Shop All New</li>
            </ul>
            </div>
            <div> <h4 className='newfeatureheadtag'>New For Kids</h4>
            <ul className='newfeartureboxul'>
        <li>Shoes</li>
            <li>Clothing</li>
            <li>Accessories</li>
            <li>Shop All New</li>
            </ul>
            </div>
            </div>
      </div>

      </li>


      <li className='mentieamcon'>  <Link className='link Men' to="/men">Men</Link>     
      <div className='Meniteam'>
        <div className='Menbox m'>
      <div>
        <h4 className='Menheadtag'> Featured</h4>
        <ul className='menboxul'>
            <li>New Releases</li>
            <li>Bestseller</li>
            <li>Member exclusive</li>
            <li>Jordan</li>
            <li>Retro Running</li>
            <li>Customise with Nike BY You</li>
            <li>Sale</li>
            <li>Running Shoes Finder</li>
            <li>Sustainable Materials</li>

        </ul>
      </div>
      <div> <h4 className='Menheadtag'>Shoes</h4>
      <ul className='menboxul'>
            <li>All Shoes</li>
            <li>Newest Sneakers</li>
            <li>Jordan</li>
            <li>Lifestyle</li>
            <li>Running</li>
            <li>Gym & Training</li>
            <li>Basketball</li>
            <li>Football</li>
            <li>Sandals and slides</li>
            <li>Last Size Available</li>
            <li>Customise with Nike By You</li>
            <li>Top Picks Under 8 000.00</li>

            </ul></div>


      <div> <h4 className='Menheadtag'>Clothing</h4>
      <ul className='menboxul'>
            <li>All Clothing</li>
            <li>Tops and T-shirts</li>
            <li>Shorts</li>
            <li>Pants And Leggings</li>
            <li>Hoodies and Sweatsh</li>
            <li>Jackets and Gilets</li>
            <li>Jerseys and Kits</li>
            <li>Jordan</li>
          </ul>
            </div>

      <div> <h4 className='Menheadtag'>Shop By Sport</h4>
      <ul className='menboxul'>
        <li>Running</li>
            <li>Basketball</li>
            <li>Football</li>
            <li>Golf</li>
            <li>Tennis</li>
            <li>Gym and Training</li>
            <li>Yoga</li>
            <li>Skatebording</li>

            </ul>
            </div>
            <div> <h4 className='Menheadtag'>Jordan</h4>
      <ul className='menboxul'>
        <li>All Jordan</li>
            <li>New Jordan</li>
            <li>Jordan Shoes</li>
            <li>Jordan Clothing</li>
            <li>Jordan Basketball</li>
            <li>Jordan Lifestyle</li>
            <li>Yoga</li>

            </ul>
            </div>
            <div> <h4 className='Menheadtag'>Accessories and Equipment</h4>
            <ul className='menboxul'>
        <li>All Accessories and Equipment</li>
            <li>Bag and Backpacks</li>
            <li>Socks</li>
            <li>Hats and Headwear</li>
            </ul>
            </div>
            <div> <h4 className='Menheadtag'>Shop By Brand</h4>
            <ul className='menboxul'>
        <li>Nike Sportswear</li>
            <li>NikeLab</li>
            <li>Nike By You</li>
            <li>Jordan</li>
            <li>ACG</li>
            <li>NBA</li>
            <li>Nike SB</li>


            </ul>
            </div>
            </div>
      </div>
    </li>

      <li className='mentieamcon'>  <Link className='link Women' to="/weman">Women</Link>
      <div className='Meniteam'>
        <div className='Menbox'>
      <div>
        <h4 className='Menheadtag'> Featured</h4>
        <ul className='menboxul'>
            <li>New Releases</li>
            <li>Bestseller</li>
            <li>Member exclusive</li>
            <li>Jordan</li>
            <li>Retro Running</li>
            <li>Bra and Legging Duos</li>
            <li>Customise with Nike BY You</li>
            <li>Sale</li>
            <li>Find Your Feel-Nike Leggings</li>

            <li>Running Shoes Finder</li>
            <li>Sustainable Materials</li>

        </ul>
      </div>
      <div> <h4 className='Menheadtag'>Shoes</h4>
      <ul className='menboxul'>
            <li>All Shoes</li>
            <li>Newest Sneakers</li>
            <li>Jordan</li>
            <li>Lifestyle</li>
            <li>Running</li>
            <li>Gym & Training</li>
            <li>Basketball</li>
            <li>Football</li>
            <li>Sandals and slides</li>
            <li>Last Size Available</li>
            <li>Customise with Nike By You</li>
            <li>Top Picks Under 8 000.00</li>

            </ul></div>


      <div> <h4 className='Menheadtag'>Clothing</h4>
      <ul className='menboxul'>
            <li>All Clothing</li>
            <li>Performance Essentials</li>
            <li>Tops and T-shirts</li>
            <li>Sports Bras</li>
            <li>Shorts</li>
            <li>Pants And Leggings</li>
            <li>Hoodies and Sweatsh</li>
            <li>Jackets and Gilets</li>
            <li>Skirts and Dresses</li>
            <li>Modest Wear</li>

            <li>Nike Maternity</li>
            <li>Plus Size</li>
          </ul>
            </div>

      <div> <h4 className='Menheadtag'>Shop By Sport</h4>
      <ul className='menboxul'>
        <li>Running</li>
            <li>Basketball</li>
            <li>Football</li>
            <li>Golf</li>
            <li>Tennis</li>
            <li>Gym and Training</li>
            <li>Yoga</li>
            <li>Skatebording</li>

            </ul>
            </div>
          
            <div> <h4 className='Menheadtag'>Accessories and Equipment</h4>
            <ul className='menboxul'>
        <li>All Accessories and Equipment</li>
            <li>Bag and Backpacks</li>
            <li>Socks</li>
            <li>Hats and Headwear</li>
            </ul>
            </div>
            <div> <h4 className='Menheadtag'>Shop By Brand</h4>
            <ul className='menboxul'>
        <li>Nike Sportswear</li>
            <li>NikeLab</li>
            <li>Nike By You</li>
            <li>Jordan</li>
            <li>ACG</li>
            <li>NBA</li>
            <li>Nike SB</li>


            </ul>
            </div>
            </div>
      </div>
      </li>


      <li className='mentieamcon'>  <Link className='link Kids' to="/kids">Kids</Link>
      <div className='Meniteam'>
        <div className='Menbox'>
      <div>
        <h4 className='Menheadtag'> Featured</h4>
        <ul className='menboxul'>
            <li>New Releases</li>
            <li>Newest Sneakers</li>
            <li>Easy On & Off</li>
            <li>Bestseller</li>
            <li>Member exclusive</li>
            <li>Jordan</li>
            <li>Last Size Available</li>
            <li>Bags and Backpacks</li>

             <li>Sale</li>
            
            
        </ul>
      </div>
      <div> <h4 className='Menheadtag'>Boys' Shoes</h4>
      <ul className='menboxul'>
            <li>All Shoes</li>
            <li>Older Boys(7 -14 years)</li>
            <li>Younger Boys(4 -7 years)</li>
            <li>Babies and Toddlers(0-4 years)</li>

            <li>Jordan</li>
            <li>Lifestyle</li>
            <li>Running</li>
            
            <li>Basketball</li>
            <li>Football</li>
            <li>Sandals and slides</li>
            
            </ul></div>


      <div> <h4 className='Menheadtag'>Girls' Shoes </h4>
      <ul className='menboxul'>
      <li>All Shoes</li>
            <li>Older Girls(7 -14 years)</li>
            <li>Younger Girls(4 -7 years)</li>
            <li>Babies and Toddlers(0-4 years)</li>

            <li>Jordan</li>
            <li>Lifestyle</li>
            <li>Running</li>
            
            <li>Basketball</li>
            <li>Football</li>
            <li>Sandals and slides</li>
          </ul>
            </div>

      <div> <h4 className='Menheadtag'>Shop By Sport</h4>
      <ul className='menboxul'>
        <li>Running</li>
            <li>Basketball</li>
            <li>Football</li>
            <li>Golf</li>
            <li>Tennis</li>
            <li>Gym and Training</li>
            <li>Yoga</li>
            <li>Skatebording</li>

            </ul>
            </div>
          
            <div> <h4 className='Menheadtag'>Accessories and Equipment</h4>
            <ul className='menboxul'>
        <li>All Accessories and Equipment</li>
            <li>Bag and Backpacks</li>
            <li>Socks</li>
            <li>Hats and Headwear</li>
            </ul>
            </div>
            <div> <h4 className='Menheadtag'>Kids By Age</h4>
            <ul className='menboxul'>
            <li>Older Kids(7 -14 years)</li>
            <li>Younger Kids(4 -7 years)</li>
            <li>Babies and Toddlers(0-4 years)</li>


            </ul>
            </div>
            <div> <h4 className='Menheadtag'>Shop By Brand</h4>
            <ul className='menboxul'>
        <li>Nike Sportswear</li>
            <li>NikeLab</li>
            <li>Nike By You</li>
            <li>Jordan</li>
            <li>ACG</li>
            <li>NBA</li>
            <li>Nike SB</li>


            </ul>
            </div>
            <div> <h4 className='Menheadtag'>Boys' Clothing</h4>
            <ul className='menboxul'>
        <li>Tops And T-Shirts</li>
            <li>Hoodies And Sweatshirts</li>
            <li>Pants and Leggings</li>
            <li>Shorts</li>
            <li>All Boys' Clothing</li>
      


            </ul>
            </div>

            <div> <h4 className='Menheadtag'>Girls' Clothing</h4>
            <ul className='menboxul'>
        <li>Tops And T-Shirts</li>
        <li>Sports Bras</li>

            <li>Hoodies And Sweatshirts</li>
            <li>Pants and Leggings</li>
            <li>Shorts</li>
            <li>All Boys' Clothing</li>
      


            </ul>
            </div>
            </div>
      </div>
      </li>


      <li className='mentieamcon'>   <Link className='link Sale' to="#">Sale</Link>   
      <div className='Meniteam'>
        <div className='Menbox'>
      <div>
        <h4 className='Menheadtag'>Sale</h4>
        <ul className='menboxul'>
            <li>Shop All Sale</li>
            <li>Shoes Sale</li>
            <li>Clothing Sale</li>
            <li>Accessories</li>
            
            
            
        </ul>
      </div>
      <div> <h4 className='Menheadtag'>Men's Sale</h4>
      <ul className='menboxul'>
            <li>Shoes</li>
            <li>Clothing</li>
                       </ul></div>


      <div> <h4 className='Menheadtag'>Women's Sale</h4>
      <ul className='menboxul'>
      <li>Shoes</li>
            <li>Clothing</li>
          </ul>
            </div>

      <div> <h4 className='Menheadtag'>Kids' Sale</h4>
      <ul className='menboxul'>
      <li>Shoes</li>
            <li>Clothing</li>

            </ul>
            </div>
          
           
        
            </div>
      </div>
      </li>


      <li>  <Link className='link Customise' to="/customise">Customise</Link></li>
      <li>  <Link to='/feed' className='link SNKRS'>SNKRS</Link></li>


      
     </ul>
     </div>
    

     <div className='rightside'>
     <div className='search'>
      <img className='searchImg' src={search}></img>
      <input className='searchinput' placeholder=' Search'></input>
      </div>
      <div className='Cart'>
        <Link to='/login'>
        <IconButton className='hearCart'>
     <FavoriteBorderIcon className='hearCart'></FavoriteBorderIcon>
     </IconButton>
     </Link>
     <Link to="/cart">
     <IconButton >
     <WorkOutlineIcon className='iconcart'></WorkOutlineIcon>
     </IconButton>
     </Link>

 <Link to='/login'>   <div><PersonOutlineIcon className='profile'></PersonOutlineIcon></div></Link>  
     <div className="hamburger"onClick={handleToggle} >
         {toggle ?<CloseIcon className='ham'></CloseIcon>:<MenuIcon className='ham'></MenuIcon>}
        


      </div>
      </div>
      </div>
      

    
      
  </div>
  {/* <div style={{backgroundColor:'rgb(154, 154, 154)'}}>
        <h1 style={{textAlign:'center'}}>Nike</h1>
     </div> */}
  </>
  )
}

export default Nav