import React from 'react';
import { color } from '..../colors/colors';

const Card1 = ({ children, handleSelectNavbarElement, selected, selectionText }) => {
    const isSelected = selected === selectionText;

    return (
        <div
            onClick={() => handleSelectNavbarElement(selectionText)}
            style={{
                backgroundColor: isSelected ?color.orange  : '#424242',
                padding: '20px',
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                borderRadius: '20px',
                cursor: 'pointer'
            }}
        >
            {children}
        </div>
    );
};

export default Card1;
