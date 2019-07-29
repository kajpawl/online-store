import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './SortingPanel.scss';

const SortingPanel = props => (
  <aside className="sortingPanel">
    <div className="col-12">
      <div className="wrapper">
        <div className="section sortingButtons">
          <p>Sort by:</p>
          <button onClick={() => props.sortProducts("fromAToZ")}>Name: A-Z</button>
          <button onClick={() => props.sortProducts("fromZToA")}>Name: Z-A</button>
          <button onClick={() => props.sortProducts("lowToHigh")}>Price: Low to high</button>
          <button onClick={() => props.sortProducts("highToLow")}>Price: High to low</button>
        </div>
        <div className="section filterButtons">
          <p>Categories:</p>
          <button onClick={() => props.getCategory("Abstract")}>Abstract</button>
          <button onClick={() => props.getCategory("Family")}>Family</button>
          <button onClick={() => props.getCategory("Party")}>Party</button>
          <button onClick={() => props.getCategory("Strategy")}>Strategy</button>
          <button onClick={() => props.getCategory("Thematic")}>Thematic</button>
          <button className="backgroundBtn" onClick={() => props.getCategory("All")}>
            <FontAwesomeIcon icon="search" className="searchIcon" />
            See all products
          </button>
        </div>
      </div>
    </div>
  </aside>
);

export default SortingPanel;