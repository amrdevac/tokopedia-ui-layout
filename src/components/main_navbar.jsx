import React from "react";

class MainNavbar extends React.Component {
  render() {
    const arrPencarianTrending = [
      "Meja Kayu",
      "Tempered Glass Iphone 11",
      "New Era",
      "Lem Sepatu",
      "Redmi Note 10",
      "Kardus Besar",
    ];

    const renderArrPencarianTrending = arrPencarianTrending.map(
      (trending, i) => {
        return (
          <div
            key={i}
            className="hover:text-green-500 font-semibold cursor-pointer  transition  duration-100 ease-in"
          >
            {trending}{" "}
          </div>
        );
      }
    );

    return (
      <div className="shadow-md shadow-black-300  py-3 sticky top-0 z-10 bg-white">
        <div className="flex p-5  items-center gap-4 justify-between ">
          <div id="wrapper-header" className="warung-pedia-font-style">
            Warungpedia
          </div>
          <div className="text-gray-500">Kategori</div>
          <div className="flex-1">
            <div className="input-group">
              <input
                type="text"
                className="input-sm focus:outline-none focus:border-green-300  border-2 rounded-lg w-full "
                placeholder="Cari Produk"
              />
              <button className="btn-sm btn btn-custom-secondary">
                <i className="fa fa-search" aria-hidden="true"></i>
              </button>
            </div>
          </div>
          <div>
            <i className="fa fa-cart-plus" aria-hidden="true"></i>
          </div>
          <div className="border-r-2 border-gray-300 py-2"></div>
          <div>
            <div className="grid grid-cols-2 gap-2 justify-end">
              <div>
                <button className="btn btn-sm btn-outline btn-primary normal-case">
                  Masuk
                </button>
              </div>
              <div>
                <button className="btn btn-sm btn-primary text-white normal-case">
                  Daftar
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="text-xs absolute bottom-2 left-[18.6rem]">
          <div className="flex gap-5 text-gray-500">
            {renderArrPencarianTrending}
          </div>
        </div>

        <div className="text-xs absolute bottom-2 right-10">
          <div className="flex gap-5 text-gray-500">
            <div className="flex items-center">
              <i className="fa fa-map-pin mr-2" aria-hidden="true"></i>
              <div>Dikirim Ke</div>
            </div>
            <div className="font-bold flex  gap-1 cursor-pointer items-center">
              <div>Jakarta Selatan</div>
              <div>
                <i
                  className="fa fa-ellipsis-h text-gray-400 text-[0.5rem]"
                  aria-hidden="true"
                ></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MainNavbar;
