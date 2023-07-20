import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { ThemeProvider, createTheme } from "@mui/material/styles";
import './style.css'

export default function SelectDay({ days, handleChange }) {
    // const [days, setdays] = useState(30);

    const theme = createTheme({
        palette: {
            primary: {
                main: '#ffa808'
            }
        }
    });


    return (
        <div className='selectHolder'>
            <ThemeProvider theme={theme}>
                <div>
                    <InputLabel id="demo-simple-select-label">Prices change in last</InputLabel>
                    <Select
                        size="small"
                        sx={{
                            color: '#ffa808',
                            "&:hover": {
                                "&& fieldset": {
                                    border: "2px solid #b1b0b0"
                                },

                            },
                            '.MuiOutlinedInput-notchedOutline': {
                                borderColor: '#b1b0b0',
                            },
                            '.MuiSvgIcon-root ': {
                                fill: "lightGrey !important",
                            },
                        }}
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={days}
                        label="Days"
                        onChange={(e) => { handleChange(e) }}
                    >
                        <MenuItem value={2}>2 Days</MenuItem>
                        <MenuItem value={4}>4 Days</MenuItem>
                        <MenuItem value={7}>7 Days</MenuItem>
                        <MenuItem value={14}>14 Days</MenuItem>
                        <MenuItem value={20}>20 Days</MenuItem>
                        <MenuItem value={30}>30 Days</MenuItem>
                        <MenuItem value={60}>60 Days</MenuItem>
                        <MenuItem value={90}>90 Days</MenuItem>
                        <MenuItem value={120}>120 Days</MenuItem>
                        <MenuItem value={150}>150 Days</MenuItem>
                        <MenuItem value={260}>260 Days</MenuItem>
                        <MenuItem value={365}>365 Days</MenuItem>
                    </Select>
                </div>
            </ThemeProvider>
        </div >
    );
}