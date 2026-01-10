import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Pages/Home';
import Channel from './Components/Channel';
import Uploadvideo from './Pages/Uploadvideo';
import Categories from './Pages/Categories';
import Settings from './Pages/Settings';
import Myaccount from './Pages/Myaccount';
import Watchlater from './Pages/Watchlater';
import Subscription from './Components/Subscription';
import Videos from './Pages/Videos';
import Login from './Auth/Login';
import UploadingDetails from './Pages/Uploadingdetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Channel" element={<Channel />} />
        <Route path="/Uploadvideo" element={<Uploadvideo />} />
        <Route path="/Uploadingdetails" element={<UploadingDetails />} />
        <Route path="/Categories" element={<Categories />} />
        <Route path="/Watchlater" element={<Watchlater />} />
        <Route path="/Settings" element={<Settings />} />
        <Route path="/Myaccount" element={<Myaccount />} />
        <Route path="/Videos" element={<Videos />} />
        <Route path="/Subscription" element={<Subscription />} />

      
      
      </Routes>
    </Router>
  );
}

export default App;
