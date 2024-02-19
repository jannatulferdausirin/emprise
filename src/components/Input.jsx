

const Input = ({type,inputPlaceholder,inputValue,className}) => {
    return (
      <input type={type}  placeholder={inputPlaceholder} value={inputValue} className={`outline-none  ${className}`}/>
    );
};

export default Input;