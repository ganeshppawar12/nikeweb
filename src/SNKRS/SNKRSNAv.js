import React, { useState } from "react";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import snkrsnikelogo from "../components/images/SNKRSnike.png";
import ViewModuleIcon from "@mui/icons-material/ViewModule";
import ViewCompactIcon from "@mui/icons-material/ViewCompact";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import {toggleTheme, toggleThme} from '../Features/ThemeSlice';
import { useDispatch, useSelector } from "react-redux";

const SNKRSNAv = () => {
  const [toggle, setToggle] = useState(false);
  const dispatch = useDispatch();
  const lightTheme = useSelector((state) => state.themeKey);

  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <div>
      <div className="SNKRSsubNAv">
        <Link to="/" className="link2">
          <div className="visitNike">
            <p>
              <ArrowBackIosNewIcon className="arrowVistnike"></ArrowBackIosNewIcon>{" "}
              Visit Nike.com
            </p>
          </div>
        </Link>
        <div className="SNKRSInfo">
          <ul>
            <Link to="/login" className="link2">
              {" "}
              <li>Join/Log in</li>
            </Link>
            <li>Help</li>
            <Link to="/cart" className="link2 SnkrsCart">
              <li>
                <ShoppingCartIcon></ShoppingCartIcon>
              </li>
            </Link>
            <li>
              <LocationOnIcon></LocationOnIcon>india
            </li>
          </ul>
        </div>
      </div>

      <div className="SNKRSLogosmall">
        <div className="SNKRSLogosmallimg">
          <img src={snkrsnikelogo}></img>
          <p> SNKRS</p>
        </div>

        <div className="SNKRSSmallNavbarCart">
          <Link to="/cart" className="link2 SnkrsCart">
            <p >
              <ShoppingCartIcon className="SmallCart"></ShoppingCartIcon>
            </p>
          </Link>
          <div className="hamburger" onClick={handleToggle}>
            {toggle ? (
              <CloseIcon className="ham"></CloseIcon>
            ) : (
              <MenuIcon className="ham"></MenuIcon>
            )}
          </div>

          <div className={toggle ? "samllUlList" : "smallullist2"}>
            <ul>
              <Link to="/login">
                {" "}
                <li>Join/Log in</li>
              </Link>
              <Link to="/">
                {" "}
                <li>Visit Nike.com</li>
              </Link>
              <li>Help</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="SNKRSNavbar">
        <div className="SNKRSLogo">
          <img src={snkrsnikelogo}></img>
          <p> SNKRS</p>
        </div>
        <div className="SNKRSMenu">
          <ul>
            <Link to="/feed" className="link2">
              {" "}
              <li>Feed</li>
            </Link>
            <Link to="/instock" className="link2">
              <li>in Stock</li>
            </Link>
            <Link to="/upcoming" className="link2">
              {" "}
              <li>Upcoming</li>
            </Link>
          </ul>
        </div>
        <div className="DisplayMode" onClick={() => {
            dispatch(toggleTheme());
          }}>
        {/* //  onClick={handleToggle}> */}
          
          {/* {lightTheme ?    <ViewModuleIcon   ></ViewModuleIcon> : <ViewCompactIcon></ViewCompactIcon>} */}
          {/* <ViewModuleIcon></ViewModuleIcon> */}
          
 
         
            {lightTheme && <ViewModuleIcon/>}
            {!lightTheme && <ViewCompactIcon />} 

        </div>
      </div>
    </div>
  );
};

export default SNKRSNAv;
