import AuthLayout from "../../../my-react-app/src/components/Layouts/AuthLayouts"
import FormRegister from "../../components/Fragments/FormRegister";

const RegisterPage = () => {
    return (
        <AuthLayout title="Register" type="register">
            <FormRegister />
        </AuthLayout>
    );
};

export default RegisterPage;