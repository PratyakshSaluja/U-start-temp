import React from 'react';
import './App.css';
import Home from './Home.jsx'
import PrivacyPolicy from './Privacy.jsx';
import { BrowserRouter, Routes, Route} from "react-router-dom"


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path = "/" element = {<Home/>}/>
          <Route path = "/privacy-policy" element = {<PrivacyPolicy/>}/>
        </Routes>
      </BrowserRouter>
      </div>
  );
}

export default App;

