import React, { PureComponent } from 'react';
import get from 'lodash/get';

// Media
import LOGO from '../media/logo.png';
import CART from '../media/cart.png';

// Styles
import './NavBar.css';

const BASE_API_URL = 'https://babyloop.pt/api/v1/products/';

const MOCK_PRODUCT = {"product":{"id":317,"price":"0.1","user_price":"0.0","description":"Teste GreenFriday 3","bought_at":"2019-06-01","condition":0,"status":0,"invoice":false,"original_box":false,"tag":"f","sold_at":null,"base_product_id":463,"created_at":"2019-11-26T20:11:14.939+00:00","updated_at":"2019-12-05T17:30:00.563+00:00","product_queue_id":null,"added_to_queue_at":null,"user_id":7782,"user_sales_status":1,"is_user_sale":true,"assess_product_id":null,"color":"","invoice_photo":{"url":null,"thumb":{"url":null},"large":{"url":null}},"times_in_cart":5,"added_to_store_at":"2019-11-26","base_product":{"id":463,"name":"Teste ","model":"Teste ","market_price":"1.0","description":"","volume":0,"brand_id":1,"created_at":"2019-11-26T18:40:18.923+00:00","updated_at":"2019-11-26T18:40:53.820+00:00","kind":0,"months_of_use_min":0.0,"months_of_use_max":0.0,"buy_percentage":0.0,"sell_percentage":0.0,"model_year":0,"status":1,"threshold":10,"buy_percentage_excellent":0.0,"buy_percentage_acceptable":0.0,"sell_percentage_excellent":0.0,"sell_percentage_acceptable":0.0,"categories":[{"id":2,"name":"Passeio","picture":{"url":"https://s3.eu-west-1.amazonaws.com/baby-loop/uploads/category/picture/2/passeio.png","thumb":{"url":"https://s3.eu-west-1.amazonaws.com/baby-loop/uploads/category/picture/2/thumb_passeio.png"},"medium":{"url":"https://s3.eu-west-1.amazonaws.com/baby-loop/uploads/category/picture/2/medium_passeio.png"},"large":{"url":"https://s3.eu-west-1.amazonaws.com/baby-loop/uploads/category/picture/2/large_passeio.png"}},"created_at":"2019-01-08T22:02:24.166+00:00","updated_at":"2019-01-08T22:02:24.166+00:00"}],"sub_categories":[{"id":5,"name":"Alcofas","picture":{"url":"https://s3.eu-west-1.amazonaws.com/baby-loop/uploads/sub_category/picture/5/alcofa.png","thumb":{"url":"https://s3.eu-west-1.amazonaws.com/baby-loop/uploads/sub_category/picture/5/thumb_alcofa.png"},"medium":{"url":"https://s3.eu-west-1.amazonaws.com/baby-loop/uploads/sub_category/picture/5/medium_alcofa.png"},"large":{"url":"https://s3.eu-west-1.amazonaws.com/baby-loop/uploads/sub_category/picture/5/large_alcofa.png"}},"category_id":2,"created_at":"2019-01-09T04:10:51.749+00:00","updated_at":"2019-01-09T04:11:22.327+00:00"}],"brand":{"id":1,"name":"Quinny","picture":{"url":"https://s3.eu-west-1.amazonaws.com/baby-loop/uploads/brand/picture/1/quinny.png","thumb":{"url":"https://s3.eu-west-1.amazonaws.com/baby-loop/uploads/brand/picture/1/thumb_quinny.png"},"medium":{"url":"https://s3.eu-west-1.amazonaws.com/baby-loop/uploads/brand/picture/1/medium_quinny.png"},"large":{"url":"https://s3.eu-west-1.amazonaws.com/baby-loop/uploads/brand/picture/1/large_quinny.png"}},"created_at":"2019-01-09T04:11:55.053+00:00","updated_at":"2019-01-09T04:12:21.230+00:00"}},"product_pictures":[{"id":15452,"picture":{"url":"https://s3.eu-west-1.amazonaws.com/baby-loop/uploads/product_picture/picture/15452/bb.JPG","thumb":{"url":"https://s3.eu-west-1.amazonaws.com/baby-loop/uploads/product_picture/picture/15452/thumb_bb.JPG"},"medium":{"url":"https://s3.eu-west-1.amazonaws.com/baby-loop/uploads/product_picture/picture/15452/medium_bb.JPG"},"large":{"url":"https://s3.eu-west-1.amazonaws.com/baby-loop/uploads/product_picture/picture/15452/large_bb.JPG"}},"product_id":317,"created_at":"2019-11-26T20:13:08.154+00:00","updated_at":"2019-11-26T20:30:55.752+00:00","professional":false,"piece_id":null,"selected":true}]},"related_products":[{"id":3,"price":"120.9","user_price":"81.0","description":"Produto com tecido de qualidade e confortável para o Bébe. É uma cadeira extremamente confortável e segura para o bebé, desenvolvida levando em consideração detalhes que vão tornar o dia-a-dia do papai e da mamãe muito mais práticos e cómodos. Pode ser usada dos 0 aos 13kg.","bought_at":"2017-09-01","condition":0,"status":0,"invoice":false,"original_box":false,"tag":"f","sold_at":null,"base_product_id":240,"created_at":"2019-02-19T11:22:58.766+00:00","updated_at":"2019-12-03T15:14:51.145+00:00","product_queue_id":null,"added_to_queue_at":null,"user_id":146,"user_sales_status":0,"is_user_sale":true,"assess_product_id":null,"color":"","invoice_photo":{"url":null,"thumb":{"url":null},"large":{"url":null}},"times_in_cart":2,"added_to_store_at":"2019-04-03"},{"id":11,"price":"71.9","user_price":"30.0","description":"O parque para bebé Open acolhe o bebé desde os primeiros meses. Tanto nos momentos de brincadeira como nos de tranquilidade. A estrutura  do parque é quadrada e dobrável. Dispõe de um colorido tapete com motivos, que também pode utilizá-lo fora do parque, quando o bebé manifesta vontade de movimentar-se livremente, na descoberta do ambiente que o rodeia.","bought_at":"2014-09-01","condition":0,"status":0,"invoice":false,"original_box":false,"tag":"f","sold_at":null,"base_product_id":36,"created_at":"2019-02-19T11:25:45.412+00:00","updated_at":"2019-12-03T15:14:50.934+00:00","product_queue_id":null,"added_to_queue_at":null,"user_id":3854,"user_sales_status":0,"is_user_sale":true,"assess_product_id":null,"color":"","invoice_photo":{"url":null,"thumb":{"url":null},"large":{"url":null}},"times_in_cart":3,"added_to_store_at":"2019-05-02"},{"id":14,"price":"149.9","user_price":"75.0","description":"A cadeira HandySitt garante a segurança necessária para o seu bebé. Pode acompanhar as refeições do seu bebé até aos 30kg","bought_at":"2015-01-01","condition":0,"status":0,"invoice":false,"original_box":false,"tag":"f","sold_at":null,"base_product_id":123,"created_at":"2019-02-20T09:04:30.046+00:00","updated_at":"2019-12-03T15:14:50.678+00:00","product_queue_id":null,"added_to_queue_at":null,"user_id":213,"user_sales_status":0,"is_user_sale":true,"assess_product_id":null,"color":"","invoice_photo":{"url":null,"thumb":{"url":null},"large":{"url":null}},"times_in_cart":0,"added_to_store_at":"2019-02-25"},{"id":16,"price":"88.9","user_price":"48.75","description":"Auto-Fix Fast é a cadeira auto Chicco Grupo 0+. É a cadeira de bebé para automóvel prática para o transporte do seu bebé. Uma cadeira auto que acompanha o seu bebé desde o primeiro dia até aos 13kg. É uma cadeira para automóvel fácil de instalar, com ou sem base de fixação.É uma cadeirinha confortável para todas as fases do crescimento que a mesma acompanha. Ainda, o sistema Clik Clak permite fixar e libertar a cadeira auto de forma fácil e rápida dos carrinhos de passeio, equipados com este dispositivo.","bought_at":"2017-06-01","condition":0,"status":0,"invoice":false,"original_box":false,"tag":"f","sold_at":null,"base_product_id":41,"created_at":"2019-02-20T09:05:08.293+00:00","updated_at":"2019-12-03T15:14:51.083+00:00","product_queue_id":null,"added_to_queue_at":null,"user_id":1305,"user_sales_status":0,"is_user_sale":true,"assess_product_id":null,"color":"","invoice_photo":{"url":null,"thumb":{"url":null},"large":{"url":null}},"times_in_cart":0,"added_to_store_at":"2019-02-27"}]};

export default class NavBar extends PureComponent {
    constructor() {
        super();

        this.state = {
            searchResults: MOCK_PRODUCT,
            isLoading: true,
            error: false,
        };
    }

    getSearchResults = (search = '') => {
        fetch(`${BASE_API_URL}${search}`)
            .then((data) => {
                const searchResults = get(data, 'results') || data;

                console.log(data);

                this.setState({ searchResults, isLoading: false });
            })
            .catch((e) => {
                console.log('entrou: ', e)
                this.setState({ error: true, isLoading: false })
            });
    };

    handleSearch = (e) => {
        e.preventDefault();

        const { value = '' } = this.textInput;

        this.getSearchResults(value);
    };

    render() {
        return (
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
        );
    }
}
