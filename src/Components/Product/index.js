import { PureComponent } from 'react';
import {useNavigate} from 'react-router-dom'

export class Product extends PureComponent {
    render() {

        return (
            <div>
                <p>Clothes</p>

                <button onClick={()=> {this.props.navigation.navigate('/product', {})}}>
                    {" "}
                    Buy
                </button>
            </div>
        );
    }
}

export default Product;