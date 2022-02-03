import { PureComponent } from 'react';

import {gql} from '@apollo/client';
import { client } from '../../../GraphQL/client';
import {LOAD_ALL} from '../../../GraphQL/Queries'

import Preview from '../../Preview';

import '../pagesStyles.css'

export class All extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            data: {},
            product: {},
            currency: "USD",
            symbol: "",
            loading: true
        }
    }


    render() {
        //Search all products with GraphQL API
        client
            .query({
                query: gql`
                ${LOAD_ALL}
                `
            }).then((result)=>{
                this.setState({data: result.data})
                this.setState({loading: result.loading})           
            });

        
        //Render nothing if still loading
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
                        <p className='categoryTitle'>All</p>
                    </div>
                    
                    <div class="container">
                        {this.state.data.category.products.map((val)=>{
                            //Map every currency and display only the selected one
                            const currencySelected = val.prices
                            
                            let symbol = ""
                            let amount = 0
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

export default All;