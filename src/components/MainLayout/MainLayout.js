import React, {Component} from 'react';
import HeaderContainer from '../../containers/HeaderContainer';
import Footer from '../Footer/Footer';
import './MainLayout.scss';

export default class MainLayout extends Component {
  render() {
    return (
      <main>
        <HeaderContainer />
        {this.props.children}
        <Footer />
      </main>
    );
  }
}
