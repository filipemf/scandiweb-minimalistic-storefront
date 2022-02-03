import { PureComponent } from 'react';

import {gql} from '@apollo/client';
import { client } from '../../../GraphQL/client';

import "./index.css"

import "../../Attributes/index.css"

export class Product extends PureComponent {
    constructor(props) {
        super(props);
        
        this.state = {
            data: {},
            product: String(localStorage['productPage']),
            loading: true
        }
    }


    render() {
        //Get all the data of the product selected
        client
            .query({
                query: gql`
                query ProductQuery{
                    product (id: "${this.state.product}"){
                        id
                        name
                        inStock
                        gallery
                        description
                        category
                        attributes {
                            id
                            name
                            type
                            items {
                                displayValue
                                value
                                id
                            }
                        }
                        prices {
                            amount
                            currency{
                                label
                                symbol
                            }
                        }
                        brand
                    }
                }
                `
            }).then((result)=>{
                this.setState({data: result.data})
                 
            }).then(
                this.setState({loading: false})  
            );

            console.log(this.state.data.product)

        if(this.state.loading==false){
            return (
                <div className='product-container'>
                    <div className='product'>
                        <div className='product-small-img'>
                            {
                                this.state.data.product?.gallery.map((val)=>{
                                    return <img src={val}></img>
                                })
                            }
                        </div>

                        <div className='img-container'>
                            <img id='bigImg' src={this.state.data.product?.gallery[0]}></img>
                        </div>

                    </div>

                    <div className='product-information'>
                        <p className='product-brand'>
                            {this.state.data.product?.brand}
                        </p>

                        <p className='product-name'>
                            {this.state.data.product?.name}
                        </p>
                        
                        <div className='attributes-preview'>
                        {
                            //Rendering all attributes inside products data stored in state
                            this.state.data.product?.attributes.map((val)=>{

                                //Check if the attribute is Size for different way to render
                                if(val.id==="Size"){
                                    console.log("é size")
                                    return <>

                                    <h2 style={{}}>Size: </h2>
                                        {
                                            val.items.map((item)=> {
                                                return(
                                                        <>
                                                            <input type="radio" name={this.state.data.product?.id+"-"+val.id} id={this.state.data.product?.id+"-"+val.id+"-"+item.value} className='hiddenRadioBox' value={item.value} onClick={()=> console.log(item.value)}/>
                                                            <label for={this.state.data.product?.id+"-"+val.id+"-"+item.value} className='size-label'>
                                                                <div className='size-value'>
                                                                    {item.displayValue}
                                                                </div>
                                                            </label>
                                                        </>
                                                        
                                                )
                                            })
                                        }
                                    </>
                                    
                                    
                                }

                                //Check if attribute is Color to render the color swatches
                                if(val.id=="Color"){
                                    console.log("é color")

                                    return <>
                                        <h2 style={{}}>Color: </h2>
                                        {
                                            val.items.map((item)=> {
                                                return(
                                                    <>
                                                        <input type="radio" name={this.state.data.product?.id+"-"+val.id} id={this.state.data.product?.id+"-"+val.id+"-"+item.value} className='hiddenRadioBox' value={item.value} onClick={()=> console.log(item.value)}/>
                                                        <label style={{background: item.value}} for={this.state.data.product?.id+"-"+val.id+"-"+item.value} className='color-label'>
                                                            <div className='color-value'>
                                                                {item.displayValue}
                                                            </div>
                                                        </label>
                                                        {/* <button className='size-item' >{item.displayValue}</button> */}
                                                    </>
                                                    
                                                )
                                            })
                                        }
                                    </>
                                }
                                    
                                //Every other attribute will be rendered this way as default
                                else{
                                    return <>

                                        <h2>{val.id}: </h2>
                                            {
                                                val.items.map((item)=> {
                                                    return(
                                                        <>
                                                            <input type="radio" name={this.state.data.product?.id+"-"+val.id} id={this.state.data.product?.id+"-"+val.id+"-"+item.value} className='hiddenRadioBox' value={item.value}/>
                                                            <label for={this.state.data.product?.id+"-"+val.id+"-"+item.value} className='size-label'>
                                                                <div className='size-value'>
                                                                    {item.displayValue}
                                                                </div>
                                                            </label>
                                                            {/* <button className='size-item' >{item.displayValue}</button> */}
                                                        </>
                                                        
                                                    )
                                                })
                                            }
                                    </>
                                }
                                })
                        }
                        </div>


                        <p className='product-price'>
                            PRICE:
                        </p>
                        <p className='product-amount'>
                            {this.state.data.product?.prices.map((val)=>{
                                if(val.currency.label == localStorage['currency']){
                                        var priceAmount = localStorage['symbol']+val.amount
                                        console.log("PRECO "+priceAmount)
                                        return priceAmount
                                    }
                                })
                            }
                        </p>

                        <button className='addToCardButton'>ADD TO CART</button>

                        <p className='description'>
                            {this.state.data.product?.description}
                        </p>

                    </div>
                    
                </div>
        );
        }
        else{
            return (
                <>
                </>
            )
        }
        
    }
}

export default Product;