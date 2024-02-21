
import { Link } from 'react-router-dom';

const List = ({className,text,to}) => {
    return (
      <div>
        <ul>
           <Link to={to}>
           <li className={ `font-medium text-[20px] hover:text-[#077d75] ease-in duration-300 ${className}`}>{text}</li></Link>
        </ul>
      </div>
    );
};

export default List;