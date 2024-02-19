import Button from "../Button";
import Heading from "../Heading";
import Paragraph from "../Paragraph";


const ExperienceLive = () => {
    return (
        <>
           
            <div className="bg-[#28B0A6] w-[1600px] mx-auto rounded-xl ">
           <div className="py-10 text-center">
            
           <Heading as="h2" text="Tour the World from Your Couch with #ExperienceLive!" className="text-white w-[1076px] font-medium text-[56px] mx-auto"/>
           <Paragraph text="To kickstart your digital adventures with Entrada" className={`text-[#bfe2df] text-[32px] font-regular py-4`}/> 
           <Button text="Check All" className={`text-white hover:bg-white text-[24px] font-regular  hover:text-[#28B0A6] `}/>
           </div>
           </div>
         
        </>
    );
};

export default ExperienceLive;