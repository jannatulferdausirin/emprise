import Container from "../Container";
import Paragraph from "../Paragraph";


const NotFound = () => {
    return (
        <Container className={`text-center text-purple-700 bold text-2xl pt-5`}>
        <Paragraph text="Not Found"></Paragraph>
      </Container>
    );
};

export default NotFound;