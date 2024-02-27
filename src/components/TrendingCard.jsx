import { useDispatch } from "react-redux";
import Flex from "./Flex";
import Heading from "./Heading";
import Image from "./Image";
import Paragraph from "./Paragraph";
import Badge from "./layouts/Badge";
import { FaCheck, FaRegClock, FaRegHeart, FaStar } from "react-icons/fa";
import { increment } from "./slices/counterSlice";

const TrendingCard = ({ TrendingImg, TrendingBadge, trendingHeading }) => {
    
  
  const dispatch = useDispatch()
  return (
    <div className="px-2 mr-6 mb-12 shadow-lg shadow-gray h-[460px]">
     <div className="relative">
     <Image src={TrendingImg} className={` rounded-xl`}/>
   
     <Badge text={TrendingBadge} className={`absolute top-5 right-5 px-2 bg-red-200 rounded-2xl`} />
    
     </div>
      <Flex className={`justify-between px-4`}>
        <div>
          <Heading as="h4" text={trendingHeading} className="font-semibold text-[24px]"/>
          <Paragraph text="Hiking Tour | Stoke on Trent" className={`text-16px font-normal pb-6`}/>
        </div>
        {/* heart====== */}
        <div className="pt-2 ">
          <FaRegHeart className="text-[24px] hover:text-red-600 "  onClick={() => dispatch(increment())}/>
         
        </div>
      </Flex>
      {/* =====star */}
      <Flex className={`justify-between  px-4`}>
        <div>
        <Paragraph text="from" className={`text-[14px]`}/> 
        <Heading as="h2" text="$895.00" className={`font-semibold  leading-[-0.44px] text-xl`}/>
          <Paragraph text="*Price varies" className={`text-[14px] pb-4`}/> 
        </div>
        <div>
            <Flex className={`pb-2`}>
            <FaStar className="text-yellow-400"/>
            <FaStar className="text-yellow-400"/>
            <FaStar className="text-yellow-400"/>
            <FaStar className="text-yellow-400"/>
            <FaStar className="text-yellow-400"/>
            
         
            </Flex>
        <Paragraph text="4.7 (108)" /> 
        </div>
      </Flex>
      <div>
        <Flex className={`text-[14px] font-medium items-center gap-2 py-2  px-4`}>
        <FaRegClock />
        <Paragraph text="7 Days" /> 
        </Flex>
        <Flex  className={`text-[14px] font-medium items-center gap-4 pb-4  px-4`}>
            <Flex className={`items-center  gap-2`}>
            <FaCheck className="text-green-600"/>
            <Paragraph text="Free Cancellation" /> 
            </Flex>
            <Flex className={`items-center gap-2`}>
            <FaCheck className="text-green-600"/>
            <Paragraph text="New on Entrada" /> 
            </Flex>
        </Flex>
      </div>
    </div>
  );
};

export default TrendingCard;
