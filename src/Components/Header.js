import React, { Component } from 'react'
import "./Header.css";
import { Link } from 'react-router-dom'

function Header() {
    return (


    <div className="header">
      <div className="upper-part">
        <div className="website-name"> <h2>SMART SCHOOL</h2></div>
        <div className="right-side">
          <button className='one'>Under Implementation Track Progress</button>
          <button className='two'>Get help <i>▼</i></button>
          <p>AY: 2023-2024</p>
          
          <div className='icons'>
          <span><img src='assets/home.png'  alt=''></img></span>
          <span><img src='assets/bell.png' alt=''></img></span>
          <span><img src='assets/search.png' alt=''></img></span>
          <span><img src='assets/grid.png' alt=''></img></span>
          <span><img src='assets/contact.png' alt=''></img></span>
          
          </div>
        </div>
      </div>
      <div className="lower-part">
        <nav>
          <ul>
          <li><Link to={"/Dashboard"}>Home</Link></li>
            <li><Link to={"/StaffDetailsForm"}>Staff Details</Link></li>
            <li><a href="#">Staff Attendance</a></li>
            <li><a href="#">Biometric Attendance</a></li>
            <li><a href="#">Feedbacks</a></li>
            <li><a href="#">Staff Leaves</a></li>
            <li><a href="#">Staff</a></li>
            <li><a href="#">Report</a></li>
          </ul>
        </nav>
      </div>
    </div>
    );
  }
  
  export default Header;