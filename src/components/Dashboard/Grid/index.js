import React, { useEffect, useState } from 'react'
import './style.css'
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import StarRateIcon from '@mui/icons-material/StarRate';
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';
import { addToWatchList } from '../../../functionalities/addToWatchList';
import { removeFromWatchList } from '../../../functionalities/removeFromWatchList';


function Grid({ coins, viewCurrency, indx }) {
    const [watch, setWatch] = useState(false);
    const navigate = useNavigate();

    useEffect(()=>{
        if(localStorage.getItem('watchList')){
            const ids = JSON.parse(localStorage.getItem('watchList'));
            let exist = ids.filter((coinid)=>(coinid===coins.id));
            // console.log(exist);
            if(exist.includes(coins.id)){
                setWatch(true)
            }else{
                setWatch(false);
            }
        }
        else{
            setWatch(false)
        }
    }, [])

    function handleWatchClick() {
        if(localStorage.getItem('watchList')){
            const ids = JSON.parse(localStorage.getItem('watchList'));
            let exist = ids.filter((coinid)=>(coinid===coins.id));
            console.log(exist);
            if(exist.includes(coins.id)){
                removeFromWatchList(coins.id);
                setWatch(false);
            }else{
                addToWatchList(coins.id)
                setWatch(true);
            }
        }
        else{
            addToWatchList(coins.id)
            setWatch(true)
        }
    }


    return (
        <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0, }}
            transition={{
                delay: 0.1 * indx,
                duration: 1.2,
                ease: "easeInOut"
            }}
            className={`cardContainer ${coins.price_change_percentage_24h > 0 ? 'greenHover' : 'redHover'}`}>
            <div className='topContainer'>
                <div className='coinInfo'>
                    <img className='coinLogo' src={coins.image} alt={coins.id} />
                    <div className='coinName'>
                        <p className='symbol'>{coins.symbol}</p>
                        <p className='name'>{coins.name}</p>
                    </div>
                </div>
                <div className={`starIcon ${coins.price_change_percentage_24h > 0 ? 'greenStar' : 'redStar'}`}
                    onClick={handleWatchClick}
                >
                    {
                        watch ?
                            <StarRateIcon />
                            :
                            <StarOutlineIcon />
                    }
                </div>
            </div>

            <div className='bottomContainer' onClick={() => { navigate(`/coins/${coins.id}`) }}>
                {
                    coins.price_change_percentage_24h > 0 ?
                        <div className='changeInfo'>
                            <div className='percentage'>{coins.price_change_percentage_24h.toFixed(2)} %</div>
                            <div className='upIcon'><TrendingUpIcon className='icn' /></div>
                        </div> :

                        <div className='changeInfo '>
                            <div className='percentage inRed'>{coins.price_change_percentage_24h.toFixed(2)} %</div>
                            <div className='downIcon'><TrendingDownIcon className='icn' /></div>
                        </div>
                }

                <div className='coinPrice'>
                    <h3 style={{ color: coins.price_change_percentage_24h > 0 ? 'var(--green)' : 'var(--red)' }}>
                        {Object.values(viewCurrency)[0]}{coins.current_price.toLocaleString()}
                    </h3>

                    <p className='additional'>Total Volume : {Object.values(viewCurrency)[0]}{coins.total_volume.toLocaleString()}</p>
                    <p className='additional'>Market Cap : {Object.values(viewCurrency)[0]}{coins.market_cap.toLocaleString()}</p>
                </div>
            </div>
        </motion.div>
    )
}

export default Grid