import React from "react";
import { ReactComponent as Sun } from "../../../images/Sun.svg";
import { ReactComponent as Moon } from "../../../images/Moon.svg";
import "./style.css";

const ThemeSwitch = () => {

    const setDarkTheme = ()=>{
        document.querySelector('body').setAttribute('data-theme', 'dark');
    }

    const setLightTheme = ()=>{
        document.querySelector('body').setAttribute('data-theme', 'light');
    }

    // setDarkTheme()
    function toogleTheme(e){
        if(e.target.checked){
            setDarkTheme();
            localStorage.setItem('pageTheme', 'dark');
        }
        else{
            setLightTheme()
            localStorage.setItem('pageTheme', 'light');
        }
    }

    const lastThemeSelected = localStorage.getItem('pageTheme');

    if(lastThemeSelected==='dark'){
        setDarkTheme();
    }
    else{
        setLightTheme()
    }

    return (
        <div className='dark_mode'>
            <input
                className='dark_mode_input'
                type='checkbox'
                id='darkmode-toggle'
                onChange={toogleTheme}
            />
            <label className='dark_mode_label' htmlFor='darkmode-toggle'>
                <Sun />
                <Moon />
            </label>
        </div>
    );
};

export default ThemeSwitch;
