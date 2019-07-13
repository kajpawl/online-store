import React, { Component } from 'react';
import store from '../../store/index';
import './Home.scss';

export default class Home extends Component {
  render() {
    return (
      <div>
        <div>
          SortingPanel
        </div>
        <div>
          ProductList
          <ul>
            <li>poop</li>
          </ul>
        </div>
      </div>
    )
  }
}
