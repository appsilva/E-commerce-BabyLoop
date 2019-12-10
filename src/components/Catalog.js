import React, { PureComponent } from 'react';
import get from 'lodash/get';

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
            [ products ];

        console.log({normalizedProductList});

        return products ? (
            <div className="productList">
                { normalizedProductList.map((product) => this.renderProduct(product)) }
            </div>
        ) : <p>Sem resultados...</p>;
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
                }
            }
        } = product;

        return (
            <div key={ id } className="product">
                <img
                    src={ get(product_pictures, '[0].picture.medium.url', '') }
                    className="productImage"
                    alt={ `product-${id}` } />
                <p>{ name }</p>
                <p>{ brandName }</p>
                <span>
                    <p>{ price }</p>
                    <p>{ market_price }</p>
                </span>
                <button onClick={ this.handleAddToCartClick(id) }>Adicionar ao carrinho</button>
            </div>
        );
    }

    handleAddToCartClick = (args) => {
        console.log(args);


    }
}
