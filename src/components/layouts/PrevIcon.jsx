import { FiArrowLeftCircle } from "react-icons/fi";


const PrevIcon = (props) => {
    const { className,  onClick } = props;
    return (
        <div className="pl-2">
        <div
        className={`inline-block  ${className}  `}
        
        onClick={onClick}
     
    >
        <div className="text-[24px] text-white">
        <FiArrowLeftCircle  /> 
        </div>
        </div>
        </div>
    );
};

export default PrevIcon;