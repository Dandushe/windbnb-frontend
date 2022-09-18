import * as React from 'react';
import PropTypes from 'prop-types';
import Slider, { SliderThumb } from '@mui/material/Slider';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


const AirbnbSlider = styled(Slider)(({ theme }) => ({
    color: '#3a8589',
    height: 3,
    padding: '13px 0',
    '& .MuiSlider-thumb': {
        height: 37,
        width: 37,
        // height: 27,
        // width: 27,
        backgroundColor: '#fff',
        border: '1px solid currentColor',
        '&:hover': {
            boxShadow: '0 0 0 8px rgba(58, 133, 137, 0.16)',
        },
        '& .airbnb-bar': {
            height: 9,
            width: 1,
            backgroundColor: 'currentColor',
            marginLeft: 1,
            marginRight: 1,
        },
    },
    '& .MuiSlider-track': {
        height: 8,
        // height: 3,
    },
    '& .MuiSlider-rail': {
        color: theme.palette.mode === 'dark' ? '#bfbfbf' : '#d8d8d8',
        opacity: theme.palette.mode === 'dark' ? undefined : 1,
        height: 3,
    },
}));

function AirbnbThumbComponent(props) {
    const { children, ...other } = props;
    return (
        <SliderThumb {...other}>
            {children}
            <span className="airbnb-bar" />
            <span className="airbnb-bar" />
            <span className="airbnb-bar" />
        </SliderThumb>
    );
}

AirbnbThumbComponent.propTypes = {

    children: PropTypes.node,
};

export default function CustomizedSlider({minPrice,maxPrice,handleChange}) {

    return (
        <Box sx={{ width: 320 }}>
            <Box sx={{ m: 3 }} />
            <Typography gutterBottom>Airbnb</Typography>
            <AirbnbSlider
                components={{ Thumb: AirbnbThumbComponent }}
                // getAriaLabel={(index) => (index === 0 ? 'Minimum price' : 'Maximum price')}
                // getAriaValueText={(index) => (index === 0 ? 'Minimum price' : 'Maximum price')}
                // valueLabelFormat={(index) => (index === 0 ? 'Minimum price' : 'Maximum price')}
                // defaultValue={[minPrice, maxPrice]}
                defaultValue={[minPrice, maxPrice]}
                value={[minPrice,maxPrice]}
                // defaultValue={min, max}
                // valueLabelDisplay="auto"
                min={40}
                max={1000}
                onChange={handleChange}
                valueLabelDisplay="on"
            />
        </Box>
    );
}
