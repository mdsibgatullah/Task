import React from 'react'
import popular1 from '../../assets/image/popular_hotel1.jpg'


function Frequently() {

  return (
    <div>
      <section className='flash_deals'>
        <div className="container">
            <h1>Frequently Traveled Bus Routes</h1>

            {/* frequently_content --------  */}
            <ul className='frequently_content flash_content'>
                <li className='item'>
                    <div className="img">
                        <img src={ popular1 } alt="" />
                        <h2>Dhaka to Cox's Bazar</h2>
                    </div>
                </li>
                <li className='item'>
                    <div className="img">
                        <img src={ popular1 } alt="" />
                        <h2>Dhaka to Cox's Bazar</h2>
                    </div>
                </li>
                <li className='item'>
                    <div className="img">
                        <img src={ popular1 } alt="" />
                        <h2>Dhaka to Cox's Bazar</h2>
                    </div>
                </li>
            </ul>
        </div>
      </section>
    </div>
  )
}

export default Frequently
