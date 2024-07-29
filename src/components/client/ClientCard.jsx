import React from 'react';

const ClientCard = ({ children, handleSelectedElement, selected, imageSrc }) => {
    const isSelected = selected === imageSrc;

    return (
        <div
            onClick={() => handleSelectedElement(imageSrc)}
            style={{
                backgroundColor: 'white',
                padding: '20px',
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                borderRadius: '20px',
                cursor: 'pointer',
                backdropFilter: isSelected ? 'none' : 'blur(2px)',
                transition: 'backdrop-filter 0.3s ease, background-color 0.3s ease',
                width: '95%',
                zIndex:'55',
                position:'relative'
            }}
        >
            {children}
        </div>
    );
};

export default ClientCard;
