"use client";
import React from 'react'
import { useState } from 'react';

const Step3 = ({ prevStep, nextStep, handleChange, values }) => {
    const [pertanyaanValidasi, setPertanyaanValidasi] = useState([]);

    function addPertanyaanValidasi(e) {
        e.preventDefault();
        const newPertanyaanValidasi = [...pertanyaanValidasi, ''];
        setPertanyaanValidasi(newPertanyaanValidasi);
    }

    function deletePertanyaanValidasi(index) {
        const newPertanyaanValidasi = [...pertanyaanValidasi];
        newPertanyaanValidasi.splice(index, 1);
        setPertanyaanValidasi(newPertanyaanValidasi);
    }

    function handleOnChangePertanyaanValidasi(index, e) {
        const newPertanyaanValidasi = [...pertanyaanValidasi];
        newPertanyaanValidasi[index] = e.target.value;
        setPertanyaanValidasi(newPertanyaanValidasi);
        handleChange(`pertanyaanValidasi`)({ target: { value: newPertanyaanValidasi } });
    }

    const Continue = e => {
        e.preventDefault();
        nextStep();
    }

    const Previous = e => {
        e.preventDefault();
        prevStep();
    }

    return (
        <div className="bg-white rounded-lg py-14 px-32 flex flex-col justify-center">
            <h1 className='text-[40px] text-center'>Informasi Pertanyaan Barang Ditemukan</h1>
            <h2 className='text-[#1694F6] mt-5 text-center'>Isi pertanyaan deskriptif mengenai barang yang ditemukan agar dapat di validasi oleh penemu.</h2>
            <form action="#" className='w-full grid grid-cols-2 gap-9 mt-7' encType='multipart/form-data'>
                <div className='flex flex-col space-y-3'>
                    <label htmlFor="Pilih Pertanyaan Utama" className='text-[#1694F6]'>Pilih Pertanyaan Utama</label>
                    <select name="pertanyaanUtama" onChange={handleChange("pertanyaanUtama")} className='bg-white py-[18px] px-4 rounded-lg shadow-gray-500 shadow-sm'>
                        <option selected>Pilih Pertanyaan Utama</option>
                        <option value="Bentuk apakah barang tersebut?">Bentuk apakah barang tersebut?</option>
                    </select>
                </div>
                <div className='flex flex-col space-y-3 row-span-2'>
                    <label htmlFor="Jawaban Pertanyaan Utama" className='text-[#1694F6]'>Jawaban Pertanyaan Utama</label>
                    <select name="jawabanPertanyaanUtama" onChange={handleChange("jawabanPertanyaanUtama")} className='bg-white py-[18px] px-4 rounded-lg shadow-gray-500 shadow-sm'>
                        <option selected>Jawaban Pertanyaan Utama</option>
                        <option value="Bulat">Bulat</option>
                    </select>
                </div>
                {
                    pertanyaanValidasi.map((item, index) => (
                        <div className='flex flex-col space-y-3 col-span-2' key={index}>
                            <label htmlFor={`Pertanyaan Validasi ${index + 1}`} className='text-[#1694F6]'>Pertanyaan Validasi #{index + 1}</label>
                            <div className="flex items-center space-x-4">
                                <input className='bg-white p-4 rounded-lg shadow-gray-500 shadow-sm flex-grow' type="text" name='pertanyaanValidasi[]' onChange={(e) => handleOnChangePertanyaanValidasi(index, e)} />
                                <button onClick={() => deletePertanyaanValidasi(index)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-red-500">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    ))
                }
                <div className='flex flex-col space-y-3'>
                    <button className='text-[#1694F6] flex items-center' onClick={(e) => addPertanyaanValidasi(e)}>
                        <span className='border-[#1694F6] border-[1px] mr-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>
                        </span>
                        Tambahkan Pertanyaan Validasi
                    </button>
                </div>
                <div className="col-span-2 flex justify-center mt-20 space-x-10">
                    <button className='bg-[#FF7200] flex py-3 w-40 justify-between px-4 text-white items-center rounded-lg shadow-gray-400 shadow-md hover:bg-[#FF7200]/90 transition-colors' onClick={Previous}>
                        Kembali
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                        </svg>
                    </button>
                    <button className='bg-[#FF7200] flex py-3 w-40 justify-between px-4 text-white items-center rounded-lg shadow-gray-400 shadow-md hover:bg-[#FF7200]/90 transition-colors' onClick={Continue}>
                        Lanjut
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                        </svg>
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Step3