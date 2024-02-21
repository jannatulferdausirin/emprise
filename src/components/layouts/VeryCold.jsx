import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import Paragraph from "../Paragraph";
import Flex from "../Flex";
import { FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import Image from "../Image";
import Heading from "../Heading";

import Image1 from "../../assets/bannerfilm.png";
import PrevIcon from "./PrevIcon";
import NextIcon from "./NextIcon";

const VeryCold = () => {
    var settings = {
        dots:false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow:<PrevIcon/>,
        nextArrow:<NextIcon/>
      };
    return (
        <div className="">
          <Slider {...settings}>
      <div >
      <Flex className={`text-white justify-between `}>
      <div>
      <Paragraph
          text="-02° C Very Cold"
          className={`text-[24px] font-regular `}
        />
       
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
      <div>
      <Flex className={`text-white justify-between `}>
      <div>
      <Paragraph
          text="-10° C Very Cold"
          className={`text-[24px] font-regular `}
        />
       
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
      <div>
      <Flex className={`text-white justify-between `}>
      <div>
      <Paragraph
          text="-23° C Very Cold"
          className={`text-[24px] font-regular `}
        />
       
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
      <div>
      <Flex className={`text-white justify-between `}>
      <div>
      <Paragraph
          text="-18° C Very Cold"
          className={`text-[24px] font-regular `}
        />
       
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
     
    </Slider>
           
        </div>
    );
};

export default VeryCold;