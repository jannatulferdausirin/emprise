import { FiArrowRightCircle } from "react-icons/fi";


const TourNextIcon = (props) => {
    const { className,  onClick } = props;
    return (
        <div className="absolute pl-2 right-10 -top-24">
        <div
        className={`inline-block  ${className}  `}
        
        onClick={onClick}
     
    >
        <div className="text-[24px] text-white">
        <FiArrowRightCircle  className="text-gray-400 hover:bg-[#28B0A6] hover:text-white text-[50px] rounded-full duration-300  ease-in"/> 
        </div>
        </div>
        </div>
    );
};

export default TourNextIcon;