import { FaRegEnvelope } from "react-icons/fa";
import Input from "../Input";

const InputField = () => {
    return (
        <div className="shadow-[#d1e6e4] shadow-2xl relative">
            <Input type="text" inputPlaceholder="Enter your email"  className={` w-[456px] h-[74px] ps-16 text-gray-400 text-[18px] font-normal leading-[27px]`}/>
            <FaRegEnvelope className="absolute top-7 left-10 text-[20px] text-gray-300"/>
            <button className={`bg-[#28B0A6] hover:bg-[#077d75] text-white  w-[185px] h-[74px] duration-300 ease-in`}>Send Now !</button>
        </div>
    );
};

export default InputField;