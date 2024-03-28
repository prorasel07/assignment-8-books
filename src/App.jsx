 import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from './Components/Nav/Nav';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


 const App = () => {
  return (
    <div>
       <ToastContainer position='top-right'/>
      <Nav/>
      <Outlet />
      
    </div>
  );
 }
 
 export default App;
 