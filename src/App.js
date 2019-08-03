import React from 'react';
import { Provider } from 'react-redux';
import store from './store/index';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faSpinner, faAngleDoubleLeft, faAngleDoubleRight, faShoppingCart, faCartArrowDown, faCheckCircle, faSearch, faEnvelope, faArrowLeft, faArrowRight, faSort } from '@fortawesome/free-solid-svg-icons'

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

library.add(faSpinner, faAngleDoubleLeft, faAngleDoubleRight, faShoppingCart, faCartArrowDown, faCheckCircle, faSearch, faEnvelope, faArrowLeft, faArrowRight, faSort);

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <BrowserRouter>
            <ScrollToTop>
              <MainLayout>
                <Route
                  render={({ location }) => (
                  <div className="fadeWrapper">
                    <TransitionGroup>
                      <CSSTransition
                        key={location.key}
                        classNames="fade"
                        timeout={200}
                      >
                        <Switch location={location}>
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
                      </CSSTransition>
                    </TransitionGroup>
                  </div>
                )}/>
              </MainLayout>
            </ScrollToTop>
          </BrowserRouter>
        </div>
      </Provider>
    )
  }
}

export default App;
