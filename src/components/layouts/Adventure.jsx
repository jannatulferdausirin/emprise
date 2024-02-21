import Flex from "../Flex";
import Image from "../Image";
import Image1 from "../../assets/em-tour-2.jpeg";
import Image2 from "../../assets/em-adventure-2.jpeg";
import Image3 from "../../assets/em-adventure-3.jpeg";

import InputField from "./InputField";
import Paragraph from "../Paragraph";
import Heading from "../Heading";

const Adventure = () => {
  return (
    <>
      <Flex className={`w-[1600px] mx-auto my-24 gap-8`}>
        <Flex className={`gap-4`}>
          <Image src={Image1} className={`h-[610px] w-[376px] rounded`} />
          <div className="">
            <Image src={Image2} className={`mb-4 h-[296px] w-[376px] rounded`} />
            <Image src={Image3} className={`h-[296px] w-[376px] rounded`} />
          </div>
        </Flex>
        <div >
            <Paragraph text="Subscribe For Offers" className={`text-[24px] font-normal leading-[36px] tracking-[-0.38px] text-[#28B0A6] pt-16`}/>
           
            <Heading as="h3" text="Adventures Calling 
            You Guys!" className="text-[48px] font-semibold tracking-[-0.77px] py-4 w-[466px] "/>
            <Paragraph text="The Brilliant reasons Entrada should be
your one-stop-shop!" className={`text-[24px] font-normal leading-[36px] tracking-[-0.12px] text-[#546179
] pb-8 w-[450px]`}/>
         <div className="relative"> <InputField /></div>
          <Paragraph text="Expect a reply in 2-3 working days" className={`text-[16px] font-normal leading-[24px] tracking-[-0.38px] text-[#546179
] pt-12`}/>
        </div>
      </Flex>
    </>
  );
};

export default Adventure;
