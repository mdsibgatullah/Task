import React from 'react'

import airline1 from '../../assets/image/air-line.png';
import airline2 from '../../assets/image/air-line2.jpeg';
import airline3 from '../../assets/image/air-line3.jpeg';

function TopAir() {
  return (
    <>
    <section className='top_air'>
        <div className="container">
            <h1>Top Rated Airlines</h1>
            <ul>
                <li>
                    <div className="airline_img">
                        <img src={airline1} alt="" />
                    </div>
                    <p>Spice jet</p>
                </li>
                <li>
                    <div className="airline_img">
                        <img src={airline2} alt="" />
                    </div>
                    <p>Malaysia Airlines</p>
                </li>
                <li>
                    <div className="airline_img">
                        <img src={airline3} alt="" />
                    </div>
                    <p>Malaysia Airlines</p>
                </li>
                <li>
                    <div className="airline_img">
                        <img src={airline1} alt="" />
                    </div>
                    <p>Spice jet</p>
                </li>
                <li>
                    <div className="airline_img">
                        <img src={airline2} alt="" />
                    </div>
                    <p>Malaysia Airlines</p>
                </li>
                <li>
                    <div className="airline_img">
                        <img src={airline3} alt="" />
                    </div>
                    <p>Malaysia Airlines</p>
                </li>
                <li>
                    <div className="airline_img">
                        <img src={airline1} alt="" />
                    </div>
                    <p>Spice jet</p>
                </li>
                <li>
                    <div className="airline_img">
                        <img src={airline2} alt="" />
                    </div>
                    <p>Malaysia Airlines</p>
                </li>
                <li>
                    <div className="airline_img">
                        <img src={airline3} alt="" />
                    </div>
                    <p>Malaysia Airlines</p>
                </li>
            </ul>
        </div>
    </section>
    </>
  )
}

export default TopAir
