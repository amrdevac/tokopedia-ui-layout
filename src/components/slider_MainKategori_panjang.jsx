import React from "react";
import Slider from "react-slick";

class SliderMainKategoriPanjang extends React.Component {
  render() {
    const arrSliderKategoriLainya = [
      {
        icon: "https://images.tokopedia.net/img/cache/100-square/iEWsxH/2021/10/5/461aa510-5537-41b7-92d4-684d39c9930e.png",
        title: "Kategori",
      },
      {
        icon: "https://images.tokopedia.net/img/cache/100-square/iEWsxH/2021/10/5/a809e96e-3c18-4e63-ac83-8deb9b4c1b1c.png",
        title: "Handphone & Tablet",
      },
      {
        icon: "https://images.tokopedia.net/img/cache/100-square/iEWsxH/2021/10/5/75f2fb8a-a4ca-4cd6-a166-7279daef1d5b.png",
        title: "Top-up & Tagihan",
      },
      {
        icon: "https://images.tokopedia.net/img/cache/100-square/iEWsxH/2021/10/6/b5af3e8e-bc2e-48b4-8d00-6d49ec8f4d50.png",
        title: "Travel & Entertaiment",
      },
      {
        icon: "https://images.tokopedia.net/img/cache/100-square/iEWsxH/2021/10/6/65d13c55-c5c6-4ece-b957-99912c3f8f3c.png",
        title: "Perawatan Hewan",
      },
      {
        icon: "https://images.tokopedia.net/img/cache/100-square/iEWsxH/2021/10/6/b5a8add5-ed3f-400b-8f98-f484d22af153.png",
        title: "Keuangan",
      },
      {
        icon: "https://images.tokopedia.net/img/cache/100-square/iEWsxH/2021/10/5/be48df38-d1e5-48ba-92c4-5644f4c2939b.png",
        title: "Komputer & Lapotp",
      },
    ];

    const renderKategoriLainya = arrSliderKategoriLainya.map(
      (kategoriLainya, index) => {
        return (
          <div key={index}>
            <div className="flex items-center border-2 rounded-full px-2 py-1 gap-2 mx-2">
              <div>
                <img src={kategoriLainya.icon} alt="" width={24} />
              </div>
              <div>{kategoriLainya.title}</div>
            </div>
          </div>
        );
      }
    );

    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      autoplay: true,
      slidesToShow: 5,
      slidesToScroll: 1,
    };

    return (
      <div>
        <Slider {...settings}>{renderKategoriLainya}</Slider>
      </div>
    );
  }
}

export default SliderMainKategoriPanjang;
