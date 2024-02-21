
import { IoIosArrowDropleft } from "react-icons/io";


const CategoryprevIcon = (props) => {
    const { className,  onClick } = props;
    return (
        <div className="absolute right-24 -top-24">
            <div
        className={`inline-block  ${className}  `}
        
        onClick={onClick}
     
    >
       <IoIosArrowDropleft className="text-gray-400 hover:bg-[#28B0A6] hover:text-white text-[50px] rounded-full duration-300  ease-in"/>
        </div>
        </div>
    );
};

export default CategoryprevIcon;