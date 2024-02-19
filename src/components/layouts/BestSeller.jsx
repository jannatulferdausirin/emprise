import BestSellerCard from "../BestSellerCard";
import Heading from "../Heading";
import Paragraph from "../Paragraph";
import Img1 from "../../assets/em-seller-1.jpeg";
import Img2 from "../../assets/em-seeler-2.jpeg";
import Img3 from "../../assets/em-seller-3.jpeg";

import Flex from "../Flex";
import Button from "../Button";

const BestSeller = () => {
  return (
    <div className="w-[1600px] mx-auto my-24">
      <Flex className={`justify-between items-center px-2`}>
      
        <div>
          <Heading
            as="h3"
            text="Best Seller"
            className="font-bold text-[40px] leading-10 tracking-[-0.64px]"
          />
          <Paragraph
            text="Sost Brilliant reasons Entrada should be your one-stop-shop!"
            className={`text-[24px] font-normal leading-6 tracking-[-0.38px] text-[#546179] py-8`}
          />
        </div>
        <Button text="Check All" className={`text-[24px] hover:text-white`}/>
      </Flex>
      <Flex className={`gap-4`}>
        <BestSellerCard bestSellerImg={Img1}  sellerHeading="Train Tour Skyline" />
        <BestSellerCard bestSellerImg={Img2}  sellerHeading="Sea Nature Views" />
        <BestSellerCard bestSellerImg={Img3}  sellerHeading="Trilogy Market Ptr"  />
      </Flex>
    </div>
  );
};

export default BestSeller;
