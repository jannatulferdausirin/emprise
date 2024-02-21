import { FiArrowRightCircle } from "react-icons/fi";



const NextIcon = (props) => {
    const { className,onClick } = props;
    return (
       <div className="absolute top-0 left-10">
         <div
        className={`inline-block  ${className}`}
        
        onClick={onClick}
     
    >
        <div className="text-[24px] text-white">
        <FiArrowRightCircle  /> 
        </div>
         
        </div>
       </div>
    );
};

export default NextIcon;