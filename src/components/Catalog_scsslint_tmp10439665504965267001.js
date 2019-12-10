import React, { PureComponent } from 'react';
import get from 'lodash/get';
import isEmpty from 'lodash/isEmpty';

// Styles
import './Catalog.css';

export default class Catalog extends PureComponent {
    constructor() {
        super();

        this.state = {
            cart: []
        }
    }

    render() {
        const { products = {} } = this.props;
        const normalizedProductList = Array.isArray(products) ?
            products :
            !isEmpty(Object.keys(products).filter((key) => key === 'error')) ?
                [] :
                [ products ];

        return !isEmpty(normalizedProductList) ? (
            <div className="productList">
                { normalizedProductList.map((product) => this.renderProduct(product)) }
            </div>
        ) : <p className="noResultsMessage">Sem resultados...</p>;
    }

    renderProduct(product = {}) {
        const {
            id,
            price,
            product_pictures = [],
            base_product: {
                market_price,
                name,
                brand: {
                    name: brandName,
                } = {}
            } = {}
        } = product;

        return (
            <div key={ id } className="product">
                <img
                    src={ get(product_pictures, '[0].picture.medium.url', '') }
                    className="productImage"
                    alt={ `product-${id}` } />
                <p>{ name }</p>
                <p>{ brandName }</p>
                <div className="priceContainer">
                    <p className="marketPrice">{ price }</p>
                    <p className="marketPrice">{ market_price }</p>
                </div>
                <button onClick={ this.handleAddToCartClick } className="addToBagButton">Adicionar ao carrinho</button>
            </div>
        );
    }

    handleAddToCartClick = (args) => {
        console.log({args});


    }
}
