import { PureComponent } from 'react';
import "./index.css"

import cart from '../../cart.svg'
import Attributes from '../Attributes';

import { Link } from 'react-router-dom';

export class Preview extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.id,
            gallery: this.props.gallery,
            name: this.props.name,
            symbol: this.props.symbol,
            amount: this.props.amount,
            attributes: this.props.attributes,
            loading: true
        }

        //Bind every function
        this.insertIntoCart = this.insertIntoCart.bind(this)
    
        this.selectProduct = this.selectProduct.bind(this)

    }

    insertIntoCart(){
        //Insert data into the cart
        let data = {
            id: this.state.id, 
            name: this.state.name, 
            symbol: this.state.symbol, 
            amount: this.state.amount, 
            gallery: this.state.gallery,
            attributes: [],
            quantity: 1
        }

        //Put all data into an object

        

        //Check if the attributes arent undefined to proceed
        if(this.state.attributes!=undefined){
            this.state.attributes.map((val)=>{

                //Get the radio name for each attribute
                let radioName = this.state.id+"-"+val.id

                //Push the attribute results into the data array
                data.attributes.push({ [val.id]: document.querySelector(`input[name="${radioName}"]:checked`).value})
            })
        }

        //Put the product if product localStorage are empty
        if(localStorage['product']== null){
            localStorage['product'] = JSON.stringify([data]);
        }

        //If localStorage are not empty, add one more to quantity
        else{
            let productList = JSON.parse(localStorage['product']) || []

            //If the product is not on the cart, insert it
            if(productList.findIndex((obj => obj.id == this.state.id)) == -1){

                console.log(productList.findIndex((obj => obj.attributes == data.attributes)))
                
                productList.push(data)

                localStorage['product'] = JSON.stringify(productList);

            }

            //If the product is already in the card, add one more to the item
            else{
                let objIndex = productList.findIndex((obj => obj.id == this.state.id));

                productList[objIndex].quantity = productList[objIndex].quantity+1
                
                localStorage['product'] = JSON.stringify(productList);
            }

            
        }
        
    }

    selectProduct(){
        //Set the product chosen to the localStorage to view PDP
        let id = this.state.id
        localStorage['productPage'] = id;
        
    }

    render() {
        return (
            <div className='Preview'>
                    <div className='content'>
                        <Link className='toProduct' to={"/product"} onClick={()=> this.selectProduct()}>
                            
                            <img className='productImage' src={this.state.gallery} alt={this.state.name}/>
                            
                        </Link>

                        <button className='buttonCart' onClick={()=> this.insertIntoCart()}>
                            <img className='cartSvg' src={cart}/>
                        </button>

                        
                        <div className='attributes-container'>
                            <Attributes id={this.state.id} attributes={this.state.attributes}/>
                        </div>
                        
                        
                        <p className='productName'>{this.state.name}</p>
                        <p className='productPrice'>{this.state.symbol}{this.state.amount}</p>
                        {" "}
                    </div>
                
                
                
            </div>
        );
    }
        
}

export default Preview;