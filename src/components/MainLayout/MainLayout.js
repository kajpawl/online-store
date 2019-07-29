import React, {Component} from 'react';
import HeaderContainer from '../../containers/HeaderContainer';
import Footer from '../Footer/Footer';
import './MainLayout.scss';

export default class MainLayout extends Component {
  render() {
    return (
      <div>
        <HeaderContainer />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}
