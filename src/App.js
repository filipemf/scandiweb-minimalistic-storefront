import './App.css';

import React, {Component} from 'react'

//Import every page
import All from './Components/Navbar/All';
import Clothes from './Components/Navbar/Clothes';
import Tech from './Components/Navbar/Tech';
import DropdownCurrency from './Components/Navbar/DropdownCurrency';
import DropdownCart from './Components/Navbar/DropdownCart';
import Product from './Components/Navbar/Product';
import Cart from './Components/Navbar/Cart'

import {BrowserRouter as Router, Switch, Route, Routes, Link} from'react-router-dom'


import cart from './cart2.svg'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        openCurrency: false,
        openCart: false,
        selectedCurrency: "USD",
        selectedSymbol: "$"
    }
  }
  

  checkIfStorageExists(){
    //Check if the currency storage exists, if not, use the default (USD, $)
    if(localStorage['symbol'] == undefined){
      localStorage['symbol'] = '$'
    }
    if(localStorage['currency'] == undefined){
      localStorage['currency'] = 'USD'
    }
  }


  render(){

    this.checkIfStorageExists()


    return(

      //Build every in to the Navbar
      <Router>
        <nav className='navbar'>
          <Link className='categoriesLink' to="/all"><span className='linkText'>All</span></Link>
          <Link className='categoriesLink' to="/clothes"><span className='linkText'>Clothes</span></Link>
          <Link className='categoriesLink' to="/tech"><span className='linkText'>Tech</span></Link>
          <div className='cur'>
              <Link className='currencyButton' to="#" onMouseEnter={()=> this.setState({openCurrency: true})} onMouseLeave={()=> this.setState({openCurrency: false})}><span className='linkText'> {localStorage['symbol']}</span> 
                {this.state.openCurrency && <DropdownCurrency/>}
              </Link>
        
              <Link className='cartButton' to="#" onMouseEnter={()=> this.setState({openCart: true})} onMouseLeave={()=> this.setState({openCart: false})}>
                {this.state.openCart && <DropdownCart/>}
                <img className='navbarCartSvg' src={cart}/>
                
              </Link>

  
          </div>
          
        </nav>
        
        {/* Build every path used in the app */}
        <Routes>
          <Route path="/" element={<All/>}/>
          <Route path="/all" element={<All/>}/>
          <Route path="/clothes" element={<Clothes/>}/>
          <Route path="/tech" element={<Tech/>}/>
          <Route path="/cart" element={<Cart/>}/>

          <Route path="/product" element={<Product/>}/>
          {/* <Route path="*" element={<ErrorPage/>}/> */}
        </Routes>
        
        
      </Router>
      
    );
  }
}

export default App;
