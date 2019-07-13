import React, {Component} from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './MainLayout.scss';

export default class MainLayout extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}
