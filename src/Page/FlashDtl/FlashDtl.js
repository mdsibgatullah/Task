import React from 'react';

import hero1 from '../../assets/image/flashdeal1.jpg';
import hero2 from '../../assets/image/flashdtl1.jpeg';

function FlashDtl() {
  return (
    <>
    <section className='flash_dtl'>
        <div className="dtl_header"
          style={{
            backgroundImage: `url(${hero2})`,
          }}
          >
        </div>
        <div className="container">
          <h1 className="section_title">flash details</h1>

        {/* flash data--------------- */}
          <div className="flash_data">
            <div className="detail">
              <h2>Imperial Express Deal - Dhaka to Cox's Bazar</h2>

              {/* valid date ------------ */}
              <div className="date">
                <div className="valid">
                  <p>valid form</p>
                  <h3>4th Nov, 2024</h3>
                </div>
                <div className="valid">
                  <p>valid form</p>
                  <h3>4th Nov, 2024</h3>
                </div>
              </div>

              {/* about offer------------ */}
              <div className="about_offer">
                <h2>about The offer: </h2>
                <p>Dhaka to Cox's Bazar Imperial Bus Tickets at ৳400 Discount</p>
              </div>

              {/* offer details ------------ */}
              <div className="offer_list">
                <ul>
                  <li><p>bdtickets Flash Discount Campaign - Imperial Express Dhaka to Cox's Bazar at ৳400 Discount</p></li>
                  <li><p>Terms & Conditions are below:</p></li>
                  <li>To get this offer no Coupon Code is required</li>
                  <li>Valid till <b>15th November, 2024</b></li>
                  <li>Travel/Journey Time can be anywhere in between <b>30 November, 2024</b></li>
                  <li>This offer is valid only for bus ticket services from <b>Imperial Express Dhaka to Cox's Bazar Tickets</b></li>
                  <li>Offer can be availed only through <b>bdtickets website & mobile application, call center, and through your nearest bdtickets agent outlet </b></li>
                  <li><p>*bdtickets reserves the right to change these terms and conditions at any time without prior notice. For any support call 16460.</p></li>
                  <li><h4>*bdtickets reserves the right to change these terms and conditions at any time without prior notice</h4></li>
                </ul>
                <div className="offer_btn">
                  <button>Buy Tickets With Discount</button>
                </div>
              </div>
            </div>

            {/* ------------- more offer  */}
            <div className="more_offer">
              <h2>More Offer</h2>
              <ul>
                <li><a href="bus"><img src={hero1} alt="" /></a></li>
                <li><a href="bus"><img src={hero1} alt="" /></a></li>
                <li><a href="bus"><img src={hero1} alt="" /></a></li>
              </ul>
            </div>
          </div>
        </div>
    </section>
    </>
  )
}

export default FlashDtl
