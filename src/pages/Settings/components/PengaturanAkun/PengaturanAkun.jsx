import React, { useState } from "react";
import InputForm from "./components/InputForm";
import SideBar from "../../SideBar";
import Square from "../Square";
import avatar from "../../../../assets/avatar.png";
import Biodata from "./components/Biodata"; 

const PengaturanAkun = () => {
    
    const [selectedImage, setSelectedImage] = useState(avatar);

    const [namaDepan, setNamaDepan] = useState('');
    const [namaBelakang, setNamaBelakang] = useState('');
    const [email, setEmail] = useState('');
    const [nomorTelepon, setNomorTelepon] = useState('');
    const [kota, setKota] = useState('');
    const [negara, setNegara] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('NamaDepan:', namaDepan);
        console.log('NamaBelakang:', namaBelakang);
        console.log('E-mail:', email);
        console.log('NomorTelepon:', nomorTelepon);
        console.log('Kota:', kota); 
        console.log('Negara:', negara);
    };

    const handleFotoProfile = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setSelectedImage(reader.result);
            };
            reader.readAsDataURL(file);
        };
    };

    return (
        <div className="flex flex-row">
            <SideBar />
            <div className="flex-1 p-12 bg-white">
                <Square className="w-full">
                    <div className="flex w-full h-full gap-5">
                        <div className="w-[35%] h-full bg-white p-6 rounded-lg shadow-lg">
                            <div className="flex flex-col items-center mt-6">
                                <label 
                                    htmlFor="fileInput" className="cursor-pointer">
                                    <div className="relative w-[150px] h-[150px] hover:opacity-60">
                                        <img
                                            src={selectedImage}
                                            alt="Foto Profil"
                                            className="w-full h-full object-cover rounded-full"
                                            style={{ aspectRatio: '1 / 1' }}
                                        />
                                        <input
                                            id="fileInput"
                                            type="file"
                                            name="fotoProfile"
                                            onChange={handleFotoProfile}
                                            accept="image/*"
                                            className="hidden"
                                        />
                                    </div>
                                </label>
                                <h1 className="text-2xl font-semibold text-[#1694F6] mt-3">Profile Saya</h1>
                            </div>
                            <div className="flex flex-col mt-7">
                                <Biodata
                                    label="Nama"
                                    value="Adit Ibrani"
                                />
                                <Biodata
                                    label="E-mail"
                                    value="example@email.com"
                                />
                                <Biodata
                                    label="Nomor Telepon"
                                    value="0815 1234 5678"
                                />
                                <Biodata
                                    label="Kota"
                                    value="Jakarta Timur"
                                />
                                <Biodata
                                    label="Negara"
                                    value="Indonesia"
                                /> 
                            </div>
                            <div className="h-[1px] w-full bg-[#1694F6] mt-5 mb-6" />
                        </div>
                        <div className="w-[65%] h-full bg-white p-6 rounded-lg shadow-lg ml-auto">
                            <h1 className="flex flex-col items-center text-4xl text-[#1694F6] font-semibold mt-2">Pengaturan Akun</h1>
                            <h3 className="flex flex-col items-center text-lg text-[#1694F6] font-regular mt-7 mb-8">
                                Harap masukkan informasi terkini untuk akun Anda
                            </h3>
                            <form onSubmit={handleSubmit}>
                                <InputForm 
                                    label="Nama Depan"
                                    type="text"
                                    id="name"
                                    placeholder="ex: Ahmad"
                                    value={namaDepan}
                                    onChange={(e) => setNamaDepan(e.target.value)}
                                />
                                <InputForm 
                                     label="Nama Belakang"
                                     type="text"
                                     id="name"
                                     placeholder="ex: Ali"
                                     value={namaBelakang}
                                     onChange={(e) => setNamaBelakang(e.target.value)}
                                />
                                <InputForm 
                                    label="E-mail"
                                    type="email"
                                    id="email"
                                    placeholder="ex: example@email.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <InputForm 
                                    label="Nomor Telepon"
                                    type="text"
                                    id="phone"
                                    placeholder="ex: 08xxxxxxxx"
                                    value={nomorTelepon}
                                    onChange={(e) => setNomorTelepon(e.target.value)}
                                />
                                <InputForm 
                                    label="Kota"
                                    type="text"
                                    id="kota"
                                    placeholder="ex: Jakarta Timur"
                                    value={kota}
                                    onChange={(e) => setKota(e.target.value)}
                                />
                                <InputForm 
                                    label="Negara"
                                    type="text"
                                    id="negara"
                                    placeholder="ex: Indonesia"
                                    value={negara}
                                    onChange={(e) => setNegara(e.target.value)}
                                />
                                <button type="submit" className="flex flex-col justify-center items-center text-white bg-[#FF7200] hover:bg-[#DDDDDD] hover:text-[#FF7200] mx-auto p-2 w-32 rounded-md shadow-sm shadow-black/20 mt-7">
                                    Simpan
                                </button>
                            </form>
                        </div>
                    </div>
                </Square>
            </div>
        </div>
    );
};

export default PengaturanAkun;