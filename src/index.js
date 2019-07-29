import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/index';

import DevTools from './DevTools';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import './App.scss';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faSpinner, faAngleDoubleLeft, faAngleDoubleRight, faShoppingCart, faCartArrowDown, faCheckCircle, faSearch, faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'

import MainLayout from './components/MainLayout/MainLayout';
import ProductListContainer from './containers/ProductListContainer';
import ProductContainer from './containers/ProductContainer';
import CartContainer from './containers/CartContainer';
import CheckoutContainer from './containers/CheckoutContainer';
import HomeContainer from './containers/HomeContainer';

import Faq from './components/Faq/Faq';
import Contact from './components/Contact/Contact';
import Terms from './components/Terms/Terms';
import NoMatch from './components/NoMatch/NoMatch';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

library.add(faSpinner, faAngleDoubleLeft, faAngleDoubleRight, faShoppingCart, faCartArrowDown, faCheckCircle, faSearch, faArrowLeft, faArrowRight);

class App extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<div>
					<BrowserRouter>
						<ScrollToTop>
							<MainLayout>
								<Switch>
									<Route exact path={'/'} component={HomeContainer} />			
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
						</ScrollToTop>
					</BrowserRouter>
					<DevTools />
				</div>
			</Provider>
		)
	}
}

const rootElement = document.getElementById('root');
render(<App />, rootElement);
