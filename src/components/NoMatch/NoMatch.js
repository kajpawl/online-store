import React from 'react';
import { NavLink } from 'react-router-dom';
import './NoMatch.scss';

const NoMatch = props => {
  return (
    <main className="noMatch">
      <div className="pageWrapper">
        <h2><b>Oh no!</b><span> - we couldn't find your page</span></h2>
        <div className="sadnessWrapper">
          <img className="meepleLogo" src={require("../../images/sorry.png")} alt="Page not found image" />
          <img className="textLogo" src={require("../../images/logo-text.png")} alt="Page not found - brand logo" />
        </div>
      </div>
    </main>
  )
}

export default NoMatch;
