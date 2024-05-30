"use client";
import { useState } from "react";
import HomeImg from "../../assets/homepage.png";
import SearchBar from "../../components/Elements/SearchBar";

import Layout from "../layout";
import PenemuanBarang from "./components/PenemuanBarangModal";
import HilangBarang from "./components/HilangBarangModal";

const Home = () => {
    const [penemuanBarangModal, setPenemuanBarangModal] = useState(false);
    const [hilangBarangModal, setHilangBarangModal] = useState(false);

    const buatPostinganOptions = [
        {
            "label": "Penemuan Barang",
            "onClick": () => { setPenemuanBarangModal(true) }
        },
        {
            "label": "Barang Hilang",
            "onClick": () => setHilangBarangModal(true)
        }
    ];

    return (
        <>
            <Layout isAuth={false} buatPostinganOptions={buatPostinganOptions}>
                <PenemuanBarang penemuanBarangModal={penemuanBarangModal} setPenemuanBarangModal={setPenemuanBarangModal} />
                <HilangBarang hilangBarangModal={hilangBarangModal} setHilangBarangModal={setHilangBarangModal} />
                <div className="flex justify-center h-100 items-center relative">
                    <img src={HomeImg} alt="homepage" className="w-full">
                    </img>
                    <div className="flex absolute bottom-28">
                        <SearchBar />
                    </div>
                </div>
                <div className="flex justify-center h-80 bg-[#FFFFFF] items-center px-10 ">
                    <div className="flex flex-col text-slate-700 w-[70%]">
                        <h3 className="text-2xl font-semibold text-slate-900 mb-4">
                            Lost and Found Indonesia
                        </h3>
                        <h5 className="text-md font-semibold text-slate-500 mb-3">
                            Lost and Found Indonesia merupakan layanan penemuan barang yang mengandalkan laporan dan postingan. Pengguna dapat melihat, melaporkan, menjelaskan, serta mengkategorikan barang hilang atau ditemukan secara efisien dan efektif dengan menggunakan layanan Lost and Found Indonesia ini.
                        </h5>
                        <h5 className="text-md font-semibold text-slate-500">
                            Pengguna memiliki opsi untuk menambahkan lokasi, mengunggah foto, dan memberikan rincian tambahan. Aplikasi ini dapat mengirimkan notifikasi email kepada pengguna mengenai barang yang sesuai yang hilang atau ditemukan.
                        </h5>
                    </div>
                </div>
                <div className="flex flex-col justify-center h-80 bg-[#FF7200] items-center px-10">
                    <div className="flex flex-col text-white text-center mb-auto mt-5">
                        <h1 className="text-3xl font-semibold">
                            "Lost? Found! Your Solution."
                        </h1>
                    </div>
                    <div className="flex flex-col text-white text-center mt-auto mb-5">
                        <h5 className="text-xl font-semibold">
                            "Tak Hilang, Selalu Temukan: Layanan Lost and Found Terpercaya!"
                        </h5>
                    </div>
                </div>
            </Layout>
        </>

    )
}

export default Home;
