import { useState } from "react";
import "./App.css";
import MainNavbar from "./components/main_navbar";
import MainSlider from "./components/main_slider";
import MainKategori from "./components/main_kategori";
import SliderMainKategoriKotak from "./components/slider_MainKategori_kotak";
import SliderMainKategoriPanjang from "./components/slider_MainKategori_panjang";
import TabMainKategoriUtama from "./components/tab_MainKategori_utama";
import KontenDiskonI from "./components/konten_diskon_utama_i";
import DisplayLayoutDefaultSliderProduk from "./components/display_layoutDefault_slider_produk";

function App() {
  const [count, setCount] = useState(0);

  const arrItemDiskon = [
    {
      activeCampaign: false,
      campaignName: "Terlaris",
      img_produk:
        "https://images.tokopedia.net/img/cache/300-square/VqbcmM/2021/11/4/452d0d0c-7be6-4493-b4a2-9b6ec14ddea7.jpg.webp?ect=4g",
      nama_produk: "FITBIT Charge 5 Lunar White/Soft Gold",
      harga_produk: "2899000",
      diskon_produk: "12",
      harga_produk_pra_diskon: "3299000",
      lokasi_penjualan: "Jakarta Pusat",
      bintang: "4.8",
      terjual: "70 +",
    },
    {
      activeCampaign: false,
      campaignName: "",
      img_produk:
        "https://images.tokopedia.net/img/cache/300-square/VqbcmM/2021/12/24/ace6d619-b17c-4326-ae75-d3eb2b5e2aab.jpg.webp?ect=4g",
      nama_produk:
        "Acome Data Cable Micro-USB Fast Charging 2.4A 100cm Garansi 1 thn ADM",
      harga_produk: "9999",
      diskon_produk: "71",
      harga_produk_pra_diskon: "35000",
      lokasi_penjualan: "Jakarta Pusat",
      bintang: "4.9",
      terjual: "2 rb+",
    },
    {
      activeCampaign: true,
      campaignName: "Selalu OS",
      img_produk:
        "https://images.tokopedia.net/img/cache/300-square/VqbcmM/2022/4/13/1ec3276b-b405-4bc1-8b5c-84a96f7d59aa.jpg.webp?ect=4g",
      nama_produk:
        "PowerBank ROBOT 20000mah RT22 Dual Port Input & Output Original Led",
      harga_produk: "264900",
      diskon_produk: "24",
      harga_produk_pra_diskon: "350000",
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
        "https://images.tokopedia.net/img/cache/300-square/hDjmkQ/2022/5/3/e2d9fe7b-151f-4806-8cf1-6745c189f383.jpg.webp?ect=4g",
      nama_produk: "Aukey Charger 2 Port 12W with AiQ - 500284",
      harga_produk: "119000",
      diskon_produk: "42",
      harga_produk_pra_diskon: "725000",
      lokasi_penjualan: "Jakarta Pusat",
      bintang: "4.9",
      terjual: "4 rb+",
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
      campaignName: "Selalu OS",
      img_produk:
        "https://images.tokopedia.net/img/cache/300-square/VqbcmM/2022/4/13/1ec3276b-b405-4bc1-8b5c-84a96f7d59aa.jpg.webp?ect=4g",
      nama_produk:
        "PowerBank ROBOT 20000mah RT22 Dual Port Input & Output Original Led",
      harga_produk: "264900",
      diskon_produk: "24",
      harga_produk_pra_diskon: "350000",
      lokasi_penjualan: "Jakarta Pusat",
      bintang: "4.8",
      terjual: "1 rb+",
    },
    {
      activeCampaign: false,
      campaignName: "Terlaris",
      img_produk:
        "https://images.tokopedia.net/img/cache/300-square/VqbcmM/2021/11/4/452d0d0c-7be6-4493-b4a2-9b6ec14ddea7.jpg.webp?ect=4g",
      nama_produk: "FITBIT Charge 5 Lunar White/Soft Gold",
      harga_produk: "2899000",
      diskon_produk: "12",
      harga_produk_pra_diskon: "3299000",
      lokasi_penjualan: "Jakarta Pusat",
      bintang: "4.8",
      terjual: "70 +",
    },
    {
      activeCampaign: false,
      campaignName: "",
      img_produk:
        "https://images.tokopedia.net/img/cache/300-square/VqbcmM/2021/12/24/ace6d619-b17c-4326-ae75-d3eb2b5e2aab.jpg.webp?ect=4g",
      nama_produk:
        "Acome Data Cable Micro-USB Fast Charging 2.4A 100cm Garansi 1 thn ADM",
      harga_produk: "9999",
      diskon_produk: "71",
      harga_produk_pra_diskon: "35000",
      lokasi_penjualan: "Jakarta Pusat",
      bintang: "4.9",
      terjual: "2 rb+",
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
        "https://images.tokopedia.net/img/cache/300-square/hDjmkQ/2022/5/3/e2d9fe7b-151f-4806-8cf1-6745c189f383.jpg.webp?ect=4g",
      nama_produk: "Aukey Charger 2 Port 12W with AiQ - 500284",
      harga_produk: "119000",
      diskon_produk: "42",
      harga_produk_pra_diskon: "725000",
      lokasi_penjualan: "Jakarta Pusat",
      bintang: "4.9",
      terjual: "4 rb+",
    },
  ];

  return (
    <div className="App">
      {/* Main Navbar */}
      <MainNavbar></MainNavbar>

      {/* Wrapper */}
      <div className="w-[75rem] m-auto">
        {/* Main Slider */}
        <MainSlider></MainSlider>

        {/*  Kategori pilihan & Fitur */}
        <MainKategori
          kategoriKotak={SliderMainKategoriKotak}
          kategoriPanjang={SliderMainKategoriPanjang}
          tabUtama={TabMainKategoriUtama}
        ></MainKategori>

        {/* Konten Produk */}
        <hr className="my-3" />
        {/* Konten Diskon */}
        <div className="mb-14">
          <KontenDiskonI></KontenDiskonI>
        </div>
        <hr />
        {/* Konten Produk */}
        <div className="mb-4 text-left">
          <div className=" font-bold">
            <h2 className=" inline text-xl">Elektronik Pilihan</h2>
            <small className=" ml-2 inline text-sm text-primary">
              Lihat Semua
            </small>
            <DisplayLayoutDefaultSliderProduk
              produk={arrItemDiskon}
            ></DisplayLayoutDefaultSliderProduk>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
