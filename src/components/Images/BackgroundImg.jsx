const BackgroundImg = ({width, position}) => {
    return (
        <svg 
            width={width}
            position={position}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path 
                d="M0 0h100v100H0z"
            />
        </svg>
    );
};

export default BackgroundImg