import LogoBar from "../../assets/LogoBar.png";
import Avatar from "../../assets/avatar.png";

// Notes of use the Navbar
// Pass true to isAuth whenever the user is authenticated
// Pass true to isSearchEnabled when you wish to only show search bar and avatar
// Pass true to isOnlyLogo when you wish to only show the logo
// Other than that, the only home page will need to require to pass the Buat Postingan options. Or else the Navbar will break.

const NavBar = ({ isAuth, isSearchEnabled, isOnlyLogo, buatPostinganOptions }) => {
    return (
        <nav className="flex w-full items-center justify-between p-3 bg-white">
            <img src={LogoBar} alt="logo" className="max-w-72" />
            {!isOnlyLogo && (
                <>
                    {!isSearchEnabled && (
                        <>
                            {isAuthNavbar({ isAuth, buatPostinganOptions })}
                        </>
                    )}
                    {isSearchEnabledNavbar({ isSearchEnabled })}
                </>
            )
            }
        </nav>
    );
};

export default NavBar;

const isAuthNavbar = ({ isAuth, buatPostinganOptions }) => {
    if (!isAuth && !buatPostinganOptions) {
        return
    }

    return (
        <div className="flex items-center">
            <div className="space-x-12 text-xs">
                <details className="dropdown">
                    <summary className="uppercase btn bg-transparent border-0 font-normal text-xs hover:text-black hover:bg-transparent text-black">Buat Postingan
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>
                    </summary>
                    <ul className="shadow menu dropdown-content z-[1] bg-white w-full rounded-md space-y-2 mt-5">
                        {
                            buatPostinganOptions.map((option, index) => (
                                <li key={index} onClick={option.onClick} className="hover:bg-gray-300 transition-colors ease-in-out py-1 px-2 rounded-md cursor-pointer">{option.label}</li>
                            ))
                        }
                    </ul>
                </details>
                <a href="#" className="uppercase">Postingan Terbaru</a>
            </div>
            <div className="w-[1px] h-10 bg-[#FF7200] ml-32 mr-10" />
            {isAuth ?
                <details className="dropdown">
                    <summary className="uppercase btn bg-transparent border-0 font-normal flex items-center space-x-6 hover:text-black hover:bg-transparent text-black">
                        <img src={Avatar} alt="avatar" className="max-w-12 rounded-full" />
                        <h2 className="text-[#FF7200] text-base">Adit</h2>
                    </summary>
                    <ul className="shadow menu dropdown-content z-[1] bg-white w-full rounded-md space-y-2 mt-5">
                        <li className="hover:bg-gray-400 transition-colors ease-in-out py-1 px-2 rounded-md">Item 1</li>
                        <li className="hover:bg-gray-400 transition-colors ease-in-out py-1 px-2 rounded-md">Item 2</li>
                    </ul>
                </details>
                :
                <button className="border-[#FF7200] border-[1px] w-32 mx-auto flex items-center justify-center p-1 rounded-full hover:bg-[#FF7200] hover:text-white transition-colors ease-in-out group">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-[#FF7200] group-hover:text-white mr-3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>
                    <h2 className="text-sm">Masuk</h2>
                </button>}
        </div>
    );
}

const isSearchEnabledNavbar = ({ isSearchEnabled }) => {
    if (isSearchEnabled) {
        return (
            <div className="flex items-center flex-grow ml-14">
                <form action="#" className="w-full">
                    <div className="border-[#BFC9D8] border-[1px] rounded-lg p-2 flex items-center space-x-1">
                        <label htmlFor="Cari">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3 text-bold">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                            </svg>
                        </label>
                        <input type="text" placeholder="Cari" className="text-xs flex-grow bg-transparent focus:outline-none" />
                    </div>
                </form>
                <div className="ml-40">
                    <details className="dropdown">
                        <summary className="uppercase btn bg-transparent border-0 font-normal flex items-center space-x-6 flex-nowrap hover:text-black hover:bg-transparent text-black">
                            <img src={Avatar} alt="avatar" className="max-w-12 rounded-full" />
                            <h2 className="text-[#FF7200] text-base">Adit</h2>
                        </summary>
                        <ul className="shadow menu dropdown-content z-[1] bg-white w-full rounded-md space-y-2 mt-5">
                            <li className="hover:bg-gray-400 transition-colors ease-in-out py-1 px-2 rounded-md">Item 1</li>
                            <li className="hover:bg-gray-400 transition-colors ease-in-out py-1 px-2 rounded-md">Item 2</li>
                        </ul>
                    </details>
                </div>
            </div>
        );
    }
}

