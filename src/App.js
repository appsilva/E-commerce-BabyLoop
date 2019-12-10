import React, { PureComponent } from 'react';
import get from 'lodash/get';
import isEmpty from 'lodash/isEmpty';

// Components
import Catalog from './components/Catalog';
import NavBar from './components/NavBar';
import Loader from 'react-loader-spinner';

// Styles
import './App.css';

const BASE_API_URL = 'https://babyloop.pt/api/v1/products/';

export default class App extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            products: [],
            searchResults: [],
            isLoading: true,
            error: false,
        };
    }

    componentDidMount() {
        this.setState({ products: this.getProducts() });
    }

    getProducts = () => {
        this.setState({ isLoading: true });

        fetch(BASE_API_URL)
            .then((result) => result.json())
            .catch((e) => {
                this.setState({ error: true, isLoading: false })
            })
            .then((data) => {
                const products = get(data, 'product') || data || [];

                this.setState({ isLoading: false });

                products && this.setState({ products, searchResults: products });
            });
    };

    getSearchResults = (search = '') => {
        const { products = [] } = this.state;
        const normalizedSearch = search.toString().toLowerCase();
        const normalizedProductList = Array.isArray(products) ?
            products :
            !isEmpty(Object.keys(products).filter((key) => key === 'error')) ?
                [] :
                [ products ];
        const searchResults = normalizedProductList.filter((product) =>
            product.base_product.name.toString().toLowerCase().includes(normalizedSearch) ||
            product.base_product.description.toString().toLowerCase().includes(normalizedSearch));

        this.setState({ searchResults: search === '' ? products : searchResults });
    };

    render() {
        const { searchResults, error, isLoading } = this.state;

        return (
            <div className="container">
                <NavBar onSearch={ this.getSearchResults }/>
                {
                    isLoading ?
                        <Loader
                            className="loader"
                            type="TailSpin"
                            color="#e5d11b"
                            height={80}
                            width={80} /> :
                        error ?
                            <p className="errorMessage">Ocorreu um erro... Tente novamente.</p> :
                            <Catalog products={ searchResults }/>
                }
            </div>
        );
    }
}
