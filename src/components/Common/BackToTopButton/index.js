import React from 'react'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { motion } from 'framer-motion'
import './style.css'

function BackToTop() {

    let mybutton = document.querySelector('.scrollUpBtn')

    window.onscroll = () => {
        if (document.body.scrollTop > 280 || document.documentElement.scrollTop > 280) {
            mybutton.style.display = "flex";
        }
        else {
            mybutton.style.display = "none";
        }
    };

    // When the user clicks on the button, scroll to the top of the document
    function topFunction() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }


    return (
        <motion.div
            initial={{ y: -10 }}
            animate={{ y: 10 }}
            transition={{
                type: 'smooth',
                repeatType: 'mirror',
                duration: 2,
                repeat: Infinity,
            }}
            className='scrollUpBtn' onClick={topFunction}>
            <KeyboardArrowUpIcon style={{ color: '#292626' }} />
        </motion.div>
    )
}

export default BackToTop