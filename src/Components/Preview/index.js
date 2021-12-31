import { PureComponent } from 'react';
import "./index.css"

export class Preview extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.id,
            gallery: this.props.gallery,
            name: this.props.name,
            symbol: this.props.symbol,
            amount: this.props.amount,
            loading: true
        }
    }

    render() {
        return (
            <div className='Preview'>
                <img className='productImage' src={this.state.gallery} alt={this.state.name}/>
                <p className='productName'>{this.state.name}</p>
                <p className='productPrice'>{this.state.symbol}{this.state.amount}</p>
                {" "}
            </div>
        );
    }
        
}

export default Preview;