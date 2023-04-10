import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landingpage from './components/landingpage';
import Adminlogin from './components/Adminlogin';
import Userlogin from './components/Userlogin';
import AdminPortal from './components/adminportal';
import UserPortal from './components/userportal';
const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/admin-login" element={<Adminlogin />} />
          <Route path='/user-login/*' element={<Userlogin />} />
          <Route path='/admin/*' element={<AdminPortal />} />
          <Route path='/user/*' element={<UserPortal/>}/>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
