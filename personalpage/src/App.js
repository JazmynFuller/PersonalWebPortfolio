import React, { Component } from 'react';
import MyNav from "./components/MyNav";
import PhotoContent from "./components/PhotoContent";
import Footer from "./components/Footer";

import Projects from './components/Projects';

import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App container-fluid">
      <MyNav />
      <main><PhotoContent/></main>
      <Projects/>
      <Footer />
      </div>
    );
  }
}

export default App;
