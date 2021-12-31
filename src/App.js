import logo from './logo.svg';
import './App.css';

import GetProduct from './Components/GetProduct';
import React, {Component} from 'react'


import All from './Components/Navbar/All';
import Clothes from './Components/Navbar/Clothes';
import Tech from './Components/Navbar/Tech';
import DropdownCurrency from './Components/Navbar/DropdownCurrency';
import Product from './Components/Product';

import {BrowserRouter as Router, Switch, Route, Routes, Link} from'react-router-dom'



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        open: false
    }
  }
  
  render(){


    return(
      <Router>
        <nav className='navbar'>
          <Link className='categoriesLink' to="/all">All</Link>
          <Link className='categoriesLink' to="/clothes">Clothes</Link>
          <Link className='categoriesLink' to="/tech">Tech</Link>
          <div className='cur'>
              <Link className='currencyButton' to="#" onMouseEnter={()=> this.setState({open: true})} onMouseLeave={()=> this.setState({open: false})}>  $  
                {this.state.open && <DropdownCurrency/>}
              </Link>
        
              <Link className='cartButton' to="#">Cart</Link>
  
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
