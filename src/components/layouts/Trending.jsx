import TrendingCard from "../TrendingCard";
import TrendingCardImg from "../../assets/em-1.jpeg";
import TrendingCardImg1 from "../../assets/em2.jpeg";
import TrendingCardImg2 from "../../assets/em3.jpeg";
import TrendingCardImg3 from "../../assets/em4.jpeg";
import Slider from "react-slick";
import Paragraph from "../Paragraph";
import Heading from "../Heading";
import Container from "../Container";
import TrendingPrevIcon from "./TrendingPrevIcon";
import TrendingNext from "./TrendingNext";



const Trending = () => {
 
const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2 , 
    prevArrow: <TrendingPrevIcon/>,
    nextArrow: <TrendingNext/>};
return (
    <Container>
    <div className={`justify-between items-center px-2 mb-[100px] mt-[120px]`}>
    <div className="pb-8">
      <Heading
        as="h3"
        text="Trending 2021"
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
           <TrendingCard TrendingImg={TrendingCardImg}  TrendingBadge="30%" trendingHeading="Mountain Hiking Tour"/>
        </div>
  
  
    <div>
           <TrendingCard TrendingImg={TrendingCardImg1}   trendingHeading="Mountain Hiking Tour"/>
      
    </div>
   
    <div>
           <TrendingCard TrendingImg={TrendingCardImg2}  TrendingBadge="30%" trendingHeading="Mountain Hiking Tour"/>
        </div>
  
    <div>
           <TrendingCard TrendingImg={TrendingCardImg3}   trendingHeading="Mountain Hiking Tour"/>
        </div>
    <div>
           <TrendingCard TrendingImg={TrendingCardImg1}  TrendingBadge="30%" trendingHeading="Mountain Hiking Tour"/>
        </div>
    <div>
           <TrendingCard TrendingImg={TrendingCardImg2}   trendingHeading="Mountain Hiking Tour"/>
        </div>
  </Slider>
</div>
  </div>
 
  </Container>
);
};

 

export default Trending;