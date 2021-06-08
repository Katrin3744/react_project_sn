import './App.css';
import React from 'react'
import Header from './components/Header/Header'
import Nav_bar from "./components/Nav_bar/Nav_bar";
import Profile from "./components/Profile/Profile";

const App =()=> {
  return (
    <div className='app-wrapper'>
        <Header/>
        <Nav_bar/>
        <Profile/>
    </div>
  );
}

export default App;
