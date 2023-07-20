import React from 'react'
import { useNavigate } from 'react-router-dom'
import './style.css'
import Button from '../Common/Button'
import iphone from '../../images/iphone..png'
import character from '../../images/3d-character.png'
import { motion } from 'framer-motion'
import { toast } from 'react-toastify';

function Main() {

    const navigate = useNavigate();

    function onshare(){
        if(navigator){
            if(navigator.share){
                navigator.share({
                    text: "Crypto's is for keep track of crypto currency market, check it out!",
                    url:'https://cryptos-track-your-crypto.netlify.app/',
                    title: "Crypto's"
                })
            }
            else{
                navigator.clipboard.writeText('https://cryptos-track-your-crypto.netlify.app/');
                toast.success('Link copied to clipBoard!')
            }
        }
        else{
            toast.error("Oppss! Looks like browers doesn't support.")
        }
    }

    return (
        <div className='main-container'>
            <div className='left-info'>
                <motion.h1
                    className='trackText'
                    initial={{ opacity: 0, x: 60 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                        duration: 1,
                        delay: 0.15,
                        ease: [0, 0.71, 0.2, 1.01]
                    }}
                >Track Crypto</motion.h1>
                <motion.h1
                    className='realTimeText'
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        type: 'smooth',
                        duration: 1,
                        delay: 0.5,
                    }}
                >Real Time</motion.h1>
                <motion.p
                    className='info'
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 1,
                        delay: 0.75,
                        ease: [0, 0.71, 0.2, 1.01]
                    }}
                >
                    Crypto's is the easiest way to track crypto currencies.
                    We do so through a public api in real time that keep up to updates.
                    Please visit the dashboard to look around!
                </motion.p>
                <motion.div
                    className='buttons'
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 1,
                        delay: 0.9,
                        ease: [0, 0.71, 0.2, 1.01]
                    }}
                >
                    <Button text={'Dashboard'} handleClick={() => { navigate('/dashboard') }} />

                    <Button text={'Share'} outline={true} handleClick={onshare} />

                </motion.div>
            </div>

            <div className='right-poster'>
                <motion.img src={iphone} alt='iphone' className='phone'
                    initial={{ y: -28 }}
                    animate={{ y: 28 }}
                    transition={{
                        type: 'smooth',
                        repeatType: 'mirror',
                        duration: 1,
                        repeat: Infinity,
                    }}
                />
                <motion.img src={character} alt='3D Character' className='character'
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                        duration: 1,
                        delay: 0.1,
                        ease: [0, 0.71, 0.2, 1.01]
                    }}
                />
            </div>
        </div>
    )
}

export default Main