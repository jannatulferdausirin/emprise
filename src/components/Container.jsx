

const Container = ({className,children}) => {
    return (
        <div className={`w-[1760px] mx-auto pl-20 ${className}`}>
            {children}
        </div>
    );
};

export default Container;