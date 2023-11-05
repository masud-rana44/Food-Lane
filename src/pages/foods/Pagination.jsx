export const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePrevPage = () => {
    if (currentPage > 1) onPageChange(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) onPageChange(currentPage + 1);
  };

  return (
    <div className="w-full text-center mt-10 space-x-4">
      <button
        disabled={currentPage === 1}
        onClick={handlePrevPage}
        className="p-2 bg-violet-200 disabled:opacity-50"
      >
        Prev
      </button>
      {currentPage}
      <button
        disabled={currentPage === totalPages}
        onClick={handleNextPage}
        className="p-2 bg-violet-200 disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
};
