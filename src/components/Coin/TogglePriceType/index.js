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
              background: '#4e4e4e36'
            },
            borderColor: 'var(--red)',
            border: 'unset !important',
            '& .MuiToggleButtonGroup-grouped': {
              border: '1px solid important',
              borderColor: 'unset',
              color: 'var(--red)',
              fontSize: '0.7rem',
              fontWeight: 600,
              padding: '0.5rem'
            },
            '& .MuiToggleButton-standard': {
              color: 'var(--orange)'
            },
            '& .MuiToggleButton-standard:hover': {
              background: '#4e4e4e36'
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