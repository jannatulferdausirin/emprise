import Flex from "./Flex";
import Image from "./Image";
import tourImg from "../assets/em-tour-1.jpeg";
import tourImg1 from "../assets/em-tour-2.jpeg"
import Paragraph from "./Paragraph";
import Heading from "./Heading";


const TourrGuidesCard = () => {
  return (
    <>
      <Flex>
      <Flex className={`gap-8 relative`}>
        <div>
       
          <Image
            src={tourImg}
            alt=""
            className={`w-[512px] h-[670px] rounded`}
          />
        </div>
        <div >
      
          <Heading
            as="h4"
            text="01"
            className=" bg-gray-100 p-[30px] absolute bottom-0 left-0 rounded-tr-3xl text-[24px] font-semibold"
          />
        </div>
        <div className="">
          <Paragraph
            text="Adventure Guru"
            className={`text-[24px] font-normal leading-[36px] tracking-[-0.38px] text-[#28B0A6] pt-[38px]`}
          />

          <Heading
            as="h3"
            text="Martina
James Junior"
            className="text-[40px] font-semibold tracking-[-0.77px] py-4 w-[270px]"
          />
          <Flex className={`gap-8 items-center py-[100px]`}>
            <div>
              <Heading
                as="h4"
                text="About"
                className="text-[24px] font-semibold  py-4"
              />
              <Paragraph
                text="Check Out Daily Deals and Promotion on
hotels. Easy & Fast Booking."
                className={`text-[16px] font-normal w-[335px] text-[#546179
]  `}
              />
            </div>
            <div>
              <Heading
                as="h4"
                text="journey"
                className="text-[24px] font-semibold py-4"
              />
              <Paragraph
                text="Check Out Daily Deals and Promotion on
hotels. Easy & Fast Booking."
                className={`text-[16px] font-normal w-[335px] text-[#546179
] `}
              />
            </div>
          </Flex>
          <Flex className={`justify-between gap-4 w-[306px]`}>
            <Heading
              as="h4"
              text="Facebook"
              className="text-[18px] font-semibold  py-4 "
            />
            <Heading
              as="h4"
              text="Instagram"
              className="text-[18px] font-semibold  py-4 "
            />
            <Heading
              as="h4"
              text="Twitter"
              className="text-[18px] font-semibold  py-4 "
            />
          </Flex>
        </div>
      </Flex>
    
     <Flex className="relative -z-20">
       
       <Image
         src={tourImg1}
         alt=""
         className={`w-[424px] h-[670px] rounded`}
       />
    
     <div >
   
       <Heading
         as="h4"
         text="02"
         className=" bg-gray-100 p-[30px] absolute bottom-0 left-0 rounded-tr-3xl text-[24px] font-semibold"
       />
     </div>
     </Flex>
    
      </Flex>
    </>
  );
};

export default TourrGuidesCard;
