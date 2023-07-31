import React, { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { Home, Profile, CreateCampaign, CampaignDetails, Payment, Withdraw } from './pages';
import Layout from './components/Layout';
import { navlinks } from './constants';

const App = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // 判斷是否為由 index.html 跳轉到 index2.html 的情況
    if (window.location.pathname === '/index2.html') {
      // 執行跳轉到首頁 (Home) 的操作
      navigate('/');
    }
  }, [navigate]);

  return (
    <div className='relative sm:-8 p-4 bg-[#13131a] min-h-screen flex flex-row'>
      <div className='flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5'>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/withdraw" element={<Withdraw />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/create-campaign" element={<CreateCampaign />} />
            <Route path="/campaign-details/:id" element={<CampaignDetails />} />
          </Routes>
        </Layout>
      </div>
    </div>
  );
};

export default App;
