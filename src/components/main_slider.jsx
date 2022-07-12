import React from "react";
import Slider from "react-slick";

class MainSlider extends React.Component {
  render() {
    const arrSlider = [
      "https://images.tokopedia.net/img/cache/1208/NsjrJu/2022/7/7/80507a63-2e1b-4bd2-b375-ad58a5842d3c.jpg.webp?ect=3g",
      "https://images.tokopedia.net/img/cache/1208/NsjrJu/2022/7/8/faad40c0-671b-4cd0-9f5a-e830071ba512.jpg.webp?ect=3g",
    ];
    const renderSlider = arrSlider.map((slider, i) => {
      return <img key={i} className="rounded-xl" src={slider} alt="" />;
    });
    const settings = {
      dots: true,
      infinite: true,
      speed: 300,
      autoplay: true,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div className="py-4 ">
        <Slider {...settings}>{renderSlider}</Slider>
      </div>
    );
  }
}
export default MainSlider;
