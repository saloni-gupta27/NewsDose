import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav';
import News from './components/News';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

class App extends Component {
   pageSize=15;
  render(){
  return (
    <div className="App">
      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route exact path="/" element={<News key="general" pageSize={this.pageSize} category="general"/>} />
        <Route exact path="/business" element={<News  key="business" pageSize={this.pageSize} category="business"/>} />
        <Route exact path="/science" element={<News  key="science" pageSize={this.pageSize} category="science"/>} />
        <Route exact path="/sports" element={<News key="sports" pageSize={this.pageSize} category="sports"/>} />
        <Route exact path="/technology" element={<News key="technology" pageSize={this.pageSize} category="technology"/>} />
        <Route exact path="/entertainment" element={<News key="entertainment" pageSize={this.pageSize} category="entertainment"/>} />
        <Route exact path="/health" element={<News key="health" pageSize={this.pageSize} category="health"/>} />
      </Routes>
      
      </BrowserRouter>
    </div>
  );
}
}

export default App;
