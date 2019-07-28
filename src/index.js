import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/index';

import {getProducts} from './actions/products-actions';

import DevTools from './DevTools';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { 
	Alert,
	Button, 
	Jumbotron, 
	Pagination, 
	PaginationItem, 
	PaginationLink,
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
import './index.css';
import './App.scss';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faSpinner, faShoppingCart, faCartArrowDown, faCheckCircle, faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'

import MainLayout from './components/MainLayout/MainLayout';
import Home from './components/Home/Home';
import ProductListContainer from './containers/ProductListContainer';
import ProductContainer from './containers/ProductContainer';
import CartContainer from './containers/CartContainer';
import CheckoutContainer from './containers/CheckoutContainer';

import Faq from './components/Faq/Faq';
import Contact from './components/Contact/Contact';
import Terms from './components/Terms/Terms';
import NoMatch from './components/NoMatch/NoMatch';

library.add(fab, faSpinner, faShoppingCart, faCartArrowDown, faCheckCircle, faArrowLeft, faArrowRight)

class App extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<div>
					<BrowserRouter>
						<MainLayout>
							<Switch>
								<Route exact path={'/'} component={Home} />
								<Route exact path={'/home'} component={Home} />
								
								<Route exact path={'/products'} component={ProductListContainer} />
								<Route exact path={'/products/:id'} component={ProductContainer} />
								<Route exact path={'/cart'} component={CartContainer} />
								<Route exact path={'/checkout'} component={CheckoutContainer} />
								<Route exact path={'/checkout/billing'} component={CheckoutContainer} />
								<Route exact path={'/checkout/confirm'} component={CheckoutContainer} />

								<Route exact path={'/faq'} component={Faq} />
								<Route exact path={'/contact'} component={Contact} />
								<Route exact path={'/terms'} component={Terms} />
								<Route component={NoMatch} />
							</Switch>
						</MainLayout>
					</BrowserRouter>
					<DevTools />
				</div>
			</Provider>
		)
	}
}

const rootElement = document.getElementById('root');
render(<App />, rootElement);
