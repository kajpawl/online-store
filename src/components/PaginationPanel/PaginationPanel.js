import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './PaginationPanel.scss';

const PaginationPanel = props => (
  <div className="paginationPanel">
    <ul>
      {props.currentPage !== 1 ?
        <li className="paginationButton" onClick={() => {props.pageScrollUp(); props.changePageNumber(props.currentPage - 1)}}>
          <FontAwesomeIcon icon="arrow-left" />
        </li>
      :
        ''
      }
      {props.renderPaginationButtons}
      {props.currentPage !== props.renderPaginationButtons.length ?
        <li className="paginationButton" onClick={() => {props.pageScrollUp(); props.changePageNumber(props.currentPage + 1)}}>
          <FontAwesomeIcon icon="arrow-right" />
        </li>
      :
        ''
      }
    </ul>
  </div>
);

export default PaginationPanel;