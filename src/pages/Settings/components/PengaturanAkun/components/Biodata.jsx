const Biodata = (props) => {
    const { label, value } = props;
    
    return (
        <div className="flex flex-row mb-5">
            <h1 className="flex justify-start text-xl text-[#1694F6] font-regular">{label}</h1>
            <h1 className="flex justify-end text-xl text-[#888888] font-regular ml-auto">{value}</h1>
        </div>
    );
};

export default Biodata;