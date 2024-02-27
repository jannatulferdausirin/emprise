import TrendingIconImg from "../../assets/em2.jpeg";
import Flex from "../Flex";
import Heading from "../Heading";
import CancelIcon from "../Icons/CancelIcon";
import ChopperIcon from "../Icons/ChopperIcon";
import ClockIcon from "../Icons/ClockIcon";
import MoneyIcon from "../Icons/MoneyIcon";
import SpecialIcon from "../Icons/SpecialIcon";
import StarIcon from "../Icons/StarIcon";
import Paragraph from "../Paragraph";
import TrendingCard from "../TrendingCard";
import Input from "../Input";
import sellerImg2 from "../../assets/em-seller-1.jpeg";
import sellerImg3 from "../../assets/em-seeler-2.jpeg";
import sellerImg4 from "../../assets/em-seller-3.jpeg";
import BestSellerCard  from "../BestSellerCard";
import { FaStar } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import RecentlyPrevIcon from "./RecentlyPrevIcon";
import RecentlyNextIcon from "./RecentlyNextIcon";
import Slider from "react-slick";





const SearchIcon = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1 , 
    prevArrow: <RecentlyPrevIcon/>,
    nextArrow: <RecentlyNextIcon/>};
  return (
    <div className="w-[1600px] mx-auto">
      <Flex className={`border justify-between px-4 py-4 rounded`}>
        <Paragraph
          text="Showing 1 - 10 of 2037 results for “cultural”"
          className={`text-[18px] font-normal leading-[20px]`}
        />
        <Flex className={`gap-2 pr-4`}>
          <Paragraph
            text="Sort by:  "
            className={`text-[18px] font-normal leading-[20px]`}
          />
          <Paragraph
            text="   Most Popular"
            className={`text-[18px] font-semibold leading-[20px]`}
          />
        </Flex>
      </Flex>
      {/* discount part */}
      <Flex className={`justify-between mt-8 mb-8`}>
        <Flex
          className={`border justify-between px-4 py-2 rounded gap-2 items-center`}
        >
          <MoneyIcon />
          <Paragraph
            text="Discounted Deals"
            className={`text-[16px] font-normal leading-[20px]`}
          />
        </Flex>
        <Flex
          className={`border justify-between px-4 py-2 rounded gap-2 items-center`}
        >
          <CancelIcon />
          <Paragraph
            text="Free Cancellation"
            className={`text-[16px] font-normal leading-[20px]`}
          />
        </Flex>
        <Flex
          className={`border justify-between px-4 py-2 rounded gap-2 items-center`}
        >
          <SpecialIcon />
          <Paragraph
            text="Entrada Specials"
            className={`text-[16px] font-normal leading-[20px]`}
          />
        </Flex>
        <Flex
          className={`border justify-between px-4 py-2 rounded gap-2 items-center`}
        >
          <ClockIcon />
          <Paragraph
            text="Few Seats Left"
            className={`text-[16px] font-normal leading-[20px]`}
          />
        </Flex>
        <Flex
          className={`border justify-between px-4 py-2 rounded gap-2 items-center`}
        >
          <ChopperIcon />
          <Paragraph
            text="Private Tours"
            className={`text-[16px] font-normal leading-[20px]`}
          />
        </Flex>
        <Flex
          className={`border justify-between px-4  py-2 rounded gap-2 items-center`}
        >
          <StarIcon />
          <Paragraph
            text="New on Entrada"
            className={`text-[16px] font-normal leading-[20px]`}
          />
        </Flex>
      </Flex>
      {/* where are u travelling part */}
      <Flex className="gap-20 px-8">
        <div className="w-[424px] border pl-24 rounded">
          <div className="mt-4 ">
            <Heading as="h4" text="When are you traveling?" />
           <div className="">
           <Input
              type="date"
              inputPlaceholder="Select your date"
              className={`border pl-4 mt-4 py-2 rounded px-4 `}
            />
             
           </div>
           
          </div>
          <div>
            <Paragraph text="Popular Tags" className={`pb-4 pt-8`} />
            <Flex className={`gap-4 py-1`}>
              <Input type="checkbox" className={`w-[15px] `} />
              <Paragraph text="Child Friendly" />
            </Flex>
            <Flex className={`gap-4 py-1`}>
              <Input type="checkbox" className={`w-[15px] `} />
              <Paragraph text="Taking extra precautions" />
            </Flex>
            <Flex className={`gap-4 py-1`}>
              <Input type="checkbox" className={`w-[15px] `} />
              <Paragraph text="Away from the chaos" />
            </Flex>
            <Flex className={`gap-4 py-1`}>
              <Input type="checkbox" className={`w-[15px] `} />
              <Paragraph text="Epic Challenges" />
            </Flex>
            <Flex className={`gap-4 py-1`}>
              <Input type="checkbox" className={`w-[15px] `} />
              <Paragraph text="Epic Challenges" />
            </Flex>
          </div>
          <div>
            <Paragraph text="Price Range" className={`pb-4 pt-8`} />
           
            <Flex className={`gap-4 py-1`}>
              <Input type="text" inputPlaceholder="$250" className={`border rounded px-4 w-[120px]`} /> -
              <Input type="text" inputPlaceholder="$750" className={`border rounded px-4 w-[120px]`} />
            </Flex>
           
             
          
        
          </div>

          <div>
            <Paragraph text="Duration" className={`pb-4 pt-8`} />
            <Flex className={`gap-4 py-1`}>
              <Input type="checkbox" className={`w-[15px] `} />
              <Paragraph text="Upto 1 Hour" />
            </Flex>
            <Flex className={`gap-4 py-1`}>
              <Input type="checkbox" className={`w-[15px] `} />
              <Paragraph text="1 to 4 Hours" />
            </Flex>
            <Flex className={`gap-4 py-1`}>
              <Input type="checkbox" className={`w-[15px] `} />
              <Paragraph text="4 Hours to 1 Day" />
            </Flex>
            <Flex className={`gap-4 py-1`}>
              <Input type="checkbox" className={`w-[15px] `} />
              <Paragraph text="1 to 3 Days" />
            </Flex>
            <Flex className={`gap-4 py-1`}>
              <Input type="checkbox" className={`w-[15px] `} />
              <Paragraph text="3 Days or More" />
            </Flex>
          </div>

          <div>
            <Paragraph text="Age Group" className={`pb-4 pt-8`} />
            <Flex className={`gap-4 py-1`}>
              <Input type="checkbox" className={`w-[15px] `} />
              <Flex className={`text-gray-400 gap-1`}>
                <FaStar className={`text-yellow-500`} />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </Flex>
            </Flex>
            <Flex className={`gap-4 py-1`}>
              <Input type="checkbox" className={`w-[15px] `} />
              <Flex className={`text-gray-400 gap-1`}>
                <FaStar className={`text-yellow-500`} />
                <FaStar className={`text-yellow-500`} />
                <FaStar />
                <FaStar />
                <FaStar />
              </Flex>
            </Flex>
            <Flex className={`gap-4 py-1`}>
              <Input type="checkbox" className={`w-[15px] `} />
              <Flex className={`text-yellow-500 gap-1`}>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar className={`text-gray-400`} />
                <FaStar className={`text-gray-400`} />
              </Flex>
            </Flex>
            <Flex className={`gap-4 py-1`}>
              <Input type="checkbox" className={`w-[15px] `} />
              <Flex className={`text-yellow-500 gap-1`}>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar className={`text-yellow-500`} />
              </Flex>
            </Flex>
            <Flex className={`gap-4 py-1`}>
              <Input type="checkbox" className={`w-[15px] `} />
              <Flex className={`text-yellow-500 gap-1`}>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </Flex>
            </Flex>
          </div>

          <div>
            <Paragraph text="Age Group" className={`pb-4 pt-8`} />
            <Flex className={`gap-4 py-1`}>
              <Input type="checkbox" className={`w-[15px] `} />
              <Paragraph text="1 & Up" />
            </Flex>
            <Flex className={`gap-4 py-1`}>
              <Input type="checkbox" className={`w-[15px] `} />
              <Paragraph text="3 & Up" />
            </Flex>
            <Flex className={`gap-4 py-1`}>
              <Input type="checkbox" className={`w-[15px] `} />
              <Paragraph text="7 & Up" />
            </Flex>
            <Flex className={`gap-4 py-1`}>
              <Input type="checkbox" className={`w-[15px] `} />
              <Paragraph text="13 & Up" />
            </Flex>
            <Flex className={`gap-4 py-1`}>
              <Input type="checkbox" className={`w-[15px] `} />
              <Paragraph text="18 & Up" />
            </Flex>
          </div>
          <div>
            <Paragraph text="Specials" className={`pb-4 pt-8`} />
            <Flex className={`gap-4 py-1`}>
              <Input type="checkbox" className={`w-[15px] `} />
              <Paragraph text="Discounted deals" />
            </Flex>
            <Flex className={`gap-4 py-1`}>
              <Input type="checkbox" className={`w-[15px] `} />
              <Paragraph text="Free Cancellations" />
            </Flex>
            <Flex className={`gap-4 py-1`}>
              <Input type="checkbox" className={`w-[15px] `} />
              <Paragraph text="Private Groups" />
            </Flex>
            <Flex className={`gap-4 py-1`}>
              <Input type="checkbox" className={`w-[15px] `} />
              <Paragraph text="New on Entrada" />
            </Flex>
            <Flex className={`gap-4 py-1`}>
              <Input type="checkbox" className={`w-[15px] `} />
              <Paragraph text="Entrada Specials" />
            </Flex>
          </div>
        </div>
        {/*instead search item will found here */}
        <div>
          <Flex>
            <TrendingCard TrendingImg={TrendingIconImg} />
            <TrendingCard TrendingImg={TrendingIconImg} />
          </Flex>
          <Flex>
            <TrendingCard TrendingImg={TrendingIconImg} />
            <TrendingCard TrendingImg={TrendingIconImg} />
          </Flex>
          <Flex>
            <TrendingCard TrendingImg={TrendingIconImg} />
            <TrendingCard TrendingImg={TrendingIconImg} />
          </Flex>{" "}
        </div>
      </Flex>
    
      <div>
      <div className="mt-24">
          <Heading
            as="h3"
            text="Recently Viewed"
            className="font-bold text-[40px] leading-10 tracking-[-0.64px]"
          />
          <Paragraph
            text="Sost Brilliant reasons Entrada should be your one-stop-shop!"
            className={`text-[24px] font-normal leading-6 tracking-[-0.38px] text-[#546179] py-8`}
          />
        </div>
        <div className="gap-6 mb-12 slider-container">
  <Slider {...settings}>
      
        <BestSellerCard bestSellerImg={sellerImg2}  sellerHeading="Trilogy Market Ptr"  /> <BestSellerCard bestSellerImg={sellerImg3}  sellerHeading="Trilogy Market Ptr"  /> <BestSellerCard bestSellerImg={sellerImg4}  sellerHeading="Trilogy Market Ptr"  />
       
        </Slider>
</div>
      </div>
    </div>
  );
};

export default SearchIcon;
