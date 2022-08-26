import React, { Fragment } from 'react'
import Slider from 'react-slick';

const ReactSlider = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
    };
    
  return (
    <Fragment>
        <Slider {...settings}>
            <div>
                <h3>Lorem ipsum dolor sit amet.</h3>
            </div>
            <div>
                <h3>hadjcjhknkjbhj</h3>
            </div>
            <div>
                <h3>Lorem ipsum dolor.</h3>
            </div>
            <div>
                <h3>Another important stuff</h3>
            </div>
            <div>
                <h3>gwhklje;ksfd</h3>
            </div>
        </Slider>
    </Fragment>
  )
}

export default ReactSlider