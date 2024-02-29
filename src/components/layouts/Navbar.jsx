import Heading from "../Heading";
import Flex from "../Flex";
import List from "../List";
import Button from "../Button";
import { IoSearch } from "react-icons/io5";
import { Link } from "react-router-dom";

const Navbar = () => {
 
  return (
    <>
      <div className={`w-[1600px] mx-auto my-5 `}>
        <Flex className={`items-center`}>
          <Heading
            as="h3"
            text="Emprise"
            className="text-[40px] font-semibold  w-[10%]"
          />
          <Flex className={`items-center ps-24 gap-10 w-[75%] pt-2`}>
            <List to="/destination" text="Destination" />
            <List to="/activities" text="Activities " />
            <List to="/special" text="Special" />{" "}
            <List to="/wishlist" text="WishList" />
           
           
            <List to="/search" text={<IoSearch />} />
          </Flex>
          <Flex className={`w-[15%] gap-2 `}>
            <Link to="login">
              <Button text="Login" className={`hover:text-white`} />
            </Link>

            <Link to="sign-up">
              <Button text="Sign Up" className={`hover:text-white`} />
            </Link>
          </Flex>
        </Flex>
      </div>
    </>
  );
};

export default Navbar;
