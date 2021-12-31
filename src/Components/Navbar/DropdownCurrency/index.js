import { PureComponent } from 'react';
import GetProduct from '../../GetProduct';

import {gql} from '@apollo/client';
import { client } from '../../../GraphQL/client';
import {LOAD_CLOTHES} from '../../../GraphQL/Queries'

import Preview from '../../Preview';

import '../pagesStyles.css'
import { Link } from 'react-router-dom';

export class DropdownCurrency extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            open: true,
            selection: []
        }
    }


    render() {
        const cur = [
            {
              "label": "USD",
              "symbol": "$"
            },
            {
              "label": "GBP",
              "symbol": "£"
            },
            {
              "label": "AUD",
              "symbol": "A$"
            },
            {
              "label": "JPY",
              "symbol": "¥"
            },
            {
              "label": "RUB",
              "symbol": "₽"
            }
          ]

    
        if (this.state.open == true){
            return(
                    <div className='dropdownContainer'>
                    
                        <ul className="currencies-submenu" onClick={()=> this.setState({open: !this.state.open})}>
                            {cur.map((item)=>{
                                return (
                                    <li key={item.symbol}>
                                        <Link to="#" className="currency-option" onClick={()=> this.setState({open: false})}>
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