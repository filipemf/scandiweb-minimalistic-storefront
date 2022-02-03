import { PureComponent } from 'react';

import {gql} from '@apollo/client';
import { client } from '../../../GraphQL/client';
import {LOAD_CLOTHES, LOAD_CURRENCIES} from '../../../GraphQL/Queries'

import '../pagesStyles.css'


export class Cart extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            
            quantity: 0,

            amountInCart: 0,

            currentSymbol: (localStorage['symbol']!= undefined) ? localStorage['symbol'] : "$"
        }

        this.handleCurrencySelection = this.handleCurrencySelection.bind(this)
    }


    
    handleCurrencySelection(symbol, currency){
        this.setState({open: false})

        localStorage['symbol'] = symbol

        localStorage['currency'] = currency

        window.location.reload()

    }


    sum() {
        //Sum every item price in the cart

        //Check if the product cart is empty and set the quantity
        if(localStorage['product']!= undefined){
            let quantity = 0
            
            JSON.parse(localStorage['product']).map((val)=>{
                console.log(val)
               quantity = quantity+val.quantity
            })

            this.setState({quantity: quantity})
        }

        //Check if the product cart is empty and set the total amount based on default price multiplied by each product quantity
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

        if (this.state.loading == true){
            return(
                <>
                </>
            )
        }
        else{
            return (
                <>
                    <div className='titleDiv'>
                        <p className='categoryTitle'>Cart</p>
                    </div>

                    
                    <div id='content-cart'>
                            
                                <hr class="solid"></hr>
                                {JSON.parse(localStorage['product']).map((val)=>{
                                    //Map every product and render each one based on their values
                                    return (

                                        <div className='cartPreviewContainer'>
                                        


                                                <div className='cartData'>
                                                    <span id="productName">{val.name}</span>

                                                    <p id="productPrice">{val.symbol} {val.amount}</p>
                                                </div>
                                                

                                                <img className='cartImage' src={val.gallery}/>

                                                <p className='cartItemsQuantity'>{val.quantity}</p>
                                
                                            

                                                <hr class="solid"></hr>
                                        
                        
                                        </div>
                                    )
                                })}
                           

                            <a className='checkOutButton'>
                                CHECK OUT
                            </a>
                            <p className='amountCart'>Total amount: {this.state.currentSymbol}{this.state.amountInCart}</p>
                    </div>
                </>
            );
        }
        
    }
}

export default Cart;