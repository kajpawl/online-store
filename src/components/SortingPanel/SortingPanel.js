import React from 'react';
import './SortingPanel.scss';

const SortingPanel = props => (
  <div>
    <button onClick={() => props.sortProducts("fromAToZ")}>Name A-Z</button>
    <button onClick={() => props.sortProducts("fromZToA")}>Name Z-A</button>
    <button onClick={() => props.sortProducts("lowToHigh")}>Price Low to high</button>
    <button onClick={() => props.sortProducts("highToLow")}>Price high to low</button>
  </div>
);

export default SortingPanel;