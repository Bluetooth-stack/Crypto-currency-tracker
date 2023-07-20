import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Tooltip } from '@mui/material';
import './style.css'

const currencies = [
    { 'USD': '$' }, { 'IDR': 'Rp' },
    { 'EUR': '€' }, { 'JPY': '¥' },
    { 'KRW': '₩' }, { 'TWD': 'NT$' },
    { 'RUB': '₽' }, { 'INR': '₹' },
    { 'CNY': 'CN¥' }, { 'AUD': 'A$' }
]


export default function SelectViewCurrency({ setCurrency, currency }) {

    const theme = createTheme({
        palette: {
            primary: {
                main: '#ffa808'
            }
        }
    });



    const handleChange = (event) => {
        setCurrency(event.target.value);
    };


    return (
        <div className='selectCurrency-container'>
            <ThemeProvider theme={theme}>
                <Tooltip title='USD(Default)' >
                    <FormControl id='formControl' size="small">
                        <InputLabel id="demo-simple-select-autowidth-label" >Currency</InputLabel>
                        <Select
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
                            labelId="demo-simple-select-autowidth-label"
                            id="demo-simple-select-autowidth"
                            displayEmpty
                            value={currency}
                            onChange={handleChange}
                            autoWidth
                            label="Currency"
                        >
                            {
                                currencies.map((obj, indx) => (
                                    <MenuItem key={indx} value={obj}>{Object.keys(obj)[0]}</MenuItem>

                                ))
                            }
                        </Select>
                    </FormControl>
                </Tooltip>
            </ThemeProvider>
        </div >
    );
}
