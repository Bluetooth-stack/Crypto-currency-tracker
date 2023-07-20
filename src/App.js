import './App.css';
// import Footer from './components/Common/Footer';
import Navbar from './components/Common/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Compare from './pages/Compare';
import Watchlist from './pages/Watchlist';
import Dashboard from './pages/Dashboard';
import CoinPage from './pages/CoinPage';
import Errorpage from './pages/Errorpage'
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/compare' element={<Compare />}></Route>
        <Route path='/watchlist' element={<Watchlist />}></Route>
        <Route path='/dashboard' element={<Dashboard />}></Route>
        <Route path='/coins/:id' element={<CoinPage />}></Route>
        <Route path='*' element={<Errorpage />}></Route>
      </Routes>

    </div>
  );
}

export default App;
