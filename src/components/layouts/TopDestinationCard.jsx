import Flex from '../Flex'
import ImageTop  from '../../assets/em-des-1.png'
import ImageTop1  from '../../assets/em-des2.png'
import ImageTop2  from '../../assets/em-des-3.png'
import ImageTop3  from '../../assets/em-des-4.png'
import ImageTop4  from '../../assets/em-des-5.png'
import TopDestiImg from '../TopDestiImg';

const TopDestinationCard = () => {
    return (
        <>
        <Flex className={`gap-12 px-2`}>
        <div>
          <TopDestiImg topDestiImage={ImageTop } topDestiBadge="4.5" topDestiHeading="Vietnam" className="w-[376px] h-[335px] mb-8"/>
          <TopDestiImg topDestiImage={ImageTop1  } topDestiBadge="4.5" topDestiHeading="Vietnam" className="w-[376px] h-[335px]"/>
       
        </div>
        <div>
        <TopDestiImg topDestiImage={ImageTop1  } topDestiBadge="4.5" topDestiHeading="Vietnam" className="w-[512px] h-[702px]"/>
        </div>
        <div>
          <TopDestiImg topDestiImage={ImageTop2 } topDestiBadge="4.5" topDestiHeading="Vietnam" className="w-[648px] h-[335px] mb-4"/>
         <Flex className={`gap-6`}>
         <TopDestiImg topDestiImage={ImageTop3  } topDestiBadge="4.5" topDestiHeading="Vietnam" className="w-[240px] h-[335px]"/> <TopDestiImg topDestiImage={ImageTop4  } topDestiBadge="4.5" topDestiHeading="Vietnam" className="w-[376px] h-[335px]"/>
         </Flex>
       
        </div>
        </Flex>
            
        </>
    );
};

export default TopDestinationCard;