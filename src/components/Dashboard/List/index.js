import React, { useEffect, useState } from 'react'
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import StarRateIcon from '@mui/icons-material/StarRate';
import { Tooltip } from '@mui/material';
import { reduceNumberLength } from '../../../functionalities/reduceNumberLength'
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';
import { addToWatchList } from '../../../functionalities/addToWatchList';
import { removeFromWatchList } from '../../../functionalities/removeFromWatchList';
import './style.css'

function List({ coins, viewCurrency, indx }) {
    const [watch, setWatch] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem('watchList')) {
            const ids = JSON.parse(localStorage.getItem('watchList'));
            let exist = ids.filter((coinid) => (coinid === coins.id));
            // console.log(exist);
            if (exist.includes(coins.id)) {
                setWatch(true)
            } else {
                setWatch(false);
            }
        }
        else {
            setWatch(false)
        }
    }, [])

    function handleWatchClick() {
        if (localStorage.getItem('watchList')) {
            const ids = JSON.parse(localStorage.getItem('watchList'));
            let exist = ids.filter((coinid) => (coinid === coins.id));
            console.log(exist);
            if (exist.includes(coins.id)) {
                removeFromWatchList(coins.id);
                setWatch(false);
            } else {
                addToWatchList(coins.id)
                setWatch(true);
            }
        }
        else {
            addToWatchList(coins.id)
            setWatch(true)
        }
    }


    return (
        <motion.tr 
            initial={{ opacity: 0.6, x: -90 }}
            animate={{ opacity: 1, x: 0, }}
            transition={{
                delay: 0.3 * indx,
                duration: 1.2,
                ease: "easeInOut"
            }}
            className={`listRow ${coins.price_change_percentage_24h > 0 ? 'greenHover' : 'redHover'}`}
            key={indx}
        >

            <Tooltip title='Coin Logo' placement='bottom-start'>
                <td className='coinImageContainer' onClick={() => { navigate(`/coins/${coins.id}`) }}>
                    <img className='coinLogo' src={coins.image} alt={coins.id} />
                </td>
            </Tooltip>

            <Tooltip title='Symbol & Name' placement='bottom-start'>
                <td onClick={() => { navigate(`/coins/${coins.id}`) }}>
                    <div className='coinName'>
                        <p className='symbol'>{coins.symbol}</p>
                        <p className='name'>{coins.name}</p>
                    </div>
                </td>
            </Tooltip>

            <Tooltip title='Price Change in 24H' placement='bottom-start'>
                {
                    coins.price_change_percentage_24h > 0 ?
                        <td className='changeInfo' onClick={() => { navigate(`/coins/${coins.id}`) }}>
                            <div className='percentage'>{coins.price_change_percentage_24h.toFixed(2)} %</div>
                            <div className='upIcon tdIcon'><TrendingUpIcon className='tdIcon' /></div>
                        </td> :

                        <td className='changeInfo ' onClick={() => { navigate(`/coins/${coins.id}`) }}>
                            <div className='percentage inRed'>{coins.price_change_percentage_24h.toFixed(2)} %</div>
                            <div className='downIcon tdIcon'><TrendingDownIcon className='tdIcon' /></div>
                        </td>
                }
            </Tooltip>

            <Tooltip title='Current Price' placement='bottom'>
                <td onClick={() => { navigate(`/coins/${coins.id}`) }}>
                    <h3 className='coinPrice centerAlign desktopPrice' style={{ color: coins.price_change_percentage_24h > 0 ? 'var(--green)' : 'var(--red)' }}>
                        {Object.values(viewCurrency)[0]}{coins.current_price.toLocaleString()}
                    </h3>
                </td>
            </Tooltip>



            <Tooltip title='Total Volume' placement='bottom-end'>
                <td onClick={() => { navigate(`/coins/${coins.id}`) }}>
                    <p className='additional rightAlign td-coinVolume'>{Object.values(viewCurrency)[0]}{coins.total_volume.toLocaleString()}</p>
                </td>
            </Tooltip>

            <Tooltip title='Market Cap' placement='bottom-end'>
                <td className='desktopMarket-td' onClick={() => { navigate(`/coins/${coins.id}`) }}>
                    <p className='additional rightAlign'>{Object.values(viewCurrency)[0]}{coins.market_cap.toLocaleString()}</p>
                </td>
            </Tooltip>

            <Tooltip title='Market Cap' placement='bottom-end'>
                <td className='mobileMarket-td' onClick={() => { navigate(`/coins/${coins.id}`) }}>
                    <p className='additional rightAlign'>{Object.values(viewCurrency)[0]}{reduceNumberLength(coins.market_cap)}</p>
                </td>
            </Tooltip>

            <div className='starContainer' >
                <div className={`starIcon ${coins.price_change_percentage_24h > 0 ? 'greenStar' : 'redStar'}`}
                    onClick={handleWatchClick}>
                    {
                        watch ?
                            <StarRateIcon />
                            :
                            <StarOutlineIcon />
                    }
                </div>
            </div>
        </motion.tr>
    )
}

export default List