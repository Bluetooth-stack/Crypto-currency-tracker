import React, { useEffect, useState } from 'react'
import SelectCrypto from '../components/Compare/SelectCrypto'
import SelectViewCurrency from '../components/Dashboard/SelectViewCurrency'
import SelectDay from '../components/Coin/SelectDay'
import { coinObject } from '../functionalities/coinObject';
import { getCoinPrices } from '../functionalities/getCoinPrices';
import { getCoinsDataApi } from '../functionalities/getCoinsDataApi';
import { settingChartData } from '../functionalities/setChartData';
import Loader from '../components/Common/Loader';
import List from '../components/Dashboard/List';
import CoinInfo from '../components/Coin/CoinInfo';
import LineGraph from '../components/Coin/LineChart';
import TogglePriceType from '../components/Coin/TogglePriceType'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function Compare() {

  let [crypto1, setCrypto1] = useState('bitcoin');
  let [crypto2, setCrypto2] = useState('ethereum');
  let [currency, setCurrency] = useState({ 'USD': '$' });
  let [days, setDays] = useState(30);
  let [crypto1Data, setCrypto1Data] = useState({});
  let [crypto2Data, setCrypto2Data] = useState({});
  let [priceType, setPriceType] = useState('prices');
  let [Loading, setLoading] = useState(true);
  let [chartData, setChartData] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    getData();
  }, [currency])


  async function handleDayChange(e) {
    try {
      setLoading(true);
      setDays(e.target.value);
      const prices1 = await getCoinPrices(crypto1, Object.keys(currency)[0], e.target.value, priceType)
      const prices2 = await getCoinPrices(crypto2, Object.keys(currency)[0], e.target.value, priceType)
      if (prices1 && prices2) {
        settingChartData(setChartData, prices1, null, prices2);
        console.log('prices fetched');
        setLoading(false);
      }
    }
    catch(error){
      console.log(error);
      toast.error(`${error.message} while fetching data`);
      setLoading(false);
      navigate('*');
    }
  }


  async function getData() {
    try {
      setLoading(true);
      const data1 = await getCoinsDataApi(crypto1);
      const data2 = await getCoinsDataApi(crypto2);
      if (data1) {
        coinObject(data1, setCrypto1Data, Object.keys(currency)[0].toLowerCase());
      }

      if (data2) {
        coinObject(data2, setCrypto2Data, Object.keys(currency)[0].toLowerCase());
      }

      if (data1 && data2) {
        const prices1 = await getCoinPrices(crypto1, Object.keys(currency)[0], days, priceType)
        const prices2 = await getCoinPrices(crypto2, Object.keys(currency)[0], days, priceType)
        if (prices1 && prices2) {
          settingChartData(setChartData, prices1, null, prices2);
          console.log('prices fetched');
          setLoading(false);
        }
      }

    }
    catch (error) {
      console.log(error);
      toast.error(`${error.message} while fetching data`);
      setLoading(false);
      navigate('*');
    }

  }

  async function handleCoinChange(e, isCoin2) {
    setLoading(true);
    if (isCoin2) {
      setCrypto2(e.target.value)
      try {
        const data = await getCoinsDataApi(e.target.value);
        if (data) {
          coinObject(data, setCrypto2Data, Object.keys(currency)[0].toLowerCase());
          const prices1 = await getCoinPrices(crypto1, Object.keys(currency)[0], days, priceType)
          const prices2 = await getCoinPrices(crypto2, Object.keys(currency)[0], days, priceType)
          if (prices1 && prices2) {
            settingChartData(setChartData, prices1, null, prices2);
            console.log('crypto2 changed');
            setLoading(false);
          }
        }
      }
      catch (error) {
        console.log(error);
        toast.error(`${error.message} while fetching data`);
        setLoading(false);
        navigate('*');
      }

    }
    else {
      setCrypto1(e.target.value)
      try {
        const data = await getCoinsDataApi(e.target.value);
        if (data) {
          coinObject(data, setCrypto1Data, Object.keys(currency)[0].toLowerCase());
          const prices1 = await getCoinPrices(crypto1, Object.keys(currency)[0], days, priceType)
          const prices2 = await getCoinPrices(crypto2, Object.keys(currency)[0], days, priceType)
          if (prices1 && prices2) {
            settingChartData(setChartData, prices1, null, prices2);
            console.log('crypto1 changed');
            setLoading(false);
          }
        }
      }
      catch (error) {
        console.log(error);
        toast.error(`${error.message} while fetching data`);
        setLoading(false)
        navigate('*');
      }
    }
  }

  async function handlePriceToggle(event, type){
    try {
      setLoading(true);
      setPriceType(type)
      const prices1 = await getCoinPrices(crypto1, Object.keys(currency)[0], days, type)
      const prices2 = await getCoinPrices(crypto2, Object.keys(currency)[0], days, type)
      if (prices1 && prices2) {
        settingChartData(setChartData, prices1, null, prices2);
        console.log('prices fetched');
        setLoading(false);
      }
    }
    catch(error){
      console.log(error);
      toast.error(`${error.message} while fetching data`);
      setLoading(false);
      navigate('*');
    }
  }



  return (
    <div>
      {
        Loading ?
          <Loader />
            :
            <div className='compareContainer'>
              <div className='allselectContainer'>
                <SelectViewCurrency setCurrency={setCurrency} currency={currency} />
                <SelectCrypto crypto1={crypto1} crypto2={crypto2} handleChange={handleCoinChange} />
                <SelectDay days={days} handleChange={handleDayChange} />
              </div>

              <div className='coinDataList'>
                <List coins={crypto1Data} viewCurrency={currency} />
              </div>
              <div className='coinDataList'>
                <List coins={crypto2Data} viewCurrency={currency} />
              </div>

              <div className='coin-chart'>
                <div className='daysAndPriceContainer'>
                  <TogglePriceType priceType={priceType} handleToggle={handlePriceToggle} />
                </div>
                <LineGraph chartData={chartData} priceType={priceType} currency={Object.values(currency)[0]} multiAxis={true} />
              </div>

              <CoinInfo heading={crypto1Data.name} desc={crypto1Data.description} />
              <CoinInfo heading={crypto2Data.name} desc={crypto2Data.description} />
            </div>
      }

    </div>
  )
}

export default Compare