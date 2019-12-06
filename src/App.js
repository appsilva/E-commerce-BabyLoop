import React, { PureComponent } from 'react';

// Components
import Catalogo from './components/Catalogo';

// Media
import LOGO from './media/logo.png';

export default class App extends PureComponent {
    render() {
        return (
            <div className="container">
                <img src={ LOGO } alt="BabyLoop Logo" className="logo"  />
                <Catalogo />
            </div>
        );
    }
}
