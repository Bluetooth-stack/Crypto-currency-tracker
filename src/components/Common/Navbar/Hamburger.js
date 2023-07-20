import React, { useState } from 'react'
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import ChaletIcon from '@mui/icons-material/Chalet';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import ViewListIcon from '@mui/icons-material/ViewList';
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import ThemeSwitch from '../ThemeSwitch';



export default function TemporaryDrawer() {
  const [state, setState] = useState(false);



  return (
    <div className='burgerSlideList'>

      <Button onClick={() => { setState(true) }}> <MenuIcon className='menuIcon' /> </Button>
      <Drawer className='menuContainer' anchor={"right"} open={state}
        onClose={() => { setState(false) }}>

        <CloseIcon className='closeMenu' onClick={() => { setState(false) }} />
        <div className='menuList'>
          <div className='themeSwitch'>
            <ThemeSwitch />
          </div>

          <NavLink className='drawerlink' to='/'><ChaletIcon /> Home</NavLink>
          <NavLink className='drawerlink' to='/compare'><CompareArrowsIcon /> Compare</NavLink>
          <NavLink className='drawerlink' to='/watchlist'><ViewListIcon /> WatchList</NavLink>
          <NavLink className='drawerlink' to='/dashboard'><SpaceDashboardIcon /> Dashboard</NavLink>
        </div>

      </Drawer>
    </div>
  );
}
