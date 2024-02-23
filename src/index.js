import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Dashboard from './Dashboard/Dashboard';
import NewStaff from './NewStaff';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import StaffDetailsForm from './Components/forms/StaffDetailsForm';

const router = createBrowserRouter([
  {
    path: "/",
    element:  <App /> ,
  },
  {
    path: "/Dashboard",
    element:  <Dashboard/> ,
  },
  {
    path: "/NewStaff",
    element:  <NewStaff/> ,
  },
  {
    path: "/StaffDetailsForm",
    element:  <StaffDetailsForm/> ,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
