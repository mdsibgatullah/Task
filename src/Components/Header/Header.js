import React from 'react'
import logo from '../../assets/image/logo.png';
import { FaBus } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";
import { PiAirplaneTilt } from "react-icons/pi";
import { PiTrain } from "react-icons/pi";
import { LiaHotelSolid } from "react-icons/lia";
import { IoBusOutline } from "react-icons/io5";
import { RiVisaFill } from "react-icons/ri";
import { IoFlashOffOutline } from "react-icons/io5";
import { LuUserCircle } from "react-icons/lu";
import { LiaBusinessTimeSolid } from "react-icons/lia";





const Header = () => {
  return (
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
                            <li><span>call 16460</span></li>
                            <li><span>02348503894</span></li>
                        </ul>
                    </li>
                    <li>
                        <p><span>Dashbord</span></p>
                    </li>
                    <li>
                        <LiaBusinessTimeSolid />
                        <span>b2b agent</span>
                    </li>
                    <li><LuUserCircle /><span>user</span></li>
                    {/* <li> <LuUserCircle /> </li> */}
                </ul>

            </nav>
        </div>
    </header>
  )
}

export default Header
