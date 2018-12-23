import React, { Component } from 'react';
import MyNav from "./components/MyNav";
import PhotoContent from "./components/PhotoContent";
import Footer from "./components/Footer";
import logo from './logo.svg';
import Projects from './Projects';
import MainHero from './green1a.jpg';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
      <MyNav />
      <main><PhotoContent/></main>
      <Projects/>
      <Footer />
      </div>
    );
  }
}

export default App;
