import React from "react";
import LogoBar from "../../assets/LogoBar.png";
import { 
    IoMdSearch, 
    IoIosPower } from "react-icons/io";
import { 
    CiSettings, 
    CiShoppingBasket } from "react-icons/ci"; 
import avatar from "../../assets/avatar.png";

const SideBar = () => {
    // const Menus = [
    //     {title: "Pengaturan",
    //         id: 1,
    //     },
    //     {title: "Riwayat Post",
    //         id: 2,
    //     },
    //     {title: "Keluar"
    //         id: 3,
    //     },
    // ];

    return (
        <div className="flex flex-col bg-white">
            <img src={LogoBar} alt="LogoBar" className="max-w-72 p-3"/>
            <div className="bg-[#FF7200] h-screen p-5 pt-8 w-72">
                <div className="flex items-center rounded-md bg-white px-2 py-2">
                    <IoMdSearch className="text-slate-500 items-center text-xl block float-left cursor-pointer mr-2" />
                    <input 
                        type="search"
                        placeholder="Search"
                        className="text-sm w-full bg-transparent focus:outline-none"    
                    />
                </div>
                <div className="flex flex-col items-center mt-6">
                    <img src={avatar} alt="avatar" className="flex items-center max-w-[150px] rounded-full" />
                    <h1 className="text-2xl font-regular text-white mt-3">Adit Ibrani</h1>
                    <button className="flex items-center  rounded-full bg-[#FF7200] text-white hover:bg-white hover:text-[#FF7200] px-4 py-2 mt-3 border border-white">Lihat Profile</button>
                </div>
                <div className="h-[1px] w-full bg-white mt-5 mb-6" />
                <ul className="pt-2">
                    <li className="flex flex-row text-white text-regular rounded-md hover:bg-slate-200 hover:text-[#FF7200] cursor-pointer gap-x-3 p-2">
                        <CiSettings className="bg-white text-[#1694F6] text-3xl rounded-md cursor-pointer block float-left p-1"/>
                        <span className="text-base font-medium flex-1">Pengaturan</span>
                    </li>
                    <li className="flex flex-row text-white text-regular rounded-md hover:bg-slate-200 hover:text-[#FF7200] cursor-pointer gap-x-3 p-2">
                        <CiShoppingBasket className="bg-white text-[#1694F6] text-3xl rounded-md cursor-pointer block float-left p-1"/>
                        <span className="text-base font-medium flex-1">Riwayat Post</span>
                    </li>
                    <li className="flex flex-row text-white text-regular rounded-md hover:bg-slate-200 hover:text-[#FF7200] cursor-pointer gap-x-3 p-2">
                        <IoIosPower className="bg-white text-[#1694F6] text-3xl rounded-md cursor-pointer block float-left p-1"/>
                        <span className="text-base font-medium flex-1">Keluar</span>
                    </li>
                    {/* {Menus.map((menu, index) => (
                        <>
                            <li key={index} className="text-white text-regular rounded-md hover:bg-slate-200 hover:text-[#FF7200] cursor-pointer gap-x-4 p-2">
                                <span className="text-base font-medium flex-1">{menu.title}</span>
                            </li> 
                        </>   
                    ))} */}
                </ul>
            </div>
        </div>
    );
};

export default SideBar;