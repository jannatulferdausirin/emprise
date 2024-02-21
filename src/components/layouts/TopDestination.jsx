
import Slider from "react-slick";
import Container from "../Container";
import Heading from "../Heading";
import Paragraph from "../Paragraph";
import TopDestinationPrevIcon from "./TopDestinationPrevIcon";
import TopDestinationNextIcon from "./TopDestinationNextIcon";
import TopDestinationCard from "./TopDestinationCard";



const TopDestination = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1 , 
    prevArrow: <TopDestinationPrevIcon/>,
    nextArrow: <TopDestinationNextIcon/>};
return (
    <Container>
    <div className={`justify-between items-center px-2 my-[100px]`}>
    <div className="pb-8">
      <Heading
        as="h3"
        text="Top Destinations"
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
    <TopDestinationCard />
    </div>
    <div>
    <TopDestinationCard />
    </div>
    <div>
    <TopDestinationCard />
    </div>
   
  </Slider>
</div>
  </div>
 
  </Container>
);
};

 

export default TopDestination
