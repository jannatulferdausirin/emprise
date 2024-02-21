import { FaPlusCircle } from "react-icons/fa";
import Flex from "../Flex";
import Heading from "../Heading";
import img from "../../assets/earthIcon.png";
import Paragraph from "../Paragraph";
import { HiMiniArrowLongRight } from "react-icons/hi2";
import Image from "../Image";
import InputField from "./InputField";
import Menu from "./Menu";
import visaImg from "../../assets/em-visa-paypal.png";

const Footer = () => {
  return (
    <div className="w-[1600px] mx-auto my-[100px]">
      <Flex className={`py-4 items-center  justify-between`}>
        <Flex className={`items-center gap-4`}>
          <FaPlusCircle className="text-[24px] " />
          <Heading
            as="h4"
            text="QUICK LINKS"
            className="font-semibold text-[24px]"
          />
          <Heading
            as="h5"
            text="Explore more categories"
            className="text-[24px] pl-8"
          />
        </Flex>

        <Heading
          as="h5"
          text="0123-456-324-54   |   hello@entrada.com"
          className="text-[24px]"
        />
      </Flex>
      <Flex
        className={`justify-between items-center gap-4 border border-x-0 px-4 my-4`}
      >
        <div>
          <Paragraph
            text="Get in touch"
            className={`text-[24px] font-normal leading-[36px] tracking-[-0.38px] text-[#28B0A6] pt-4`}
          />

          <Heading
            as="h3"
            text="Adventures Calling 
            You Guys!"
            className="text-[40px] font-medium tracking-[-0.77px] py-4 w-[388px]"
          />
        </div>
        <Flex className={`gap-4`}>
          <div>
            <Image src={img} />
          </div>
          <div>
            <Heading as="h3" text="Our Offices" className="text-[24px] " />{" "}
            <Heading
              as="h3"
              text="Nepal, USA, India"
              className="text-[24px] font-medium "
            />
            <HiMiniArrowLongRight className="w-[40px]" />
          </div>
        </Flex>
      </Flex>

      {/* ===lets talk */}
      <Flex className={`pb-4 justify-between items-center`}>
        <div>
          <Heading
            as="h3"
            text="Services"
            className="text-[24px] font-medium pb-4 "
          />
          <Menu menuText="Budget Tours" />
          <Menu menuText="Expert Insight" />
          <Menu menuText="Luxury Tours" />
          <Menu menuText="Expert Insight" />
          <Menu menuText="Luxury Tours" />
        </div>
        <div>
          <Heading
            as="h3"
            text="Services"
            className="text-[24px] font-medium pb-4 "
          />
          <Menu menuText="Budget Tours" />
          <Menu menuText="Expert Insight" />
          <Menu menuText="EWest Indies" />
          <Menu menuText="West Indies" />
          <Menu menuText="Luxury Tours" />
        </div>
        <div>
          <Heading
            as="h3"
            text="Services"
            className="text-[24px] font-medium pb-4 "
          />
          <Menu menuText="Budget Tours" />
          <Menu menuText="Expert Insight" />
          <Menu menuText="West Indies" />
          <Menu menuText="Luxury Tours" />
          <Menu menuText="West Indies" />
        </div>
        <div className="">
          <Paragraph
            text="Get in touch"
            className={`text-[24px] font-normal  tracking-[-0.38px] text-[#28B0A6] `}
          />
          <Flex className={` items-center `}>
            <Heading
              as="h3"
              text="Let’s Talk"
              className="text-[40px] font-medium tracking-[-0.77px] py-4 pr-4 "
            />
            <HiMiniArrowLongRight className="w-[40px]" />
          </Flex>
          <InputField className="" />
        </div>
      </Flex>
      <Flex className={`border border-x-0 pt-4 mt-16 justify-between`}>
        <Heading
          as="h3"
          text="Privacy Policy"
          className="text-[24px] font-medium pb-4 "
        />
        <Heading
          as="h3"
          text="Linkedin  /  Facebook  /  Instagram"
          className="text-[24px] font-medium pb-4 "
        />
      </Flex>
      <Flex className={`pt-4 justify-between`}>
        <Heading
          as="h3"
          text="2016-2021 © Emprise"
          className="text-[16px] font-medium pb-4 "
        />
        <div>
          <Image src={visaImg} />
        </div>
      </Flex>
    </div>
  );
};

export default Footer;
