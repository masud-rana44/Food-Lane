export const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePrevPage = () => {
    if (currentPage > 1) onPageChange(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) onPageChange(currentPage + 1);
  };

  return (
    <div className="w-full text-center mt-10 space-x-4">
      <button onClick={handlePrevPage} className="p-2 bg-violet-200">
        Prev
      </button>
      {currentPage}
      <button onClick={handleNextPage} className="p-2 bg-violet-200">
        Next
      </button>
    </div>
  );
};
