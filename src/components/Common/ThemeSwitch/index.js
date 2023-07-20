import * as React from 'react';
import { styled } from '@mui/material/styles';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
    width: 60,
    height: 30,
    padding: 7,
    '& .MuiSwitch-switchBase': {
        margin: 0,
        padding: 1,
        transform: 'translateX(6px)',
        '&.Mui-checked': {
            color: '#fff',
            transform: 'translateX(26px)',
            '& .MuiSwitch-thumb:before': {
                backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
                    '#fff',
                )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
            },
            '& + .MuiSwitch-track': {
                opacity: 1,
                backgroundColor: '#242424',
                boxShadow: "inset 3px 1px 5px #777"
            },
            '& .MuiSwitch-thumb': {
                backgroundColor: '#3a3a3a',
                boxShadow: "inset 0px 5px 5px #777",
            }
        },
    },
    '& .MuiSwitch-thumb': {
        backgroundColor: '#ffa808',
        width: 26,
        height: 26,
        '&:before': {
            content: "''",
            position: 'absolute',
            width: '100%',
            height: '100%',
            left: 0,
            top: 0,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
                '#fff',
            )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
        },
    },
    '& .MuiSwitch-track': {
        opacity: 1,
        background: '#ebebeb',
        boxShadow: "inset 0px 5px 15px rgba(0, 0, 0, 0.4)",
        borderRadius: 20 / 2,
    },
    '& .MuiSwitch-root': {
        margin: 0,
        padding: 0,
    },
    '& .MuiSwitch-input':{
        width:0,
    }
}));


export default function CustomizedSwitches() {

    const setDarkTheme = ()=>{
                document.querySelector('body').setAttribute('data-theme', 'dark');
            }
        
            const setLightTheme = ()=>{
                document.querySelector('body').setAttribute('data-theme', 'light');
            }
        
            // setDarkTheme()
            function toggleTheme(e){
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
        <FormControlLabel
            control={<MaterialUISwitch size='small' onChange={toggleTheme}/>}
        />
    );
}
