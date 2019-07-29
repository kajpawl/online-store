import React from 'react';
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
      </div>
    </div>
  </aside>
);

export default SortingPanel;