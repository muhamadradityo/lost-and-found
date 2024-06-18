const InputBar = (props) => {
    const { id, label, type, placeholder } = props;

    return (
        <div className="flex flex-col items-center mx-auto w-full max-w-[587px]">
            <label htmlFor={id} className="text-sm w-full font-medium text-[#1694F6] mb-1 pl-2">
                {label}
            </label>
            <input
                type={type}
                id={id}
                className="w-full bg-white mb-5 p-3 hover:bg-slate-100 rounded-md shadow-lg"
                placeholder={placeholder}
            />
        </div>
    );
};

export default InputBar;