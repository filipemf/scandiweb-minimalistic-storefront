import { PureComponent } from 'react';

import '../pagesStyles.css'
import './index.css'


export class CartPreview extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            open: true,
            id: this.props.id,
            gallery: this.props.gallery,
            name: this.props.name,
            symbol: this.props.symbol,
            amount: this.props.amount,
            quantity: this.props.quantity,
            reload: false
        }
        this.addToCart = this.addToCart.bind(this)
        }
   

        addToCart(){
            //Add one more product to cart if every condition is matched
            var allProducts = JSON.parse(localStorage.product);

            //Loop the products and check if the product matches
            for (var i = 0; i < allProducts.length; i++) {

                if(this.state.id === allProducts[i].id && this.state.gallery === allProducts[i].gallery && this.state.name === allProducts[i].name && this.state.quantity === allProducts[i].quantity){  //look for match with name
                    allProducts[i].quantity += 1;
                    window.location.reload()
                    break;  //exit loop after founding the right product
                    
                }
            }
            localStorage.setItem("product", JSON.stringify(allProducts));  //put the object back
        }

        removeFromCart(){
            //Remove one product to cart if every condition is matched
            var allProducts = JSON.parse(localStorage.product);
            for (var i = 0; i < allProducts.length; i++) {
                if(this.state.id === allProducts[i].id && this.state.gallery === allProducts[i].gallery && this.state.name === allProducts[i].name && this.state.quantity === allProducts[i].quantity){  //look for match with name
                    
                    
                    allProducts[i].quantity -= 1;

                    if(allProducts[i].quantity === 0){
                        allProducts.splice(i, 1); //remove the product from cart if its quantity equals 0

                        window.location.reload()
                        break;  //exit loop since you found the right product
                    }
                    else{
                        window.location.reload()
                        break;  //exit loop since you found the right product
                    }
                    
                    
                }
            }
            localStorage.setItem("product", JSON.stringify(allProducts));  //put the object back
        }

    render() {
            return(
                    <div className='cartPreviewContainer'>
                      
                            <span className='productName'>{this.state.name}</span>

                            <img className='cartImagePreview' src={this.state.gallery}/>

                            <p>{this.state.symbol} {this.state.amount}</p>


                            <div>
                                <button className='plus-cart' onClick={()=> this.addToCart()}>
                                    +
                                </button>

                                <p className='quantityInCart'>{this.state.quantity}</p>

                                <button className='minus-cart' onClick={()=> this.removeFromCart()}>
                                     - 
                                </button>
                            </div>
                    </div>
            )
        }

}

export default CartPreview;