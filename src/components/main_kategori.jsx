import React from "react";

class MainKategori extends React.Component {
  render() {
    const KategoriKotak = this.props.kategoriKotak;
    const KategoriPanjang = this.props.kategoriPanjang;
    const TabUtama = this.props.tabUtama;

    return (
      <div className="shadow-md boxshadow-gray-300 rounded-xl my-4 p-5 bg-white">
        <div className="grid grid-cols-2 ">
          <div className="p-4">
            <h2 className="font-bold text-xl">Kategori Pilihan</h2>
            <KategoriKotak></KategoriKotak>
          </div>
          <div className="p-4">
            <TabUtama></TabUtama>
          </div>
        </div>
        <div className="px-5">
          <KategoriPanjang></KategoriPanjang>
        </div>
      </div>
    );
  }
}

export default MainKategori;
