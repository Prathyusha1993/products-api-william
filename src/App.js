//import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
import Navbar from './components/navbar';
import ProductList from './components/productList';

class App extends Component{
  state={};
  render(){
    return(
      <div>
        <Navbar />
        <ProductList />
      </div>
    );
  }
}

export default App;