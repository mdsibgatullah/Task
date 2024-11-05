import React from 'react'
import logo from '../../assets/image/logo.png';
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
  return (
    <>
        {/* ---------- header desktop */}
        <header>
            <div className='container'>
                <nav>
                    {/* nav logo  */}
                    <div className="nav_logo"><a href='index.html'><img src={logo} alt="logo" /></a></div>

                    {/* nav menu  */}
                    <ul className='nav_menu'>
                        <li><IoBusOutline /><span>bus</span></li>
                        <li><PiAirplaneTilt /><span>air</span></li>
                        <li><PiTrain /><span>train</span></li>
                        <li><LiaHotelSolid /><span>hotel</span></li>
                        <li><RiVisaFill /><span>visa</span></li>
                        <li><IoFlashOffOutline /><span>flash deals</span></li>
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
                            <p><span>Dashbord</span></p>
                        </li>
                        <li>
                            <LiaBusinessTimeSolid title='B2B-A' />
                            {/* <span>b2b agent</span> */}
                        </li>
                        <li>
                            <LuUserCircle title='User' />
                        {/* <span>user</span> */}
                        </li>
                    </ul>

                </nav>
            </div>
        </header>
        
        {/* --------- mobail header */}
        <div className="mobail_header">
            <nav>
                <ul>
                    <li><IoSearchOutline /> <span>search</span></li>
                    <li><RxDashboard /> <span>dashboard</span></li>
                    <li><IoFlashOffOutline /> <span>deals</span></li>
                    <li><RiMenuUnfold2Line /> <span>more</span></li>
                </ul>
            </nav>
        </div>
    </>
  )
}

export default Header
