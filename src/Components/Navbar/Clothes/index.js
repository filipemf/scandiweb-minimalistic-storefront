import { PureComponent } from 'react';

import {gql} from '@apollo/client';
import { client } from '../../../GraphQL/client';
import {LOAD_CLOTHES, LOAD_CURRENCIES} from '../../../GraphQL/Queries'

import Preview from '../../Preview';

import '../pagesStyles.css'

export class Clothes extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            data: {},
            product: {},
            loading: true,
            allCurrencies: []
        }
    }


    render() {


        //Get all avaliable currencies and set them to state
        client
        .query({
            query: gql`
            ${LOAD_CURRENCIES}
            `
        }).then((result)=>{
            this.setState({allCurrencies: result.data.currencies})     
        });

        
        //Get all avaliable clothes and set loading to false if still loading
        client
            .query({
                query: gql`
                ${LOAD_CLOTHES}
                `
            }).then((result)=>{
                this.setState({data: result.data})
                this.setState({loading: result.loading})           
            });
        

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
                        <p className='categoryTitle'>Clothes</p>
                    </div>

                    <div class="container">
                        {this.state.data.category.products.map((val)=>{
                            //Map every product to get its price
                            console.log(val)
                            const currencySelected = val.prices
                            
                            let symbol = ""
                            let amount = 0

                            //Check every price to get the price for the selected currency
                            currencySelected.forEach(element => {
                                if(element.currency.label == localStorage['currency']){
                                    symbol = element.currency.symbol
                                    amount = element.amount
                                }
                            });

                            //Render the preview
                            return <Preview key={val.id} id={val.id} gallery={val.gallery[0]} name={val.name} symbol={symbol} amount={amount} attributes={val.attributes} />
                        })}
                    </div>
                </>
            );
        }
        
    }
}

export default Clothes;