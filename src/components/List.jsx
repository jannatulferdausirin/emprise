
import { Link } from 'react-router-dom';

const List = ({className,text,to}) => {
    return (
      <div>
        <ul>
           <Link to={to}>
           <li className={ `font-medium text-[20px] ${className}`}>{text}</li></Link>
        </ul>
      </div>
    );
};

export default List;