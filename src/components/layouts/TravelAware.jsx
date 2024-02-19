import Image from "../Image";
import ImageTravel from "../../assets/em-labgov.city.png";


const TravelAware = () => {
    return (
       <>
      <div className="w-[1454px] mx-auto my-12 ">
      <picture >
        <Image src={ImageTravel} alt="travel awere image" />
        </picture>
      </div>
        </>
    );
};

export default TravelAware;