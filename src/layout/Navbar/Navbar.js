import React from "react";
import { useState } from "react";
import '../../App.css';
import { FaTimes } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import "./Navbar.css";
import logo from '../../assets/icons/logo.png'
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa"
import { GrInstagram } from "react-icons/gr"


const Navbar = () => {

  const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    const scrollToTop = () => {
      window.scrollTo(0, 0)
    }

  return (
    <div className="navigation">
      <div className="nav">
        <div className="navi">
          <div >
            <img className="logo" src={logo} alt="logo"/>
          </div>

          <div className='hamburger' onClick={handleClick}>
              {click ? (<FaTimes size={30} style={{color: 'white'}} />
              ) : (
                  <FaBars size={30} style={{color: 'white'}} />
              )}
          </div>
        </div>

        <div className={click ? 'menu' : 'menu active'}>
          <ul className="menu">
            <li >
              <Link to="/" className="menu-links" onClick={scrollToTop}>НАЧАЛО</Link>
            </li>
            <li>
            <Link to="/future-building" className="menu-links" onClick={scrollToTop}>БЪДЕЩИ ПРОЕКТИ</Link>
            </li>
            <li>
            <Link to="/realised-buildings" className="menu-links" onClick={scrollToTop}>РЕАЛИЗИРАНИ ПРОЕКТИ</Link>
            </li>
            </ul>
        </div>
      </div>
 
      
      
    
  
      <div className="company-name">
            <div className="company-name-tel">
              <p className="company-name-text">МВД БАЛКАНИКА СТРОЙ</p>

              <div className="company-tel">
                <p>За Контакт:</p>
                <a className="company-tel-link" href="tel:+0893682022">0893 682 022</a> 
                <a className="company-tel-link" href="tel:+0893682022">0876 668 867</a>    
              </div>
            </div>

            <div className="social-icons">
                <FaFacebookF/>
                <GrInstagram/>
            </div>
            
      </div>

    </div>

  );
};

export default Navbar;
