import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App';
import {
   
  RouterProvider,
} from "react-router-dom";
import router from './Route/Route';

 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App/>
    </RouterProvider>
  </React.StrictMode>,
)
