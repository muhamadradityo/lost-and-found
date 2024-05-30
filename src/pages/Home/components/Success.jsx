import React, { useEffect } from 'react'
import SuccessSVG from '../../../assets/success.png';

const Success = ({ values, handleSubmit, }) => {
    console.log(values);

    useEffect(() => {
        handleSubmit();
    }, [values]);

    return (
        <div className='flex flex-grow items-center justify-center bg-white flex-col py-52 px-36'>
            <img src={SuccessSVG} alt="success" className='w-60' />
            <h1 className='text-[#74D351] text-5xl mt-14'>Berhasil Submit Barang Yang Ditemukan!</h1>
        </div>
    )
}

export default Success