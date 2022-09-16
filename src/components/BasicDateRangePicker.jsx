import React, { useContext, useState } from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import { formatAs } from '../utils/formatDate'
import QueryContext from '../Context/QueryContext';

export default function BasicDateRangePicker() {
    const [value, setValue] = useState([null, null]);
    const { searchQuery, setSearchQuery } = useContext(QueryContext);

    return (
        <LocalizationProvider
            dateAdapter={AdapterDayjs}
            localeText={{ start: 'Start of your trip', end: 'End of your trip' }}
        >
            <DateRangePicker
                value={value}
                onChange={(newValue) => {
                    setValue(newValue);
                    // the start date and end date in the searchQuery
                    setSearchQuery({
                        ...searchQuery,
                        startDate: formatAs.yearMonthDate(newValue[0]?.$d),
                        endDate: formatAs.yearMonthDate(newValue[1]?.$d),
                    })
                }}
                renderInput={(startProps, endProps) => (
                    <React.Fragment>
                        <TextField {...startProps} />
                        <Box sx={{ mx: 2 }}> to </Box>
                        <TextField {...endProps} />
                    </React.Fragment>
                )}
            />
        </LocalizationProvider>
    );
}
