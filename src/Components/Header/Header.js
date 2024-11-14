import React, { useState, useRef, useEffect } from 'react';

import { NavLink } from 'react-router-dom';


import logo from '../../assets/image/logo.png';
import login from '../../assets/image/login-img.jpg';


import { IoMdCall } from "react-icons/io";
import { PiAirplaneTilt } from "react-icons/pi";
import { PiTrain } from "react-icons/pi";
import { LiaHotelSolid } from "react-icons/lia";
import { IoBusOutline } from "react-icons/io5";
import { RiVisaFill } from "react-icons/ri";
import { IoFlashOffOutline } from "react-icons/io5";
import { LuUserCircle } from "react-icons/lu";
import { LiaBusinessTimeSolid } from "react-icons/lia";
import { RxDashboard } from "react-icons/rx";
import { IoSearchOutline } from "react-icons/io5";
import { RiMenuUnfold2Line } from "react-icons/ri";

const Header = () => {
    
    const [isActive, setIsActive] = useState(false);
    const dropdownRef = useRef(null);
    const handleClick = () => {
        setIsActive(!isActive);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
          if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsActive(false);
          }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
          document.removeEventListener("mousedown", handleClickOutside);
        };
      }, []);


    const [activeForm, setActiveForm] = useState('login');
    
    const handleFormToggle = (form) => {
        setActiveForm(form); 
    }

    const [showPasswordField, setShowPasswordField] = useState(false);
    const togglePasswordField = () => {
      setShowPasswordField(!showPasswordField); 
    };
  return (
    <>
        {/* ---------- header desktop */}
        <header>
            <div className='container'>
                <nav>
                    {/* nav logo  */}
                    <div className="nav_logo"><NavLink to="/"><img src={logo} alt="logo" /></NavLink></div>

                    {/* nav menu  */}
                    <ul className='nav_menu'>
                        <li>
                            <NavLink to="/Bus">
                                <IoBusOutline /><span>bus</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/air">
                                <PiAirplaneTilt /><span>air</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="train">
                                <PiTrain /><span>train</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/hotel">
                                <LiaHotelSolid /><span>hotel</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/Bus">
                                <RiVisaFill /><span>visa</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/FlashBlog">
                                <IoFlashOffOutline /><span>flash deals</span>
                            </NavLink>
                        </li>
                    </ul>

                    <ul className='nav_menu2'>
                        <li className='call'>
                            <button><IoMdCall /></button>
                            <ul>
                                <li>call 16460</li>
                                <li>02348503894</li>
                            </ul>
                        </li>
                        <li>
                            <NavLink to="/Bus">
                            <p><span>Dashbord</span></p>
                            </NavLink>
                        </li>
                        <li>
                            
                            <NavLink to="/Bus">
                            <LiaBusinessTimeSolid title='B2B-A' />
                            {/* <span>b2b agent</span> */}
                            </NavLink>
                        </li>
                        {/* ------------- login/singup  */}
                        <li className={`drop ${isActive ? 'active' : ''}`} ref={dropdownRef}>
                            <NavLink  id='logMenu' onClick={handleClick}>
                                <LuUserCircle title='User' />
                            </NavLink>
                            {isActive && <div className="dropdown">
                                <div className="drop_header">
                                    <h4 
                                        id="logIn" 
                                        className={activeForm === 'login' ? 'active' : ''}
                                        onClick={() => handleFormToggle('login')}
                                    >
                                        Login
                                    </h4>
                                    <h4 
                                        id="singUp" 
                                        className={activeForm === 'signup' ? 'active' : ''}
                                        onClick={() => handleFormToggle('signup')}
                                    >
                                        SignUp
                                    </h4>
                                </div>
                                {/* ----------- drop body  */}
                                <div className="drop_body">
                                    {/* ------- login */}
                                    {activeForm === 'login' && (
                                    <div className="login">
                                        <form>
                                            <div className="form_group">
                                                <input type="text" placeholder='Phone / Email' required />
                                            </div>
                                            <div className="form_group" style={{ display: showPasswordField ? 'block' : 'none' }}>
                                                <input type="password" placeholder='Password' required />
                                            </div>
                                            <button type="submit">Submit</button>
                                        </form>
                                        <p>Have a password? <span onClick={togglePasswordField}>Click Here</span></p>
                                        <p>Need an account? <span onClick={() => handleFormToggle('signup')}>Sign Up</span></p>

                                        <div className="img">
                                            <img src={login} alt="" />
                                        </div>
                                    </div>
                                    )}

                                    {activeForm === 'signup' && (
                                    <div className="singup">
                                        <form>
                                            <div className="form_group">
                                                <input type="number" placeholder='Phone' required />
                                            </div>
                                            <div className="form_group">
                                                <input type="text" placeholder='First Name' required />
                                            </div>
                                            <div className="form_group">
                                                <input type="text" placeholder='Last Name' required />
                                            </div>
                                            <div className="form_group">
                                                <input type="email" placeholder='Email' required />
                                            </div>
                                            <button type="submit">Submit</button>
                                        </form>
                                        <p>Have an account? <span onClick={() => handleFormToggle('login')}>Login</span></p>
                                    </div>
                                    )}
                                </div>
                            </div>}
                        </li>
                    </ul>

                </nav>
            </div>
        </header>
        
        {/* --------- mobail header */}
        <div className="mobail_header">
            <nav>
                <ul>
                    <li>
                        <NavLink to="/Bus">
                            <IoSearchOutline /> <span>search</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/Bus">
                            <RxDashboard /> <span>dashboard</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/Bus">
                            <IoFlashOffOutline /> <span>deals</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/Bus">
                            <RiMenuUnfold2Line /> <span>more</span>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    </>
  )
}

export default Header
