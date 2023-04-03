import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Landingpage from './components/landingpage';
import Adminlogin from './components/Adminlogin';
import Userlogin from './components/Userlogin';
const App=()=> {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landingpage/>}/>
        <Route path="admin-login" element={<Adminlogin/>}/>
        <Route path='user-login' element={<Userlogin/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
