import React from 'react';
import { BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import FrontPage from './FrontPage';
import EmployeeLogin from './Login/EmployeeLogin';
import AdminLogin from './Login/AdminLogin';
import HRLogin from './Login/HRLogin';
import Signup from './Login/Signup'
import HomePage from './HomePage';
// import App from './App';

function Routerpage() {
    return (
      <Router >
          <Routes>
          <Route path='/' element={<FrontPage/>}/>
          <Route path='/HRLogin' element={<HRLogin/>}/>
          <Route path='/AdminLogin' element={<AdminLogin/>}/>
          <Route path='/EmployeeLogin' element={<EmployeeLogin/>}/>
          <Route path='/Signup' element={<Signup/>}/>
          <Route path='/HomePage' element={<HomePage/>}/>
          {/* <Route path='/App' element={<App/>}/> */}
          </Routes>
      </Router>
    );
  }
  export default Routerpage;