import React, { useEffect, useState } from 'react'
import Button from '../components/Common/Button'
import { useNavigate } from 'react-router-dom';
import { getAllCoins } from '../functionalities/getAllCoins';
import SelectViewCurrency from '../components/Dashboard/SelectViewCurrency';
import Loader from '../components/Common/Loader';
import Grid from '../components/Dashboard/Grid';
import { toast } from 'react-toastify';

function Watchlist() {
  let [filteredCoin, setFilteredCoin] = useState([]);
  let [loading, setLoading] = useState(true);
  let [currency, setCurrency] = useState({ 'USD': '$' });

  const navigate = useNavigate();

  useEffect(() => {
    checkStorage()
  }, [currency, filteredCoin])

  function checkStorage(){
    if (localStorage.getItem('watchList')) {
      const ids = JSON.parse(localStorage.getItem('watchList'));
      // console.log(exist);
      if (ids.length) {
        getData(ids)
        console.log(currency);
      } else {
        setFilteredCoin([]);
        setLoading(false)
      }
    }
    else {
      setFilteredCoin([])
      setLoading(false);
    }
  }

  async function getData(watchListArray) {
    try {
      const data = await getAllCoins(Object.keys(currency)[0]);
      if (data) {
        setFilteredCoin(data.filter((coin) => (watchListArray.includes(coin.id))));
        setLoading(false);
      }
    }
    catch (error) {
      console.log(error);
      toast.error(`${error.message} while fetching data`);
      setLoading(false);
      navigate('*');
    }
  }

  function toDashboard() {
    navigate('/dashboard');
  }

  return (
    <div>
      {
        loading ?
          <Loader />
          :
          filteredCoin.length ?
            <div>
              <SelectViewCurrency setCurrency={setCurrency} currency={currency} />
              <div className='gridContainer'>
                {
                  filteredCoin.map((coin, indx) => (
                    <Grid key={indx} coins={coin} viewCurrency={currency} indx={indx} />
                  ))
                }
              </div>
            </div>
            :
            <div className='emptyWatchList'>
              <h1>Your WishList is Empty!</h1>
              <Button text={'Dashboard'} handleClick={toDashboard} />
            </div>
      }
    </div>
  )
}

export default Watchlist