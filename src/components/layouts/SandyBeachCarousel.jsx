import Flex from "../Flex";
import Image from "../Image";
import sandyImage from "../../assets/em-seeler-2.jpeg";
import sandyImage1 from "../../assets/em-seller-1.jpeg";
import sandyImage2 from "../../assets/sandyCover.jpg";



const SandyBeachCarousel = () => {
    return (
        <>
            <Flex className={`justify-between`}>
<div>
<Image src={sandyImage}  className={`w-[240px] h-[152px] mb-4 rounded`}/>
<Image src={sandyImage1} className={`w-[240px] h-[152px] mb-4 rounded`}/>
<Image src={sandyImage2} className={`w-[240px] h-[152px] mb-4 rounded`}/>
<Image src={sandyImage} className={`w-[240px] h-[152px] rounded`}/>

</div>
<div>

<Image src={sandyImage2} className={`w-[1358px] h-[660px] pb-4 rounded`}/> 
</div>
            </Flex>
        </>
    );
};

export default SandyBeachCarousel;