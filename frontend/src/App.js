import './App.css';
import { About, Blog, Contact, Home, Shop } from './components/pages';
import { Routes, Route } from 'react-router-dom'
import Login from './components/pages/Login';
import Forget from './components/pages/Forget';
import Register from './components/pages/Register';
import { UserDashboard } from './components/pages/User';


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='/forget' element={<Forget />} />
        <Route path='/register' element={<Register />} />
        <Route path='/userDashboard' element={<UserDashboard/>}/>
      </Routes>
    </>
  );
}

export default App;
