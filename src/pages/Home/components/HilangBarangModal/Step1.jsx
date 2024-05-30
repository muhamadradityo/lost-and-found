import React from 'react'

const Step1 = ({ nextStep, handleChange, values }) => {
    const Continue = e => {
        e.preventDefault();
        nextStep();
    }

    return (
        <div className="bg-white rounded-lg py-14 px-32 flex flex-col justify-center">
            <h1 className='text-[40px] text-center'>Informasi Data Barang Hilang</h1>
            <h2 className='text-[#1694F6] mt-5 text-center'>Isi data - data informasi barang yang hilang agar dapat ditemukan oleh penemu.</h2>
            <form action="#" className='w-full grid grid-cols-2 gap-9 mt-7' encType='multipart/form-data'>
                <div className='flex flex-col space-y-3'>
                    <label htmlFor="Tipe Barang" className='text-[#1694F6]'>Tipe Barang</label>
                    <select onChange={handleChange("tipeBarang")} value={values.tipeBarang} name='tipeBarang' className='bg-white py-[18px] px-4 rounded-lg shadow-gray-500 shadow-sm'>
                        <option selected>Tipe Barang</option>
                        <option value="kunci">Kunci</option>
                    </select>
                </div>
                <div className='flex flex-col space-y-3'>
                    <label htmlFor="Kategori" className='text-[#1694F6]'>Kategori</label>
                    <input className='bg-white p-4 rounded-lg shadow-gray-500 shadow-sm' type="text" name='kategori' onChange={handleChange("kategori")} />
                </div>
                <div className='flex flex-col space-y-3'>
                    <label htmlFor="Warna" className='text-[#1694F6]'>Warna</label>
                    <input className='bg-white p-4 rounded-lg shadow-gray-500 shadow-sm' type="text" name='warna' onChange={handleChange("warna")} />
                </div>
                <div className='flex flex-col space-y-3'>
                    <label htmlFor="Warna Sekunder" className='text-[#1694F6]'>Warna Sekunder</label>
                    <input className='bg-white p-4 rounded-lg shadow-gray-500 shadow-sm' type="text" name='warnaSekunder' onChange={handleChange("warnaSekunder")} />
                </div>
                <div className='flex flex-col space-y-3'>
                    <label htmlFor="Tanggal Kehilangan" className='text-[#1694F6]'>Tanggal Kehilangan</label>
                    <input className='bg-white p-4 rounded-lg shadow-gray-500 shadow-sm' type="date" name='tanggalKehilangan' style={{ colorScheme: 'normal' }} onChange={handleChange("tanggalKehilangan")} />
                </div>
                <div className="col-span-2 flex justify-center mt-20 ">
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

export default Step1