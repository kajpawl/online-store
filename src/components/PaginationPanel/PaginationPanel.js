import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './PaginationPanel.scss';

const PaginationPanel = props => (
  <div className="paginationPanel">
    <ul>
      <li className="paginationButton" onClick={() => props.changePageNumber(props.currentPage - 1)}>
        <FontAwesomeIcon icon="arrow-left" />
      </li>
      {props.renderPaginationButtons}
      <li className="paginationButton" onClick={() => props.changePageNumber(props.currentPage + 1)}>
        <FontAwesomeIcon icon="arrow-right" />
      </li>
    </ul>
  </div>
);

export default PaginationPanel;