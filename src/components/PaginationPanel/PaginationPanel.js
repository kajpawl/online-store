import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './PaginationPanel.scss';

const PaginationPanel = props => {
  const { currentPage, pageScrollUp, changePageNumber, renderPaginationButtons } = props;
  // Render pagination buttons:
  return (  
    <div className="paginationPanel">
      <ul>

        {/*  Render "previous" if you are not on the first page */}
        {currentPage !== 1 ?
          <li className="paginationButton" onClick={() => {pageScrollUp(); changePageNumber(currentPage - 1)}}>
            <FontAwesomeIcon icon="arrow-left" />
          </li>
        :
          ''
        }

        {/*  Render buttons for each page */}
        {renderPaginationButtons}

        {/*  Render "next" if you are not on the last page */}
        {currentPage !== renderPaginationButtons.length ?
          <li className="paginationButton" onClick={() => {pageScrollUp(); changePageNumber(currentPage + 1)}}>
            <FontAwesomeIcon icon="arrow-right" />
          </li>
        :
          ''
        }
      </ul>
    </div>
  );
};

export default PaginationPanel;