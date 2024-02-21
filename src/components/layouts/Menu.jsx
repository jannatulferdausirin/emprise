
import Heading from '../Heading';

const Menu = ({menuText}) => {
    return (
        <Heading
        as="h5"
        text={menuText}
        className="text-[16px] font-normal pb-2"
      />
    );
};

export default Menu;