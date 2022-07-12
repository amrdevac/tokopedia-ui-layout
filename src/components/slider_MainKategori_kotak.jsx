import React from "react";
import Slider from "react-slick";

class SliderMainKategoriKotak extends React.Component {
  render() {
    const arrSliderMainKategory = [
      "https://images.tokopedia.net/img/cache/200-square/attachment/2018/8/9/3127195/3127195_76d08c44-8194-4454-9fb0-1e7a64b656aa.jpg.webp",
      "https://images.tokopedia.net/img/cache/200-square/attachment/2018/8/9/3127195/3127195_cfe03d9c-d79f-4327-8247-458429e1b116.jpg.webp",
      "https://images.tokopedia.net/img/cache/200-square/attachment/2018/8/11/3127195/3127195_2883bb63-8f91-4c9c-a423-d68b22e51b78.jpg.webp",
      "https://images.tokopedia.net/img/cache/200-square/attachment/2018/8/9/3127195/3127195_e5b3e074-c897-4cf0-9ced-5572d0538e7c.jpg.webp",
      "https://images.tokopedia.net/img/cache/200-square/attachment/2018/8/9/3127195/3127195_c6f70915-577f-4cd4-834c-daf892265ef0.jpg.webp",
      "https://images.tokopedia.net/img/cache/200-square/attachment/2018/8/9/3127195/3127195_d7c67b76-9ff4-46f9-93a3-ec4be4918439.jpg.webp",
    ];
    const renderSliderMainKategory = arrSliderMainKategory.map((kategory,i) => {
      return (
        <div className="p-2" key={i}>
          <img
            src={kategory}
            alt=""
            className="border m-2 border-gray-200  rounded-lg"
          />
        </div>
      );
    });

    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      autoplay: true,
      slidesToShow: 4,
      slidesToScroll: 4,
    };

    return (
      <div>
        <h1>{this.props.hello}</h1>
        <Slider {...settings}>{renderSliderMainKategory}</Slider>
      </div>
    );
  }
}

export default SliderMainKategoriKotak;
