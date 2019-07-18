import React from 'react';
import './PaginationPanel.scss';

const PaginationPanel = props => (
  <div className="paginationPanel">
    <ul>
      <li className="paginationButton" onClick={() => props.changePageNumber(props.currentPage - 1)}>Prev</li>
      {props.renderPaginationButtons}
      <li className="paginationButton" onClick={() => props.changePageNumber(props.currentPage + 1)}>Next</li>
    </ul>
  </div>
);

export default PaginationPanel;