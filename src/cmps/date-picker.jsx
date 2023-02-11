
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useState } from 'react';

export const BasicDatePicker = ({ field, lable, handleDateChange, minDate, maxDate, initalValue }) => {
    const [value, setValue] = useState(initalValue);
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
                className={lable === 'check in' ? 'checkIn' : 'checkOut'}
                label={lable}
                value={value}
                minDate={minDate}
                maxDate={maxDate}
                disablePast={true}
                onChange={(newValue) => {
                    handleDateChange({ ...newValue }, field)
                    setValue(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
            />

        </LocalizationProvider>
    );
}
