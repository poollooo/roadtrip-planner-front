import * as React from 'react';

import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';

export default function BasicDateRangePicker() {
    const [value, setValue] = React.useState([null, null]);

    return (
        <LocalizationProvider
            dateAdapter={AdapterDayjs}
            localeText={{ start: 'Start of your trip', end: 'End of your trip' }}
        >
            <DateRangePicker
                value={value}
                onChange={(newValue) => {
                    setValue(newValue);
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
