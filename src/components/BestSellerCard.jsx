import Flex from "./Flex";
import Heading from "./Heading";
import shareImg from "../assets/Share.png";

import Paragraph from "./Paragraph";
import Badge from "./layouts/Badge";
import Image from "./Image";
import Button from "./Button";


const BestSellerCard = ({ bestSellerImg,sellerHeading}) => {
  return (
    <div className="">
     <div className="relative group">
     <Image src={ bestSellerImg} className={`w-[512px] h-[346px] rounded-2xl my-12 `}/>
    <div className="hidden group-hover:block">
    <Badge text="30%" className={`absolute top-5 bg-red-100 px-2 py-1 right-10`}/>
     <Paragraph text="10 Days | 09 Night" className={`absolute top-52 text-white px-4 text-[18px] font-normal leading-[27px]`}/>
     <Flex className={`items-center justify-between absolute top-64 text-white gap-52 px-4`}>
        <Heading as="h4" text="$895.50" className="border-b-2 text-[32px] leading-[48px] tracking-[-0.48px]font-semibold"/>
        
     <Flex>
      
     <Image src={shareImg}/>
        
        <Button text="Explore" className={`hover:text-white text-[18px] leading-[27px] font-normal`}/>
     </Flex>
        
       
     </Flex>
    </div>
     </div>

      
    <div className="justify-center text-center ">
    <Heading
        as="h4"
        text={sellerHeading}
        className="text-[24px]  font-normal leading-6 tracking-[-0.38px]"
      />
      <Paragraph
        text="Check Out Daily Deals and Promotion on Hotels. 
Easy & Fast Booking"
        className="text-[16px]  font-normal leading-7 tracking-[0.5px]  py-4 w-[390px] mx-auto"
      />
    </div>
    </div>
  );
};

export default BestSellerCard;
