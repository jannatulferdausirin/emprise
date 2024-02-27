

const Badge = (  {text,className}) => {
    return (
       <button className={` text-red-600 rounded-lg ${className}`}>
      {text}
       </button>
    );
};

export default Badge;