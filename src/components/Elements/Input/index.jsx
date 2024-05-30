const InputForm = (props) => {
    const { name, label, type, placeholder} = props;
    return (
        <div className="mb-6">
            <Label htmlFor={name}>{label}</Label>
            <Input name={name} type={type} placeholder={placeholder} />
        </div>
    );
};

const Input = (props) => {
    const { type, placeholder, name } = props
    return (
        <input
            type={type}
            className="py-4 px-3 rounded-md text-xs"
            placeholder={placeholder}
            name={name}
            id={name}
        />
    );
};

const Label = (props) => {
    const { htmlFor, children } = props;
    return (
        <label
            htmlFor={htmlFor}
            className="text-[#1694F6] text-xs" 
        >
            {children}
        </label>
    );
};

export default InputForm;