import React from 'react';

function Pagination({ pagination, onPageChange }) {
  const { _limit, _page, _totalRows } = pagination;
  const handlePageChange = (newPage) => {
    if (onPageChange) {
      onPageChange(newPage);
    }
  };

  const totalPages = Math.ceil(_totalRows / _limit);

  return (
    <div className='pagination'>
      <button className=' mr-3' disabled={_page <= 1} onClick={() => handlePageChange(_page - 1)}>
        Previous
      </button>

      <button disabled={_page >= totalPages} onClick={() => handlePageChange(_page + 1)}>
        Next
      </button>
    </div>
  );
}

export default Pagination;
