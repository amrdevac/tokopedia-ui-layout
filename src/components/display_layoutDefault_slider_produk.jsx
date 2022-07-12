import React from "react";
import Slider from "react-slick";

class DisplayLayoutDefaultSliderProduk extends React.Component {
  render() {
    const item_produk = this.props.produk;
    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      autoplay: true,
      slidesToShow: 6,
      slidesToScroll: 5,
    };

    const numberFormat = (value) =>
      new Intl.NumberFormat("ID", {
        style: "currency",
        currency: "IDR",
        maximumSignificantDigits: 3,
      }).format(value);

    const checkCampaign = (data) => {
      if (data.activeCampaign) {
        return (
          <div className="text-xs font-semibold text-white px-2 py-1 rounded-br-full bg-gradient-to-r from-purple-800 to-purple-400">
            {data.campaignName}
          </div>
        );
      }
    };

    const renderItemDiskon = item_produk.map((item, index) => {
      return (
        <div className=" mt-7" key={index}>
          <div className="m-2 rounded-lg overflow-hidden shadow-lg shadow-gray-300 bg-white ">
            <img src={item.img_produk} />
            <div>
              {() => checkCampaign(item)}
              <div className="p-1">
                <div className="text-sm line-clamp-2 text-red-600">
                  {item.nama_produk}
                </div>
                <div className="font-bold">
                  {numberFormat(item.harga_produk)}
                </div>
                <div className="flex my-1 text-xs items-center gap-2 font-semibold">
                  <div className="bg-red-300 p-1 rounded-md text-red-600">
                    {item.diskon_produk}%
                  </div>
                  <div className="text-gray-400">
                    <del>{numberFormat(item.harga_produk_pra_diskon)}</del>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <div>
                    <img
                      src="https://images.tokopedia.net/img/official_store_badge.png"
                      width={16}
                    />
                  </div>
                  <div className="text-xs text-gray-500 ">
                    {item.lokasi_penjualan}
                  </div>
                </div>
                <div className="flex my-1 items-center gap-1 text-gray-500">
                  <div>
                    <img
                      src="https://assets.tokopedia.net/assets-tokopedia-lite/v2/zeus/kratos/9527c778.svg"
                      width={16}
                    />
                  </div>
                  <div className="text-xs ">
                    {item.bintang} | Terjual {item.terjual}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    });

    return <Slider {...settings}>{renderItemDiskon}</Slider>;
  }
}

export default DisplayLayoutDefaultSliderProduk;
