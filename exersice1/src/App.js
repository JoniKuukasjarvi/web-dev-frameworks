import React from 'react';
import './App.css';
import Header from './components/Header';
import Notification1 from './components/Notification1';
import Sidemenu from './components/Sidemenu';
import MainSection from './components/MainSection';


function App() {
  return (
    <div >
      <h1 id="title"><Header/></h1>
      <p id="notification"><Notification1/> New COVID cases found</p>
      <p id="notification"><Notification1/> This is how wartimes affected us</p>
      <p id="notification"><Notification1/> Facts are in more need than ever - subscribe now to my new magazine</p>
      <p id="sidemenu"><Sidemenu/></p>
      <div id="mainsection"><MainSection/></div>
      <placeholder/>
      
    </div>
  );
}

export default App;
