
import Heading from "./Heading";
import Image from "./Image";
import Paragraph from "./Paragraph";
import Badge from "./layouts/Badge";


const CategoryCard = ({categoryHeding,categoryImg,categoryBadgeText}) => {
    return (
        <div className="relative mr-6 ">
            <div className="pl-10 border h-[290px] rounded-xl shadow-lg  ">
                <Image src={categoryImg} className={`pt-[100px]`}/>
                <Heading as="h4" text={categoryHeding} className="py-4 text-[24px] font-medium"/>
                <Paragraph text="196 Activities" className={`text[16px] pb-6 text-gray-400`}/>
            </div>
            <Badge text={categoryBadgeText} className={`absolute top-10 z-20 right-5 bg-red-100  text-red-400 px-4 rounded-3xl `}/>
            
        </div>
    );
};

export default CategoryCard;