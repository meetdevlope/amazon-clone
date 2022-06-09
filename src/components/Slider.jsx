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
            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wearables/Unrec/Hero/Smartwatches/Under/1999/Smartwatches_Homepage_DesktopHeroTemplate_3000x1200._CB634570851_.jpg" alt="Banner" />
          </div>
          <div>
            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/WLA/June/MonsoonSale/GWHero/PocketFriendly/D47281209_WLA_Monsoon_Sale_DesktopTallHero_3000x1200_2._CB636244778_.jpg" alt="Banner" />
          </div>
          <div>
            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Beauty/GW/June/MonsoonCarnival/Homepage_DesktopHero-3000x1200-skincare._CB636240735_.jpg" alt="Banner" />
          </div>
          <div>
            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonSaheli/Gift/sec2/2x._CB646912821_.jpg" alt="Banner" />
          </div>
          <div>
            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/media/MonsoonMiniART_June/Homepage_DesktopHeroTemplate_3000x1200_Unrec_2x._CB636267028_.jpg" alt="Banner" />
          </div>
          <div>
            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2021/X-site/SingleTitle/KGFChapter2file/Alllanguages/3000x1200_Hero-Tall_NP._CB635770012_.jpg" alt="Banner" />
          </div>
        </Slider>
      </div>
    );
  }
}
