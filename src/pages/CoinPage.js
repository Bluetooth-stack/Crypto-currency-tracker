import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Loader from '../components/Common/Loader';
import { coinObject } from '../functionalities/coinObject';
import List from '../components/Dashboard/List';
import SelectViewCurrency from '../components/Dashboard/SelectViewCurrency';
import CoinInfo from '../components/Coin/CoinInfo';
import { getCoinsDataApi } from '../functionalities/getCoinsDataApi';
import { getCoinPrices } from '../functionalities/getCoinPrices';
import LineGraph from '../components/Coin/LineChart';
import SelectDay from '../components/Coin/SelectDay';
import TogglePriceType from '../components/Coin/TogglePriceType';
import { settingChartData } from '../functionalities/setChartData';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function CoinPage() {
    let [loading, setLoading] = useState(true);
    let [currency, setCurrency] = useState({ 'USD': '$' });
    let [coinData, setCoinData] = useState({});
    let [days, setDays] = useState(30);
    let [chartData, setChartData] = useState({});
    let [priceType, setPriceType] = useState('prices');

    const navigate = useNavigate();

    const { id } = useParams();

    useEffect(() => {
        if (id) {
            getData()
        }
    }, [id, currency, days, priceType])

    async function getData() {
        try {
            const data = await getCoinsDataApi(id);
            if (data) {
                coinObject(data, setCoinData, Object.keys(currency)[0].toLowerCase());
                const prices = await getCoinPrices(id, Object.keys(currency)[0], days, priceType)
                if (prices) {
                    settingChartData(setChartData, prices, data.market_data.price_change_percentage_24h );
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



    const handleChange = (event) => {
        setDays(event.target.value);
    };

    const handlePriceToggle = (event, type) => {
        setPriceType(type);
    };


    return (
        <div>

            {
                loading ?
                    <Loader />
                    :
                    <div className='coinDataContainer'>
                        <SelectViewCurrency setCurrency={setCurrency} currency={currency} />
                        <div className='coinDataList'>
                            <List coins={coinData} viewCurrency={currency} />
                        </div>
                        <div className='coin-chart'>
                            <div className='daysAndPriceContainer'>
                                <SelectDay days={days} handleChange={handleChange} />
                                <TogglePriceType priceType={priceType} handleToggle={handlePriceToggle} />
                            </div>
                            <LineGraph chartData={chartData} priceType={priceType} currency={Object.values(currency)[0]} />
                        </div>

                        <CoinInfo heading={coinData.name} desc={coinData.description} />

                    </div>

            }
        </div>
    )
}

export default CoinPage