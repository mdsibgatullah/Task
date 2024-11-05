import React from 'react'
import logo from '../../assets/image/logo.png'
import { FaSquareFacebook } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaYoutubeSquare } from "react-icons/fa";


function Footer() {
  return (
    <footer>
      <section>
        <div className="container">
          <div className="footer_content">
            <ul>
              <li>
                <div className="nav_logo"><a href="#"><img src={logo} alt="" /></a></div>
              </li>
              <li><p>
                eticketmart.com is a premium online booking portal which allows you 
                to purchase ticket for various bus, launch, airline & hotel 
                room booking services both Internationally & locally across the country.
              </p></li>
            </ul>
            <ul>
              <li><h2>Company</h2></li>
              <li><a href="#">Terms and condition</a></li>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Privacy Notice</a></li>
              <li><a href="#">Cancellation Prolicy</a></li>
              <li><a href="#">How To busy ticket</a></li>
            </ul>
            <ul>
              <li><h2>About etkicketmart</h2></li>
              <li><a href="#">about</a></li>
              <li><a href="#">contact us</a></li>
              <ul className="social">
                <li><a href="#"><FaSquareFacebook /></a></li>
                <li><a href="#"><FaSquareInstagram /></a></li>
                <li><a href="#"><FaYoutubeSquare /></a></li>
              </ul>
            </ul>
          </div>
        </div>
      </section>

      {/* copy write text ------------  */}
      <ul className="version">
        <p>© 2024 eticketmart. All rights reserved. Version 2.0.1</p>
      </ul>
    </footer>
  )
}

export default Footer
