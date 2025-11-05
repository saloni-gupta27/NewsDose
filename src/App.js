import React, {useState } from 'react';
import './App.css';
import Nav from './components/Nav';
import News from './components/News';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';

const App =()=> {
  let pageSize=15;
  let apiKey=process.env.REACT_APP_API_KEY;
   const [progress,setProgress] = useState(0)
  return (
    <div className="App">
      <BrowserRouter>
      <Nav/>
      <LoadingBar
        color='#f11946'
        progress={progress}
        height={3}
      />
      <Routes>
        <Route exact path="/" element={<News key="general" apiKey={apiKey} setProgress={setProgress} pageSize={pageSize} category="general"/>} />
        <Route exact path="/business" element={<News  key="business" apiKey={apiKey} setProgress={setProgress} pageSize={pageSize} category="business"/>} />
        <Route exact path="/science" element={<News  key="science" apiKey={apiKey} setProgress={setProgress} pageSize={pageSize} category="science"/>} />
        <Route exact path="/sports" element={<News key="sports" apiKey={apiKey} setProgress={setProgress} pageSize={pageSize} category="sports"/>} />
        <Route exact path="/technology" element={<News key="technology" apiKey={apiKey} setProgress={setProgress} pageSize={pageSize} category="technology"/>} />
        <Route exact path="/entertainment" element={<News key="entertainment" apiKey={apiKey} setProgress={setProgress} pageSize={pageSize} category="entertainment"/>} />
        <Route exact path="/health" element={<News key="health" apiKey={apiKey} setProgress={setProgress} pageSize={pageSize} category="health"/>} />
      </Routes>
      
      </BrowserRouter>
    </div>
  );
}


export default App;
