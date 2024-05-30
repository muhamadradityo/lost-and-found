import Button from "../Elements/Button";
import InputForm from "../Elements/Input";

const FormRegister = () => {
    return (
        <form action="">
            <InputForm 
             label="Nomor Telepon" 
             type="text" 
             placeholder="08xxxxxxxx"
             name="nomor telepon" 
            />
            <InputForm 
             label="FullName" 
             type="text" 
             placeholder="Insert your name here..."
             name="fullname" 
            />
            <InputForm 
             label="Email" 
             type="email" 
             placeholder="example@gmail.com"
             name="email" 
            />
            <InputForm 
             label="Password" 
             type="password" 
             placeholder="********"
             name="password" 
            />
            <InputForm 
             label="Confirm Password" 
             type="password" 
             placeholder="********"
             name="confirm password" 
            />
            <Button classname="bg-[#1694F6] w-full text-white">Login</Button>
        </form>
    )
};

export default FormRegister;