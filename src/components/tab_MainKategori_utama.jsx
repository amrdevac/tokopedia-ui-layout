import React from "react";

class TabMainKategoriUtama extends React.Component {
  render() {
    return (
      <>
        <div className="font-bold pb-2">
          <div className="text-xl inline mx-2">Top Up & Tagihan</div>
          <div className="text-primary self-end inline text-sm cursor-pointer hover:text-green-800">
            Lihat Semua
          </div>
        </div>
        <div className="tabs grid grid-flow-col font-bold border-x-2 border-t-2 rounded-t-lg">
          <a className="tab tab-bordered cm-tab-active">Pulsa</a>
          <a className="tab tab-bordered ">Paket Data</a>
          <a className="tab tab-bordered">Listrik PLN</a>
          <a className="tab tab-bordered">Flight</a>
        </div>
        <div className="my- p-3  border-2 rounded-b-lg flex gap-2 items-end">
          <div>
            <label htmlFor="">Nomor Telepon</label>
            <input
              type="text"
              className="input w-full"
              placeholder="08123454656"
            />
          </div>
          <div>
            <label htmlFor="">Nominal</label>
            <input type="text" className="input w-full" disabled />
          </div>
          <div>
            <button className="btn btn-custom-secondary">Beli</button>
          </div>
        </div>
      </>
    );
  }
}

export default TabMainKategoriUtama;
