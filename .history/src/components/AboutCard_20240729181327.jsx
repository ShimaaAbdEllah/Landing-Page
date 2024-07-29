import React from 'react';
import { color } from '../../../colors/colors';

const AboutCard = ({ children, handleSelectedElement, selected, imageSrc }) => {
    const isSelected = selected === imageSrc;

    return (
        <div
            onClick={() => handleSelectedElement(imageSrc)}
            style={{
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

export default AboutCard;
