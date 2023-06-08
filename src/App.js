import './App.css';
import React, { useState } from 'react'
import NavBar from './components/NavBar'
import LoadingBar from 'react-top-loading-bar'
import News from './components/News';
import {
  BrowserRouter,
  Routes, // instead of "Switch"
  Route,
} from "react-router-dom";

const App = () => {
  const [progress, setProgress] = useState(0);
  // a = " NewsPlus";
  const pageSize = 5;
  const apiKey = process.env.REACT_APP_NEWS_API  //'this key is hide in .env.local;

    return (
      <>
      <BrowserRouter>
        <NavBar />
      <LoadingBar
        color='#f11946'
        height={3}
        progress={progress}
      />
        <div className="container">
        <Routes>
          <Route exact path="/" element={<News setProgress={setProgress} key="general" pageSize={pageSize} apiKey={apiKey} country="us" category="general"/>} />
          <Route exact path="/business" element={<News setProgress={setProgress} key="business" pageSize={pageSize} apiKey={apiKey} country="us" category="business"/>} />
          <Route exact path="/entertainment" element={<News setProgress={setProgress} key="entertainment" pageSize={pageSize} apiKey={apiKey} country="us" category="entertainment"/>} />
          <Route exact path="/health" element={<News setProgress={setProgress} key="health" pageSize={pageSize} apiKey={apiKey} country="us" category="health"/>} />
          <Route exact path="/science" element={<News setProgress={setProgress} key="science" pageSize={pageSize} apiKey={apiKey} country="us" category="science"/>} />
          <Route exact path="/sports" element={<News setProgress={setProgress} key="sports" pageSize={pageSize} apiKey={apiKey} country="us" category="sports"/>} />
          <Route exact path="/technology" element={<News setProgress={setProgress} key="technology" pageSize={pageSize} apiKey={apiKey} country="us" category="technology"/>} />
        </Routes>
        </div>
      </BrowserRouter>
    </>
      // <div>
      //   <NavBar />
      //   
        
      //   {/* My News class app is {a} */}
      // </div>
    )
}
 
export default App;