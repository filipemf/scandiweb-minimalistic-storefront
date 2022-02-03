import { PureComponent } from 'react';

import {gql} from '@apollo/client';
import { client } from '../../../GraphQL/client';
import {LOAD_CURRENCIES} from '../../../GraphQL/Queries'


import '../pagesStyles.css'
import { Link } from 'react-router-dom';

export class DropdownCurrency extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            open: true,
            selection: [],
            currencies : [],
        }

        this.handleCurrencySelection = this.handleCurrencySelection.bind(this)
    }
    
    handleCurrencySelection(symbol, currency){
        //Change the current currency to another one and reload the page to load every product price again
        this.setState({open: false})

        localStorage['symbol'] = symbol

        localStorage['currency'] = currency

        localStorage.removeItem('product')

        window.location.reload()

    }

    render() {
        //Render all currencies
        client
          .query({
              query: gql`
              ${LOAD_CURRENCIES}
              `
          }).then((result)=>{
                this.setState({currencies: result.data.currencies})       
          });

    
        if (this.state.open == true){
            return(
                    <div className='dropdownContainer'>
                        <ul className="currencies-submenu" onClick={()=> this.setState({open: !this.state.open})}>
                            {this.state.currencies.map((item)=>{
                                return (
                                    <li key={item.symbol}>
                                        <Link to="#" className="currency-option" onClick={()=> this.handleCurrencySelection(item.symbol, item.label)}>
                                            {item.symbol} {item.label}
                                        </Link>
                                    </li>
    
                                )
                            })}
                        </ul>
    
                    </div>
            )
        }
        else{
            return(
                <></>
            )

        }

    }
}

export default DropdownCurrency;