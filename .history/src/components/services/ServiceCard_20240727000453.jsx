import React from 'react';
import { color } from '../../../colors/colors';

const ServiceCard = ({ children, handleSelectedElement, selected, imageSrc }) => {
    const isSelected = selected === imageSrc;

    return (
        <div
            onClick={() => handleSelectedElement(imageSrc)}
            style={{
                backgroundColor: isSelected ? color.orange : 'rgba(255,255,255, 0.1)',
                padding: '10px',
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                borderRadius: '20px',
                cursor: 'pointer',
                backdropFilter: isSelected ? 'none' : 'blur(2px)',
                transition: 'backdrop-filter 0.3s ease, background-color 0.3s ease',
                width: '100%',
            }}
        >
            {children}
        </div>
    );
};

export default ServiceCard;
