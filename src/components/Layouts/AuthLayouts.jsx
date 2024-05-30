import loginImg from '../../../assets/login.png';
const AuthLayout = ( props ) => {
    const { children, title, type } = props;
    return (
        <div className="flex justify-center min-h-screen min-w-full items-center">
            {/* <div className="w-full max-w-xs">
                <img src={loginImg} alt="login" />
            </div> */}
            <div className="bg-[#F7F7F7] rounded-md shadow-md shadow-black/20 py-7 px-5 max-w-96">
                <h1 className="text-4xl font-bold text-slate-700">
                    {title}
                </h1>
                {children}
                <Navigation type={type} />
            </div>
        </div>
    );
}; 

const Navigation = ({ type }) => {
    if ( type === 'login' ) {
        return (
            <p className="text-center">
                <h3 className="text-[#A3A3A3] text-xs">
                    Belum punya akun?{" "}
                </h3>
                <Link to="/register" className="text-[#1694F6] font-bold text-xs">
                    Daftar
                </Link>
            </p>
        ) 
    } else {
        return (
            <p className="text-center">
                <h3 className="text-[#A3A3A3] text-xs">
                    Sudah punya akun?{" "}
                </h3>
                <Link to="/login" className="text-[#1694F6] font-bold text-xs">
                    Login
                </Link>
            </p>
        )
    };
};


export default AuthLayout;