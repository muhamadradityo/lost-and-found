const Square = (props) => {
    const { children } = props;

    return (
        <div className="bg-[#DDDDDD] p-8 h-full rounded-lg shadow-lg">{children}</div>
    );
};

export default Square;