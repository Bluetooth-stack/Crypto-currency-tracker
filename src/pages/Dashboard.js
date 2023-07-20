import React, { useEffect, useState } from 'react'
import Tabs from '../components/Dashboard/Tabs'
import SelectViewCurrency from '../components/Dashboard/SelectViewCurrency';
import Search from '../components/Dashboard/Search';
import PaginationControl from '../components/Dashboard/Pagination';
import Loader from '../components/Common/Loader';
import BackToTop from '../components/Common/BackToTopButton';
import { getAllCoins } from '../functionalities/getAllCoins';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


function Dashboard() {
  let [coins, setCoins] = useState([]);
  let [paginatedData, setPaginatedData] = useState([]);
  let [currency, setCurrency] = useState({ 'USD': '$' });
  let [searched, setSerched] = useState('');
  const [page, setPage] = useState(1);
  let [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    getData();
  }, [currency])

  async function getData() {
    try {
      const data = await getAllCoins(Object.keys(currency)[0]);
      if(data){
        setCoins(data);
        setPaginatedData(data.slice(0, 10));
        setLoading(false);
      }
    }
    catch(error){
      console.log(error);
      toast.error(`${error.message} while fetching data`);
      setLoading(false);
      navigate('*')
    }
  }


  function onSearch(e) {
    setSerched(e.target.value)
  }

  function onClear() {
    setSerched('');
  }

  function handlePageChanges(event, value) {
    setPage(value);
    let prevIndx = (value - 1) * 10;
    setPaginatedData(coins.slice(prevIndx, prevIndx + 10));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  let filteredData = coins.filter((coin) => (
    coin.name.toLowerCase().includes(searched.toLowerCase()) ||
    coin.symbol.toLowerCase().includes(searched.toLowerCase())
  ))

  return (
    <div>
      <BackToTop />
      {
        loading ?
          <Loader />
          :
          <div>

            <div className='searchFlex' >
              <SelectViewCurrency setCurrency={setCurrency} currency={currency} />
              <Search searched={searched} onSearch={onSearch} />
            </div>
            <Tabs coins={searched ? filteredData : paginatedData} viewCurrency={currency} onClear={searched ? onClear : null} />

            {
              (!searched && coins.length > 0) &&
              <PaginationControl page={page} handlePageChanges={handlePageChanges} />
            }
          </div>
      }
    </div>
  )
}

export default Dashboard