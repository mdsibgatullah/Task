import React from 'react'
import img1 from '../../assets/image/hero1'

export default function SlideImg() {
  return (
    <div>
        <div class="slider-container">
            <div class="slider">
                <div class="slide">
                    <img src={img1} alt="Image 4"/>
                    <div class="caption">Caption for Image 1</div>
                </div>
                <div class="slide">
                    <img src={img1} alt="Image 4"/>
                    <div class="caption">Caption for Image 2</div>
                </div>
                <div class="slide">
                    <img src={img1} alt="Image 4"/>
                    <div class="caption">Caption for Image 3</div>
                </div>
                <div class="slide">
                    <img src={img1} alt="Image 4"/>
                    <div class="caption">Caption for Image 4</div>
                </div>
            </div>
        </div>
    </div>
  )
}
