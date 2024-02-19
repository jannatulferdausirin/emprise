

const Button = ({className,text}) => {
    return (
        <button className={`text-[20px]    rounded-full hover:bg-[#28B0A6] px-4 duration-500 ease-out py-2 ${className}`}>
          {text}  
        </button>
    );
};

export default Button;