const Button = (props) => {
    const { children = "...", onClick = () => {}, type = "button"} = props;
    return (
      
      <div className="flex items-center justify-center mx-auto mt-7">
        <button 
          className="text-white bg-[#FF7200] mx-auto py-1 w-24 rounded-md shadow-sm shadow-black/20"
          type={type}
          onClick={onClick}
        >
          {children}
        </button>
      </div>
    );
  }; 

  export default Button;