import React from 'react';
import Box from '@mui/material/Box';
import { color } from '../../../../colors/colors';

const LoadingPlatform = ({ children }) => {
    return (
        <Box
            sx={{
                padding: '10px 20px',
                borderRadius: '25px',
                backgroundColor: color.cardColor,
                maxWidth: '100%',
                color: color.white,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '5px',
                boxSizing: 'border-box'
            }}
        >
            <span style={{ color: color.orange, fontWeight: 700, fontSize: '20px' }}>🗸</span>
            {children}
        </Box>
    );
}

export default LoadingPlatform;
