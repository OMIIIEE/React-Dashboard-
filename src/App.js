import React from 'react';
import './App.css';
import Header from './Components/Header';
import EnrollNewFrom from './Components/EnrollNewForm';
import Dashboard from './Dashboard/Dashboard';
import NewStaff from './NewStaff';

function App() {
  return (
    <div className="App">
     {/* <NewStaff/> */}
      <Dashboard/>
    </div>
  );
}

export default App;
