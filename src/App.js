import React, { PureComponent } from 'react';
import get from 'lodash/get';

// Components
import Catalog from './components/Catalog';
import NavBar from './components/NavBar';
import Loader from 'react-loader-spinner';

// Styles
import './App.css';

import { PRODUCTS_MOCK } from './utils/ProductsMock';
const BASE_API_URL = 'https://babyloop.pt/api/v1/products/';

export default class App extends PureComponent {
    constructor() {
        super();

        this.state = {
            searchResults: PRODUCTS_MOCK,
            isLoading: true,
            error: false,
        };
    }

    componentDidMount() {
        this.setState({ searchResults: this.getSearchResults() });
    }

    getSearchResults = (search = '') => {
        this.setState({ isLoading: true });

        fetch(`${BASE_API_URL}${search}`)
            .then((result) => result.json())
            .catch((e) => {
                this.setState({ error: true, isLoading: false })
            })
            .then((data) => {
                const searchResults = get(data, 'product') || data || [];

                console.log(data);

                this.setState({ searchResults, isLoading: false });
            });
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
                            <p>Ocorreu um erro... Tente novamente.</p> :
                            <Catalog products={ searchResults }/>
                }
            </div>
        );
    }
}
