import Container from "../Container";

import Heading from "../Heading";
import Paragraph from "../Paragraph";
import TourrGuidesCard from "../TourrGuidesCard";
import Slider from "react-slick";
import TourNextIcon from "./TourNextIcon";
import TourPrevIcon from "./TourPrevIcon";





const TourGuides = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1 , 
        prevArrow: <TourPrevIcon/>,
        nextArrow: <TourNextIcon/>};
    return (
        <Container>
        <div className={`justify-between items-center px-2 `}>
        <div className="pb-8">
          <Heading
            as="h3"
            text="Tour Guides"
            className="font-bold text-[40px] leading-10 tracking-[-0.64px]"
          />
          <Paragraph
            text="Sost Brilliant reasons Entrada should be your one-stop-shop!"
            className={`text-[24px] font-normal leading-6 tracking-[-0.38px] text-[#546179] py-8`}
          />
        </div>
        <div className="slider-container">
      <Slider {...settings}>
        <div>
        <TourrGuidesCard/>
        </div>
        <div>
        <TourrGuidesCard/>
        </div>
        <div>
        <TourrGuidesCard/>
        </div>
       
      </Slider>
    </div>
      </div>
     
      </Container>
    );
};

export default TourGuides;