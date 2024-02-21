import Flex from "../Flex";
import Heading from "../Heading";
import Input from "../Input";
import { FaCalendarAlt } from "react-icons/fa";
import { RiPlayCircleLine } from "react-icons/ri";
import { FiSearch } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import Country from "./Country";

const Location = () => {
    return (
      
    
     <div className="w-[1328px] mx-auto -mt-24 mb-[100px]">
 <Flex className={`rounded-xl bg-white justify-evenly shadow-2xl `}>
        <div className="relative py-8  after:absolute after:h-[70px] after:w-[2px] after:bg-gray-300 after:bottom-12 after:right-0 after:z-20 px-8">
          <Heading
            as="h3"
            text="Location"
            className="font-semibold text-[28px] "
          />
          <div className="h-[4px] w-[110px] bg-red-200 absolute top-16 shadow "></div>
          <Flex className={`items-center gap-2 py-4 text-gray-300`}>
          <div>
          <Input
              type="text"
              inputPlaceholder="Enter your destination"
              className={`underline  `}
            />
             <Country/>
          </div>
            <IoLocationOutline className="text-[18px] text-black" />
           
          </Flex>
        </div>
        <div className="relative py-8 after:absolute after:h-[70px] after:w-[2px] after:bg-gray-300 after:bottom-12 after:right-0 after:z-20 px-8">
          <Heading
            as="h3"
            text="Activity"
            className="font-semibold text-[28px] "
          />
          <div className="h-[4px] w-[95px] bg-red-200 absolute top-16 shadow "></div>
          <Flex className={`items-center gap-2 py-4 text-gray-300`}>
            <Input
              type="text"
              inputPlaceholder="Bungee jump"
              className={`underline `}
            />
          
            <RiPlayCircleLine className="text-[18px] text-black" />
          </Flex>
        </div>
        <div className="relative py-8 after:absolute after:h-[70px] after:w-[2px] after:bg-gray-300 after:bottom-12 after:right-0 after:z-20 px-8">
          <Heading
            as="h3"
            text="Date"
            className="font-semibold text-[28px] "
          />
          <div className="h-[4px] w-[60px] bg-red-200 absolute top-16 shadow "></div>
          <Flex className={`items-center py-4 text-gray-300 `}>
            <Input
              type="text"
              inputPlaceholder="Set Date"
              className={`underline `}
            />
           <div> <FaCalendarAlt className="text-[18px] text-black" /></div>
          </Flex>
        </div>
     
        <div className="py-8 ">
          <div className={` bg-[#28B0A6] hover:bg-[#077d75] rounded-xl p-[35px] duration-300 ease-in`}>
            <FiSearch className="text-[32px] text-white " />
          </div>
        </div>
      </Flex>
     </div>
   
    );
};

export default Location;