

const Badge = (  {text,className}) => {
    return (
       <button className={`px-2 py-2 bg-red-300 text-red-600 rounded-lg ${className}`}>
      {text}
       </button>
    );
};

export default Badge;