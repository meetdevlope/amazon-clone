import React, { Component } from 'react';
import Slider from 'react-slick';

export default class AutoPlayMethods extends Component {
  constructor(props) {
    super(props);
    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
  }

  play() {
    this.slider.slickPlay();
  }

  pause() {
    this.slider.slickPause();
  }

  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
    };

    return (
      <div className="flex justify-center">
        <Slider className="slider-div w-full flex-1" {...settings}>
          <div>
            <img src="/Assets/B1.jpeg" alt="Banner" />
          </div>
          <div>
            <img src="/Assets/B2.jpg" alt="Banner" />
          </div>
          <div>
            <img src="/Assets/B3.jpg" alt="Banner" />
          </div>
          <div>
            <img src="/Assets/B4.jpg" alt="Banner" />
          </div>
          <div>
            <img src="/Assets/B5.jpg" alt="Banner" />
          </div>
          <div>
            <img src="/Assets/B6.jpg" alt="Banner" />
          </div>
        </Slider>
      </div>
    );
  }
}
