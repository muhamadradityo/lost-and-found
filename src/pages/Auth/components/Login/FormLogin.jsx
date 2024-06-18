import LostAndFound from "../../../../assets/LostAndFound.png"
import Laptop from "../../../../assets/Laptop.png"

const FormLogin = () => {
    return (
        <div className="flex flex-col bg-white">
            <div className="w-60">
                <img src={LostAndFound} alt="avatar" />
            </div>
            <div className="flex flex-row">
                <div className="w-60">
                    <img src={Laptop} alt="login" />
                </div>
                <div className="bg-[#F7F7F7] rounded-md shadow-md shadow-black/20 py-7 px-5 max-w-96">
                    <div className="flex flex-row justify-between items-center">
                        <h1 className="text-4xl">Masuk</h1>
                        <img src="barcode" alt="barcode" />
                    </div>
                    <form action="#" className="mt-7 space-y-3 min-w-full">
                        <div className="space-y-2 flex flex-col">
                            <label htmlFor="Email" className="text-[#1694F6] text-xs">E-Mail</label>
                            <input type="text" name="email" className="flex flex-row max-w-full items-center bg-white mb-5 p-3 hover:bg-slate-100 rounded-md cursor-pointer" placeholder="nama@contoh.com" />
                        </div>
                        <div className="space-y-2 flex flex-col">
                            <label htmlFor="Password" className="text-[#1694F6] text-xs">Kata Sandi</label>
                            <input type="password" name="password" className="flex flex-row max-w-full items-center bg-white mb-5 p-3 hover:bg-slate-100 rounded-md cursor-pointer" placeholder="*************" />
                        </div>
                        <div className="flex justify-between items-center">
                            <div className="flex space-x-2 items-center">
                                <input type="checkbox" name="remember_me" value={"true"} />
                                <label htmlFor="remember_me" className="text-[#1694F6] text-xs">Remember Me</label>
                            </div>
                            <a href="#" className="text-[#888888] text-xs">Lupa Password?</a>
                        </div>
                        <div className="flex items-center justify-center mx-auto mt-7">
                            <button className="text-white bg-[#FF7200] mx-auto py-1 w-24 rounded-md shadow-sm shadow-black/20">Masuk</button>
                        </div>
                    </form>
                    <div className="flex items-center justify-center mx-auto space-x-2 mt-7">
                        <h3 className="text-[#A3A3A3] text-xs">Belum punya akun?</h3>
                        <a href="#" className="text-[#1694F6] font-bold text-xs">Daftar</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FormLogin;