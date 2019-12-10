import React, { PureComponent } from 'react';

// Media
import LOGO from '../media/logo.png';
import CART from '../media/cart.png';

// Styles
import './NavBar.css';

export default class NavBar extends PureComponent {
    handleSearch = (e) => {
        e.preventDefault();

        const { value = '' } = this.textInput;

        this.props.onSearch(value);
    };

    render() {
        return (
            <div>
                <div className="nav">
                    <img src={ LOGO } alt="BabyLoop Logo" className="logo" />
                    <form className="searchForm" onSubmit={ this.handleSearch }>
                        <input
                            type="text"
                            id="search"
                            placeholder="Pesquisar"
                            ref={(input) => this.textInput = input}
                            className="searchInput" />
                    </form>
                    <img src={ CART } className="cart" alt="Cart Icon" />
                </div>
            </div>
        );
    }
}
