import ExperienceLive from '../layouts/ExperienceLive'
import BestSeller from '../layouts/BestSeller'
import TopDestination from '../layouts/TopDestination'
import Adventure from '../layouts/Adventure'
import TravelAware from '../layouts/TravelAware'
import Banner from './Banner'
import Location from './Location'
import Category from './Category'

const Destination = () => {
    return (
      
            <div>
                <Banner/>
                <Location/>
                <Category/>
            <ExperienceLive/>
            <BestSeller/>
            <TopDestination/>
           <Adventure/>
           < TravelAware/>
        </div>
    
    );
};

export default Destination;