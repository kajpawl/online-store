import React from 'react';
import './Spinner.scss';

const Spinner = props => (
  <div className="spinner">
    <img className="spinnerImage" src={require(`../../images/spinner.svg`)} alt="Spinner" />
  </div>
);

export default Spinner;