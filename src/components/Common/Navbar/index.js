import React from 'react';
import './style.css'
import Hamburger from './Hamburger'
import { NavLink, useNavigate } from 'react-router-dom'
import Button from '../Button'
import ThemeSwitch from '../ThemeSwitch'

const Navbar = () => {
    const navigate = useNavigate();
    return (
        <div className='navbar'>
            <h1 className='logo'>
                <span className='upperCase'>C</span>
                <span className='lowerCase'>r</span>
                <span className='lowerCase'>y</span>
                <span className='lowerCase'>p</span>
                <span className='lowerCase'>t</span>
                <span className='lowerCase'>o</span>
                <span className='lowerCase' style={{ color: "var(--orange)" }}>'</span>
                <span className='lowerCase'>s</span>
            </h1>
            <div className='linkContainer'>
                <ThemeSwitch/>
                <NavLink className='link' to='/'>Home</NavLink>
                <NavLink className='link' to='/compare'>Compare</NavLink>
                <NavLink className='link' to='/watchlist'>WatchList</NavLink>

                <Button className='link' text={'Dashboard'} handleClick={()=>{navigate('/dashboard')}}/>

            </div>
            <div className='burgerMenu'>
                <Hamburger />
            </div>
        </div>
    )
}

export default Navbar