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
        const { products = [] } = this.props;

        return !isEmpty(products) ? (
            <div className="productList">
                { products.map((product) => this.renderProduct(product)) }
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
                <div className="brandAndNameContainer">
                    <span className="name">{ name }</span>
                    <span className="brandName">{ brandName }</span>
                </div>
                <div className="priceContainer">
                    <span className="price">{ price }€</span>
                    <span className="marketPrice">{ market_price }€</span>
                </div>
                <button onClick={ () => this.handleAddToCartClick(id) } className="addToBagButton">Adicionar ao carrinho</button>
            </div>
        );
    }

    handleAddToCartClick = (id) => {
        // Handle add to cart
    }
}
