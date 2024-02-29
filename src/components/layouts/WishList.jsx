
import { useSelector } from 'react-redux';
import Container from '../Container';
import List from '../List';

const WishList = () => {
    const count = useSelector(state => state.jannat.value)
    return (
        <Container className={`text-center text-purple-700 bold text-2xl pt-5 `}>
          <List to="/count" text={count} className={`bg-teal-500 px-4 rounded-2xl text-white inline-block`}/>
        </Container>
    );
};

export default WishList;