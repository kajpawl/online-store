import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './SortingPanel.scss';

const SortingPanel = props => {
  const { sortProducts, getCategory } = props;
  return (
    <aside className="sortingPanel" id="sortingPanel">
      <div className="col-12">
        <div className="wrapper">
          <div className="section sortingButtons">
            <p>Sort by:</p>
            <button onClick={() => sortProducts("fromAToZ")}>Name: A-Z</button>
            <button onClick={() => sortProducts("fromZToA")}>Name: Z-A</button>
            <button onClick={() => sortProducts("lowToHigh")}>Price: Low to high</button>
            <button onClick={() => sortProducts("highToLow")}>Price: High to low</button>
          </div>
          <div className="section filterButtons">
            <p>Categories:</p>
            <button onClick={() => getCategory("Abstract")}>Abstract</button>
            <button onClick={() => getCategory("Family")}>Family</button>
            <button onClick={() => getCategory("Party")}>Party</button>
            <button onClick={() => getCategory("Strategy")}>Strategy</button>
            <button onClick={() => getCategory("Thematic")}>Thematic</button>
            <button className="backgroundBtn" onClick={() => getCategory("All")}>
              <FontAwesomeIcon icon="search" className="searchIcon" />
              See all products
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default SortingPanel;