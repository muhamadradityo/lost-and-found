import SideBar from "../../SideBar";
import Square from "../Square";
import { RiLockPasswordFill } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { MdOutlineNavigateNext } from "react-icons/md"; 

const Pengaturan = () => {
    return (
        <div className="flex flex-row">
            <SideBar />
            <div className="flex-1 p-12 bg-white">
                <Square>
                    <div className="bg-[#ffffff] p-6 h-full rounded-lg">
                        <h1 className="flex flex-col items-center text-4xl text-[#1694F6] font-semibold">Pengaturan</h1>
                        <div className="flex flex-row w-full items-center bg-white mt-6 p-6 hover:bg-slate-100 rounded-lg shadow-lg cursor-pointer">
                            <RiLockPasswordFill className="text-center text-[#1694F6] text-4xl mr-5" />
                            <div className="flex flex-col">
                                <h1 className="text-xl font-semibold text-[#1694F6]">Ubah Kata Sandi</h1>
                                <h4 className="text-sm font-regular text-slate-500">Anda dapat mengubah kata sandi untuk melindungi akun Anda</h4>
                            </div>
                            <MdOutlineNavigateNext className="text-end text-[#1694F6] text-4xl ml-auto" />
                        </div>
                        <div className="flex flex-row items-center bg-white mt-6 p-6 hover:bg-slate-100 rounded-lg shadow-lg cursor-pointer">
                            <CgProfile className="text-center text-[#1694F6] text-4xl mr-5" />
                            <div className="flex flex-col">
                                <h1 className="text-xl font-semibold text-[#1694F6]">Ubah Profil</h1>
                                <h4 className="text-sm font-regular text-slate-500">Anda dapat mengubah informasi profil Anda untuk menampilkan data pribadi dan preferensi terkini</h4>
                            </div>
                            <MdOutlineNavigateNext className="text-end text-[#1694F6] text-4xl ml-auto" />
                        </div>
                    </div>
                </Square>
            </div>
        </div>
    );
};

export default Pengaturan;