import React, { useState } from 'react'

const Step2 = ({ prevStep, nextStep, handleChange, values }) => {
    const [file, setFile] = useState(null);

    const Continue = e => {
        e.preventDefault();
        nextStep();
    }

    const Previous = e => {
        e.preventDefault();
        prevStep();
    }

    function handleFotoBarang(e) {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setFile(reader.result);
            };
            reader.readAsDataURL(file);
            handleChange("fotoBarang")({ target: { value: file } });
        }
    }

    return (
        <div className="bg-white rounded-lg py-14 px-32 flex flex-col justify-center">
            <h1 className='text-[40px] text-center'>Informasi Lokasi Barang Hilang</h1>
            <h2 className='text-[#1694F6] mt-5 text-center'>Isi data - data informasi barang yang hilang agar dapat ditemukan oleh penemu.</h2>
            <form action="#" className='w-full grid grid-cols-2 gap-9 mt-7' encType='multipart/form-data'>
                <div className='flex flex-col space-y-3'>
                    <label htmlFor="Lokasi Kehilangan" className='text-[#1694F6]'>Lokasi Kehilangan</label>
                    <select name="lokasiKehilangan" onChange={handleChange("lokasiKehilangan")} className='bg-white py-[18px] px-4 rounded-lg shadow-gray-500 shadow-sm'>
                        <option selected>Lokasi Kehilangan</option>
                        <option value="sekolah">Sekolah</option>
                    </select>
                </div>
                <div className='flex flex-col space-y-3 row-span-2'>
                    <label htmlFor="Foto Barang" className='text-[#1694F6]'>Foto Barang</label>
                    <input className='bg-white p-4 rounded-lg shadow-gray-500 shadow-sm' type="file" name='fotoBarang' onChange={(e) => handleFotoBarang(e)} accept='image/*' />
                    {file && (
                        <img src={file} alt="uploaded image" className="w-40 rounded-md" />
                    )}
                </div>
                <div className='flex flex-col space-y-3'>
                    <label htmlFor="Nama Lokasi Kehilangan" className='text-[#1694F6]'>Nama Lokasi Kehilangan</label>
                    <select name="namaLokasiKehilangan" onChange={handleChange("namaLokasiKehilangan")} className='bg-white py-[18px] px-4 rounded-lg shadow-gray-500 shadow-sm'>
                        <option selected>Nama Lokasi Kehilangan</option>
                        <option value="Jakarta Barat">Jakarta Barat</option>
                    </select>
                </div>
                <div className='flex flex-col space-y-3 col-span-2'>
                    <label htmlFor="Alamat Lokasi Kehilangan" className='text-[#1694F6]'>Alamat Lokasi Kehilangan</label>
                    <input className='bg-white p-4 rounded-lg shadow-gray-500 shadow-sm' type="text" name='alamatLokasiKehilangan' onChange={handleChange("alamatLokasiKehilangan")} />
                </div>
                <div className='flex flex-col space-y-3 col-span-2'>
                    <label htmlFor="Informasi Tambahan" className='text-[#1694F6]'>Informasi Tambahan</label>
                    <input className='bg-white p-4 rounded-lg shadow-gray-500 shadow-sm' type="text" name='informasiTambahan' onChange={handleChange("informasiTambahan")} />
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

export default Step2