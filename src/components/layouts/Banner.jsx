import Image from "../Image";
import Image1 from "../../assets/bannerfilm.png";
import Heading from "../Heading";
import Paragraph from "../Paragraph";
import Flex from "../Flex";
import { BsDashLg } from "react-icons/bs";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";

import { FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
const Banner = () => {
  return (
    <div className="w-[1600px] mx-auto mt-8 bg-bannerImg bg-no-repeat bg-cover bg-center rounded-2xl pb-[100px]">
      <div className="pl-[126px]">
        <Flex className={`text-white items-center gap-3 pt-[100px]`}>
          <BsDashLg className="text-[24px]" />
          <Paragraph
            text="The Himalayan Mountain Ranges"
            className={`text-[24px] font-regular `}
          />
        </Flex>
        <Heading
          as="h1"
          text="Nepal Country"
          className="font-bold text-[128px] text-white  py-[50px]"
        />
    
      {/* very cold part */}
      <Flex className={`text-white justify-between `}>
      <div>
      <Paragraph
          text="-02° C Very Cold"
          className={`text-[24px] font-regular `}
        />
        <Flex className={`gap-2 text-[24px] pt-6`}>
        <FiArrowLeftCircle  />
        <FiArrowRightCircle />
        </Flex>
      </div>
        <Flex className={`gap-4 pb-12`}>
         <div> <Image src={Image1} /></div>
         <div className="mr-[50px]">
         <Paragraph
            text="We Accept Payment Through
            All Cards & Banking"
            className={`text-[24px] font-regular w-[330px] `}
          />
          <Heading as="h4"
            text="Book Now!"
            className={`text-[24px] font-bold underline `}
          />
         </div>
        </Flex>
      </Flex>
    </div>
    </div>
  );
};

export default Banner;
