import SideBar from "../../SideBar";
import Square from "../Square";
import InputBar from "./Input Bar/InputBar";
import { GrFormNextLink } from "react-icons/gr";

const KataSandiBaru = () => {
    return (
        <div className="flex flex-row">
            <SideBar />
            <div className="flex-1 p-12 bg-white">
                <Square>
                    <div className="bg-[#ffffff] p-6 h-full rounded-lg">
                        <h1 className="flex flex-col items-center text-4xl text-black mt-6 font-semibold">Kata Sandi Baru</h1>
                        <h3 className="flex flex-col items-center text-lg text-[#1694F6] font-regular mt-7 mb-8">
                            Kata sandi baru Anda harus berbeda dengan kata sandi yang digunakan sebelumnya
                        </h3>
                        <InputBar 
                            label="Nomor Telepon"
                            type="text"
                            id="nomorTelepon"
                            placeholder="08xxxxxxxx" 
                        />
                        <InputBar 
                            label="E-Mail"
                            type="email"
                            id="email"
                            placeholder="example@email.com" 
                        />
                        <button type="submit" className="flex flex-row justify-center items-center text-white bg-[#FF7200] hover:bg-[#DDDDDD] hover:text-[#FF7200] mx-auto p-2 w-32 rounded-md shadow-sm shadow-black/20 mt-7">
                            <h3 className="justify-start p-0.5 items-center text-lg font-semibold text-[#FFFFFF]">
                                Lanjut
                            </h3>
                            <GrFormNextLink className="text-2xl font-semibold text-[#FFFFFF] ml-auto"/>
                        </button>
                    </div>
                </Square>
            </div>
        </div>

    );
};

export default KataSandiBaru;