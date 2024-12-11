import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav';
import News from './components/News';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';

class App extends Component {
  pageSize=15;
  apikey=process.env.REACT_APP_API_KEY;
   state ={
      progress:0
    }
    setProgress=(progress)=>{
      this.setState({progress:progress})
    }
   
  render(){
  return (
    <div className="App">
      <BrowserRouter>
      <Nav/>
      <LoadingBar
        color='#f11946'
        progress={this.state.progress}
        height={3}
      />
      <Routes>
        <Route exact path="/" element={<News key="general" apiKey={this.apikey} setProgress={this.setProgress} pageSize={this.pageSize} category="general"/>} />
        <Route exact path="/business" element={<News  key="business" apiKey={this.apikey} setProgress={this.setProgress} pageSize={this.pageSize} category="business"/>} />
        <Route exact path="/science" element={<News  key="science" apiKey={this.apikey} setProgress={this.setProgress} pageSize={this.pageSize} category="science"/>} />
        <Route exact path="/sports" element={<News key="sports" apiKey={this.apikey} setProgress={this.setProgress} pageSize={this.pageSize} category="sports"/>} />
        <Route exact path="/technology" element={<News key="technology" apiKey={this.apikey} setProgress={this.setProgress} pageSize={this.pageSize} category="technology"/>} />
        <Route exact path="/entertainment" element={<News key="entertainment" apiKey={this.apikey} setProgress={this.setProgress} pageSize={this.pageSize} category="entertainment"/>} />
        <Route exact path="/health" element={<News key="health" apiKey={this.apikey} setProgress={this.setProgress} pageSize={this.pageSize} category="health"/>} />
      </Routes>
      
      </BrowserRouter>
    </div>
  );
}
}

export default App;
