import React, {PureComponent} from 'react';

import {gql} from '@apollo/client';
import {client} from '../GraphQL/client';
import {LOAD_PRODUCTS, LOAD_ALL} from '../GraphQL/Queries'

export class GetProduct extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            data: {},
            product: {}
        }
    }

    
    render(){
        client
            .query({
                query: gql`
                ${LOAD_ALL}
                `
            }).then((result)=>this.setState({data: result.data}));
        return (
            <div>
                <p>{this.state.data}</p>
                
            </div>
        )
    }
    

    
}
export default GetProduct;