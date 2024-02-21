import cateImg from "../../assets/Beach.png";
import cateImg1 from "../../assets/Bungee Jumping.png";
import cateImg2 from "../../assets/City Tours.png";
import cateImg3 from "../../assets/Backpack.png";
import cateImg4 from "../../assets/Jungle.png";
import CategoryCard from "../CategoryCard";
import Flex from "../Flex";
import Heading from "../Heading";
import Paragraph from "../Paragraph";

import Slider from "react-slick";

import CategoryprevIcon from "./CategoryprevIcon";
import CategoryNext from "./CategoryNext";

const Category = () => {
  const settings = {
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 5,
    swipeToSlide: true,
    nextArrow: <CategoryNext />,
    prevArrow: <CategoryprevIcon />,
    afterChange: function (index) {
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
      );
    },
  };
  return (
    <div className="w-[1600px] mx-auto mt-[120px] mb-[100px]">
     
      <div className={`justify-between items-center px-2`}>
        <div className="pb-8">
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
      </div>
      {/* category card */}

      <div className="slider-container">
        <Slider {...settings}>
          <CategoryCard
            categoryHeding="Beach Activity"
            categoryBadgeText="4.9"
            categoryImg={cateImg}
          />

          <CategoryCard
            categoryHeding="Bungee Jump"
            categoryBadgeText="3.9"
            categoryImg={cateImg1}
          />

          <CategoryCard
            categoryHeding="City Tours"
            categoryBadgeText="3.8"
            categoryImg={cateImg2}
          />

          <CategoryCard
            categoryHeding="Hiking trips"
            categoryBadgeText="4.5"
            categoryImg={cateImg3}
          />

          <CategoryCard
            categoryHeding="Jungle"
            categoryBadgeText="4.5"
            categoryImg={cateImg4}
          />
        </Slider>
      </div>

      <Flex></Flex>
    </div>
  );
};

export default Category;
