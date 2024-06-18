const InputForm = (props) => {
    const { 
        label, type, id, value, placeholder, onChange 
    } = props;
    
    return (
      <div className="flex flex-col">
            <label htmlFor={id} className="block text-sm font-medium text-[#1694F6] mb-1"> 
                {label}
            </label>
            <input
                type={type}
                id={id}
                className="flex flex-row max-w-full items-center bg-white mb-5 p-3 hover:bg-slate-100 rounded-md shadow-lg cursor-pointer"
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        </div>
    );
};

export default InputForm;