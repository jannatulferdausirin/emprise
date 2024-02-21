
import Heading from "../Heading";
import Paragraph from "../Paragraph";
import Flex from "../Flex";
import { BsDashLg } from "react-icons/bs";
import VeryCold from "./VeryCold";

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
     <VeryCold/>
    </div>
    </div>
  );
};

export default Banner;
