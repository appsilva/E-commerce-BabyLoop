import React, { PureComponent } from 'react';

// Components
import Catalog from './components/Catalog';
import NavBar from './components/NavBar';

// Styles
import './App.css';

export default class App extends PureComponent {
    render() {
        return (
            <div className="container">
                <NavBar />
                <Catalog />
            </div>
        );
    }
}
