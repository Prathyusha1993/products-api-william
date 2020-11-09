//import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
import Navbar from './components/navbar';
import CarouselPage from './components/carouselPage';

class App extends Component{
  state={};
  render(){
    return(
    <div>
      <Navbar />
      <CarouselPage />
    </div>
    );
  }
}

export default App;
