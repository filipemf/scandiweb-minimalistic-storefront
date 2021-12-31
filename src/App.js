import logo from './logo.svg';
import './App.css';

import GetProduct from './Components/GetProduct';
import React, {Component} from 'react'


import All from './Components/Header/All';
import Clothes from './Components/Header/Clothes';
import Tech from './Components/Header/Tech';
import Product from './Components/Product';

import {BrowserRouter as Router, Switch, Route, Routes, Link} from'react-router-dom'



class App extends Component {

  
  render(){


    return(
      <Router>
        <nav className='navbar'>
        <Link className='categoriesLink' to="/all">All</Link>
        <Link className='categoriesLink' to="/clothes">Clothes</Link>
        <Link className='categoriesLink' to="/tech">Tech</Link>

        <div className='cur'>
          <p className='currencyButton'>Currency</p>
          <p className='cartButton'>Cart</p>
        </div>
        
        </nav>
        
        <Routes>
          <Route path="/all" element={<All/>}/>
          <Route path="/clothes" element={<Clothes/>}/>
          <Route path="/tech" element={<Tech/>}/>
          <Route path="/product/:id" element={<Tech/>}/>
          {/* <Route path="*" element={<ErrorPage/>}/> */}
        </Routes>
        
        
      </Router>
      
    );
  }
}

export default App;
