import 'bootstrap/dist/css/bootstrap.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Header from './components/admin/header/AdminHeader'
import UserHome from './components/user/home/UserHome'


import AdminActive from './components/admin/active/AdminActive'
import AdminArchive from './components/admin/archive/AdminArchive'
import Login from './components/user/login/Login'
import SignUp from './components/user/home/SignUp';
import AboutUs from './components/user/home/AboutUs';
// import { Pets } from '@mui/icons-material';
import ContactUs from './components/user/home/ContactUs';
import Pets from './components/user/home/Pets';
import AdminAdopted from './components/admin/adopted/AdminAdopted';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserHome></UserHome>}></Route>
          <Route path="/signup" element={<SignUp/>}></Route>
          <Route path="/about" element={<AboutUs/>}></Route>
          <Route path="/pets" element={<Pets/>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/admin/active" element={<AdminActive></AdminActive>}></Route>
          <Route path="/admin/archive" element={<AdminArchive></AdminArchive>}></Route>
          <Route path="/admin/adopted" element={<AdminAdopted></AdminAdopted>}></Route>
          <Route path="/contact" element={<ContactUs/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
