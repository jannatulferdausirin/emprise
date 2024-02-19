import Heading from '../Heading'
import Flex from '../Flex'
import List from '../List';
import Button from '../Button';
import { IoSearch } from "react-icons/io5";
const Navbar = () => {
    return (
        <>
      <div className={`w-[1600px] mx-auto my-5 `}>
      <Flex className={`items-center`}>
       <Heading as="h3" text="Emprise" className="text-[40px] font-semibold  w-[10%]"/>
       <Flex className={`items-center ps-24 gap-10 w-[75%] pt-2`}>
        <List to="/destination"  text="Destination"/>
        <List to="/activities" text="Activities "/>
        <List to="/special" text="Special"/>
        <List to="/search" text={<IoSearch />}/>
       </Flex>
       <Flex className={`w-[15%] gap-2 `}>
        <Button text="Login" className={`hover:text-white`}/>
        <Button text="Sign Up" className={`hover:text-white`}/>
       </Flex>
       </Flex>
      </div>
        
            
        </>
    );
};

export default Navbar;