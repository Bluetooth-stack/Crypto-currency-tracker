import React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { ThemeProvider, createTheme } from "@mui/material/styles";
import './style.css'

export default function TogglePriceType({priceType, handleToggle}) {
  

  const theme = createTheme({
    palette: {
      primary: {
        main: '#ffa808'
      }
    }
  });

  return (
    <div className='toggleContainer'>
      <ThemeProvider theme={theme}>
        <ToggleButtonGroup
          sx={{
            '& .Mui-selected': {
              color: 'var(--orange) !important',
            },
            borderColor: 'var(--orange)',
            border: 'unset !important',
            '& .MuiToggleButtonGroup-grouped': {
              border: '1px soli important',
              // borderColor: 'unset',
              color: 'var(--orange)',
              fontSize: '0.7rem',
              padding: '0.5rem'
            },
            '& .MuiToggleButton-standard': {
              color: 'var(--orange)'
            }
          }}

          value={priceType}
          exclusive
          onChange={(event, type)=>{handleToggle(event, type)}}
        >
          <ToggleButton value="prices" className='toggleButton' >
            Prices
          </ToggleButton>
          <ToggleButton value="market_caps" className='toggleButton' >
            Market Cap
          </ToggleButton>
          <ToggleButton value="total_volumes" className='toggleButton' >
            Total Volume
          </ToggleButton>
        </ToggleButtonGroup>
      </ThemeProvider>
    </div>
  );
}