import { PureComponent } from 'react';
import './Nav.css'

export class Header extends PureComponent {
    render() {
        return (
            <nav>
                <h3>Logo</h3>
                <ul>
                    <li>All</li>
                    <li>Clothes</li>
                    <li>Tech</li>
                </ul>
            </nav>
        );
    }
}

export default Header;