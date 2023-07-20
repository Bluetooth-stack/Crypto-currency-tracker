import React, { useEffect, useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { getAllCoins } from '../../../functionalities/getAllCoins';
import './style.css'

export default function SelectCrypto({ crypto1, crypto2, handleChange }) {

    let [allCoins, setAllCoins] = useState([]);

    const theme = createTheme({
        palette: {
            primary: {
                main: '#ffa808'
            }
        }
    });

    useEffect(() => {
        getData();
    }, [])

    async function getData() {
        try {
            const data = await getAllCoins('USD')
            setAllCoins(data)
        }
        catch (error) {
            console.log(error);
        }
    }




    return (
        <div className='selectHolder'>
            <ThemeProvider theme={theme}>
                <div>
                    <InputLabel id="demo-simple-select-label">Crypto 1</InputLabel>
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
                        value={crypto1}
                        label="Crypto"
                        onChange={(e) => { handleChange(e, false) }}
                    >
                        {
                            allCoins.filter((coin) => (coin.id !== crypto2)).map((coin, indx) => (
                                <MenuItem key={indx} value={coin.id}>{coin.name}</MenuItem>
                            ))
                        }
                    </Select>
                </div>

                <div>
                    <InputLabel id="demo-simple-select-label">Crypto 2</InputLabel>
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
                        value={crypto2}
                        label="Crypto"
                        onChange={(e) => { handleChange(e, true) }}
                    >
                        {
                            allCoins.filter((coin) => (coin.id !== crypto1)).map((coin, indx) => (
                                <MenuItem key={indx} value={coin.id}>{coin.name}</MenuItem>
                            ))
                        }
                    </Select>
                </div>

            </ThemeProvider>
        </div >
    );
}