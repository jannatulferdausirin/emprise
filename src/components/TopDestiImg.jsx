import Heading from "./Heading";
import Image from "./Image";
import Paragraph from "./Paragraph";
import Badge from "./layouts/Badge";


const TopDestiImg = ({topDestiImage,topDestiBadge,topDestiHeading,className}) => {
    return (
        <div className="relative">
            <Image src={topDestiImage} className={`${className}`}/>
            <Badge text={topDestiBadge} className={`absolute top-5 left-5 bg-yellow-50 rounded-3xl px-4`}/>
            <div className="absolute text-white bottom-10 left-5">
                <Heading as="h5" text={topDestiHeading} className="font-medium text-[24px] "/>
                <Paragraph text="Waterfall" className={`text-[16px]`}/>
            </div>
        </div>
    );
};

export default TopDestiImg;