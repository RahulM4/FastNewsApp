import './App.css';

import React, { useState } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App = ()=> {
  const pageSize = 5;
  const apiKey = "01dcf6af948c4774b15ca5b593eceb17";
  const [progress, setProgress] = useState(0)
 
    return (
      <div>
        <Router  basename="/FastNewsApp">
        <NavBar/> 
        <LoadingBar height={3} color='#f11946' progress={progress} />
          <Routes>
           
            <Route exact path="/"          element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general"/>}/>
            <Route  path="/business"     element={<News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={pageSize} country="in" category="business" />}/>
            <Route  path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={pageSize} country="in" category="entertainment" />}/> 
            <Route  path="/general"       element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general" />}/>
            <Route  path="/health"       element={<News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={pageSize} country="in" category="health" />}/>
            <Route  path="/science"    element={<News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={pageSize} country="in" category="science" />}/>
            <Route  path="/sports"       element={<News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={pageSize} country="in" category="sports" />}/>
            <Route  path="/technology"   element={<News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={pageSize} country="in" category="technology" />} />
        </Routes>
        </Router>
      </div>
    )
 
}

export default App;