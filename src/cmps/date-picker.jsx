import * as React from 'react';

import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { CalendarPicker } from '@mui/x-date-pickers/CalendarPicker';

export const BasicDatePicker = ({ field, lable, handleDateChange }) => {
    const [value, setValue] = React.useState(null);
    // const [date, setDate] = React.useState(dayjs());
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
                className={lable === 'check in'? 'checkIn': 'checkOut'}
                label={lable}
                value={value}
                // disableOpenPicker
                // disableMaskedInput
                // readOnly
                // onClose
                // variant="standard"
                // closeOnSelect={false}
                
                onChange={(newValue) => {
                
                    handleDateChange({ ...newValue},field)
                    setValue(newValue);
                }}
                // disableMaskedInput={true}
                renderInput={(params) => <TextField {...params}  />}
                // inputFormat="DD/MM/YYYY"
            // rifmFormatter={()=>}
            />
            {/* <CalendarPicker
                date={value}
                views={["day", "month"]}
                showDaysOutsideCurrentMonth
                disablePast
                onChange={(newDate) => handleDateChange({ ...newDate, field })}
            /> */}
        </LocalizationProvider>
    );
}
