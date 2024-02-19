import cateImg from '../../assets/Beach.png'
import cateImg1 from '../../assets/Bungee Jumping.png'
import cateImg2 from '../../assets/City Tours.png'
import cateImg3 from '../../assets/Backpack.png'
import cateImg4 from '../../assets/Jungle.png'
import CategoryCard from "../CategoryCard";
import Flex from "../Flex";
import Heading from "../Heading";
import Paragraph from "../Paragraph";
import { IoIosArrowDropleft } from "react-icons/io";
import { IoIosArrowDropright } from "react-icons/io";
const Category = () => {
    return (
        <div className="w-[1600px] mx-auto mt-[120px]">
      <Flex className={`justify-between items-center px-2`}>
      
        <div>
          <Heading
            as="h3"
            text="Select Category"
            className="font-bold text-[40px] leading-10 tracking-[-0.64px]"
          />
          <Paragraph
            text="Sost Brilliant reasons Entrada should be your one-stop-shop!"
            className={`text-[24px] font-normal leading-6 tracking-[-0.38px] text-[#546179] py-8`}
          />
        </div>
       <Flex>
       <IoIosArrowDropleft className="text-gray-400 hover:bg-[#28B0A6] hover:text-white text-[60px] rounded-full duration-300  ease-in"/>
       <IoIosArrowDropright className="text-gray-400 hover:bg-[#28B0A6] hover:text-white text-[60px] rounded-full  duration-300 ease-in "/>
       </Flex>
      </Flex>
      {/* category card */}
      <Flex className={`gap-4 mt-20 mb-[130px]`}>
        <CategoryCard categoryHeding="Beach Activity" categoryBadgeText="4.9" categoryImg={cateImg}/>
        <CategoryCard categoryHeding="Bungee Jump" categoryBadgeText="3.9" categoryImg={cateImg1}/>
        <CategoryCard categoryHeding="City Tours" categoryBadgeText="3.8" categoryImg={cateImg2}/>
        <CategoryCard categoryHeding="Hiking trips" categoryBadgeText="4.5" categoryImg={cateImg3}/>
        <CategoryCard categoryHeding="Jungle" categoryBadgeText="4.5" categoryImg={cateImg4}/>
      </Flex>
        </div>
    );
};

export default Category;