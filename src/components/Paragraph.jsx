

const Paragraph = ({className,text}) => {
    return (
        <div className={` ${className}`}>
            {text}
        </div>
    );
};

export default Paragraph;