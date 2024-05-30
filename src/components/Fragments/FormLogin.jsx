import Button from "../Elements/Button";
import InputForm from "../Elements/Input";

const FormLogin = () => {
    return (
        <form action="#" className="mt-7 space-y-3 min-w-full">
            <InputForm
                label="Email"
                type="email"
                placeholder="example@gmail.com"
                name="email"
            />
            <InputForm
                label="Password"
                type="password"
                placeholder="*************"
                name="password"
            />
            <div className="flex justify-between items-center">
                <div className="flex space-x-2 items-center">
                    <input type="checkbox" name="remember_me" value={"true"} />
                    <label htmlFor="remember_me" className="text-[#1694F6] text-xs">Remember Me</label>
                </div>
            </div>
            <Button>Masuk</Button>
        </form>
    );
};
 
export default FormLogin;