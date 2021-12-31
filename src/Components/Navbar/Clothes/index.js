import { PureComponent } from 'react';
import GetProduct from '../../GetProduct';

import {gql} from '@apollo/client';
import { client } from '../../../GraphQL/client';
import {LOAD_CLOTHES} from '../../../GraphQL/Queries'

import Preview from '../../Preview';

import '../pagesStyles.css'

export class Clothes extends PureComponent {
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
                            const currencySelected = val.prices
                            
                            let symbol = ""
                            let amount = 0
                            currencySelected.forEach(element => {
                                if(element.currency.label =="USD"){
                                    symbol = element.currency.symbol
                                    amount = element.amount
                                }
                            });

                            return <Preview key={val.id} id={val.id} gallery={val.gallery[0]} name={val.name} symbol={symbol} amount={amount} />
                        })}
                    </div>
                </>
            );
        }
        
    }
}

export default Clothes;