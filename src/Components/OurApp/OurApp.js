import React from 'react'
import app1 from '../../assets/image/app.png'
import store from '../../assets/image/playstore.png'
import qr from '../../assets/image/qr.png'

function OurApp() {
  return (
    <section>
        <div className="container">
            <div className="our_app">
                <div className="app_img">
                    <img src={app1} alt="" />
                </div>
                <div className='app_data'>
                    <h2>
                        download Our App Instant Access via Google Play and Apple Store
                    </h2>
                    <div className='store_app'>
                        <div>
                            <img src={store} alt="" />
                            <img src={store} alt="" />
                        </div>
                        <img src={qr} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default OurApp
