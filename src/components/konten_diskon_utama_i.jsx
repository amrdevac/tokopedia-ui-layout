import React from "react";

class KontenDiskon extends React.Component {
  render() {
    const numberFormat = (value) =>
      new Intl.NumberFormat("ID", {
        style: "currency",
        currency: "IDR",
        maximumSignificantDigits: 3,
      }).format(value);

    const arrItemDiskon = [
      {
        activeCampaign: true,
        campaignName: "Selalu OS",
        isOS: true,
        img_produk:
          "https://images.tokopedia.net/img/cache/300-square/VqbcmM/2020/12/21/812435d1-1e9b-40da-b353-35e3fe1c2466.jpg.webp?ect=4g",
        nama_produk: "NATURE REPUBLIC Aloe Vera 92% Soothing Gel 300ml",
        harga_produk: "88000",
        diskon_produk: "10",
        harga_produk_pra_diskon: "98000",
        lokasi_penjualan: "Jakarta Pusat",
        bintang: "4.9",
        terjual: "54 rb+",
      },
      {
        activeCampaign: false,
        campaignName: "",
        img_produk:
          "https://images.tokopedia.net/img/cache/300-square/VqbcmM/2020/11/24/70702ff1-3688-4c7d-8171-5cfc184436a9.jpg.webp?ect=4g",
        nama_produk:
          "SanDisk Ultra MicroSD 32GB A1 120MB/s MicroSDHC UHS-I Micro SD",
        harga_produk: "80000",
        diskon_produk: "41",
        harga_produk_pra_diskon: "135000",
        lokasi_penjualan: "Jakarta Pusat",
        bintang: "4.9",
        terjual: "10 rb+",
      },
      {
        activeCampaign: true,
        campaignName: "Selalu OS",
        img_produk:
          "https://images.tokopedia.net/img/cache/300-square/VqbcmM/2021/4/16/a019b70b-88d8-49b1-a0de-77d64d0327b7.jpg.webp?ect=4g",
        nama_produk: "DT Blender Capsule Cutter Quatre / Blender Kecil",
        harga_produk: "79761",
        diskon_produk: "8",
        harga_produk_pra_diskon: "87650",
        lokasi_penjualan: "Jakarta Pusat",
        bintang: "4.8",
        terjual: "1 rb+",
      },
      {
        activeCampaign: true,
        campaignName: "Warungpedia Tekno",
        img_produk:
          "https://images.tokopedia.net/img/cache/300-square/product-1/2020/2/3/50026084/50026084_6e92bdbf-6925-4568-95b9-9eb58e5ea735_1280_1280.webp?ect=4g",
        nama_produk:
          "Tripod Liger L-3120 Black Edition 1 meter + Sarung dan Holder U",
        harga_produk: "29000",
        diskon_produk: "81",
        harga_produk_pra_diskon: "150000",
        lokasi_penjualan: "Jakarta Pusat",
        bintang: "4.6",
        terjual: "10 rb",
      },
      {
        activeCampaign: true,
        campaignName: "Harga Spesial",
        img_produk:
          "https://images.tokopedia.net/img/cache/300-square/VqbcmM/2021/5/20/4b56ee38-f5ed-4fbd-960c-64b6366db50c.jpg.webp?ect=4g",
        nama_produk:
          "Kingston MicroSD Card Canvas Select Plus Class 10 MicroSDHC 32GB",
        harga_produk: "52000",
        diskon_produk: "50",
        harga_produk_pra_diskon: "105000",
        lokasi_penjualan: "Jakarta Pusat",
        bintang: "4.9",
        terjual: "4 rb+",
      },
    ];

    const checkCampaign = (data) => {
      if (data.activeCampaign) {
        return (
          <div className="text-xs font-semibold text-white px-2 py-1 rounded-br-full bg-gradient-to-r from-purple-800 to-purple-400">
            {data.campaignName}
          </div>
        );
      } else {
        return "";
      }
    };

    const renderItemDiskon = arrItemDiskon.map((item, i) => {
      return (
        <div key={i} className="rounded-xl overflow-hidden bg-white mt-7">
          <div>
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
    return (
      <>
        <h1 className="text-xl text-left font-bold py-3">Official Store</h1>
        <div className="relative">
          <div className="absolute -z-10 left-0 top-0 right-[57rem] rounded-xl bg-gradient-to-bl from-green-500 to-green-900 ">
            <img
              src="https://images.tokopedia.net/img/cache/240/PYbRbC/2022/7/8/037ff89f-ac14-47f6-b034-a3f48e9b10c3.png.webp?ect=4g"
              width={145}
            />
          </div>
        </div>
        <div className="grid grid-cols-6 gap-3  text-left">
          <div className="col-start rounded-xl ">
            <div></div>
          </div>
          {renderItemDiskon}
        </div>
      </>
    );
  }
}

export default KontenDiskon;
