import React, { useState } from 'react';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Grid from '../Grid';
import List from '../List';
import './style.css'
import Button from '../../Common/Button'

export default function Tabs({ coins, viewCurrency, onClear }) {
  const [value, setValue] = useState('grid');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: '#ffa808'
      }
    }
  });

  const style = {
    clolor: '#b1b0b0',
    fontSize: '0.95rem',
    fontWidth: '800',
    fontFamily: 'Inter',
    textTransform: 'capitalize',
    transition: '0.1s easeInOut'
  }


  return (
    <ThemeProvider theme={theme}>
      <TabContext value={value} >

        <TabList onChange={handleChange} variant="fullWidth" 
        sx={{
        '& .MuiTab-root': { color: '#b1b0b0' },
        '& .Mui-selected': { color: '#ffa808' }
      }}>
          <Tab label="Grid View" value="grid" sx={style} />
          <Tab label="List view" value="list" sx={style} />
        </TabList>

        <TabPanel value="grid" key={'grid'} >
          <div className='gridContainer'>
            {
              coins.length > 0 ?
                coins.map((coin, indx) => (
                  <Grid key={indx} coins={coin} viewCurrency={viewCurrency} indx={indx} />
                ))
                :
                <div className='exceptionContainer'>
                  <h2>No Itms Found</h2>
                  {
                    onClear &&
                    <Button className="btn" text={'Clear Search'} handleClick={onClear} />
                  }
                </div>
            }
          </div>
        </TabPanel>

        <TabPanel value="list" key={'list'}>
          <table className='listTable'>
            <tbody className='listTableBody'>
              {
                coins.length > 0 ?
                  coins.map((coin, indx) => (
                    <List key={indx} coins={coin} viewCurrency={viewCurrency} indx={indx} />
                  ))
                  :
                  <div className='exceptionContainer'>
                    <h2>No Itms Found</h2>
                    {
                      onClear &&
                      <Button className="btn" text={'Clear Search'} handleClick={onClear} />
                    }
                  </div>
              }
            </tbody>
          </table>
        </TabPanel>

      </TabContext>
    </ThemeProvider>
  );
}