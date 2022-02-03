import { PureComponent } from 'react';

import '../pagesStyles.css'
import './index.css';

import { Link } from 'react-router-dom';

import CartPreview from '../CartPreview'

export class DropdownCart extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            open: true,
            selection: [],
            currencies : [],
            quantity: 0,

            amountInCart: 0,

            currentSymbol: (localStorage['symbol']!= undefined) ? localStorage['symbol'] : "$"
        }
    }


    sum() {
        //Get the product quantity
        if(localStorage['product']!= undefined){
            let quantity = 0
            
            JSON.parse(localStorage['product']).map((val)=>{
                console.log(val)
               quantity = quantity+val.quantity
            })

            this.setState({quantity: quantity})
        }

        //Sum every product price and multiply it by the product quantity
        if(localStorage['product']!= undefined){

            let quantity = 0
            JSON.parse(localStorage['product']).map((val)=>{
                console.log(val)
               quantity = quantity+(val.amount*val.quantity)
            })
            this.setState({amountInCart: quantity})
        }

    }

    render() {
    
        this.sum()
        if (this.state.open == true & localStorage['product']!= undefined){
            return(
                <>
                    
                    <div className='cartContainer'>
                        <div className='content-cart'>
                            <span className='cartQuantity'>My bag, </span> <span>{this.state.quantity} items</span>
                            
                            <div className='cartTable'>
                                {JSON.parse(localStorage['product']).map((val)=>{
                                    //Map the product page and render each preview sending as properties
                                    return <CartPreview key={val.id} id={val.id} gallery={val.gallery} name={val.name} symbol={val.symbol} amount={val.amount} quantity={val.quantity}/>
                                })}
                            </div>

                            
                            <p className='amountCart'>Total amount: {this.state.currentSymbol}{this.state.amountInCart}</p>
                            <div className='cartOptionsDiv'>
                                <Link className='viewBag' to='/cart'>
                                    VIEW BAG
                                </Link>

                                <a className='checkOut'>
                                    CHECK OUT
                                </a>
                            </div>
                            
                        </div>
                        
                    </div>
                                
                    {/* Div that makes the screen grey when hovering the cart */}
                    <div className='fade'></div>
                </>
            )
        }
        else{
            return(
                <>
                    {/* Render this if nothing is in the cart */}
                    <div className='cartContainer'>
                        <div className='content'>
                            <span className='cartQuantity'>Empty</span>
                        </div>
                        
                    </div>



                    <div className='fade'></div>
                </>
            
            )

        }

    }
}

export default DropdownCart;

