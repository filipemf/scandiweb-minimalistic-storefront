import { PureComponent } from 'react';
import GetProduct from '../../GetProduct';

import {gql} from '@apollo/client';
import { client } from '../../../GraphQL/client';
import {LOAD_CLOTHES} from '../../../GraphQL/Queries'

import Preview from '../../Preview';

import '../pagesStyles.css'

export class DropdownCart extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            selection: []
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

                </>
            );
        }
        
    }
}

export default DropdownCart;

