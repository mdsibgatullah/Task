import React from 'react'
import { IoLocationSharp } from "react-icons/io5";

function PopularBus() {
  return (
    <section className='popular_bus'>
        <div className="container">
            <h1>Popular Bus Routes</h1>

            {/* frequently_content --------  */}
            <ul>
                <li><IoLocationSharp /> <span>DHAKA-KHAGRACHARI</span></li>
                <li><IoLocationSharp /> <span>DHAKA-BARISAL</span></li>
                <li><IoLocationSharp /> <span>DHAKA-TEKNAF</span></li>
                <li><IoLocationSharp /> <span>DHAKA-KHAGRACHARI</span></li>
                <li><IoLocationSharp /> <span>DHAKA-KHAGRACHARI</span></li>
                <li><IoLocationSharp /> <span>DHAKA-BARISAL</span></li>
                <li><IoLocationSharp /> <span>DHAKA-TEKNAF</span></li>
                <li><IoLocationSharp /> <span>DHAKA-KHAGRACHARI</span></li>
            </ul>
        </div>
    </section>
  )
}

export default PopularBus

