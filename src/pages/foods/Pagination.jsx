import { GrFormPrevious, GrFormNext } from "react-icons/gr";

export const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePrevPage = () => {
    if (currentPage > 1) onPageChange(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) onPageChange(currentPage + 1);
  };

  const btns = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="w-full flex items-center justify-center mt-10 space-x-4">
      <button
        disabled={currentPage === 1}
        onClick={handlePrevPage}
        className="w-8 h-8 flex items-center justify-center rounded-full bg-violet-200 disabled:opacity-50"
      >
        <GrFormPrevious />
      </button>

      {btns.map((btn) => (
        <button
          key={btn}
          onClick={() => onPageChange(btn)}
          className={`w-8 h-8 flex items-center justify-center rounded-full border  ${
            currentPage === btn && "border border-primary text-primary"
          }`}
        >
          {btn}
        </button>
      ))}

      <button
        disabled={currentPage === totalPages}
        onClick={handleNextPage}
        className="w-8 h-8 flex items-center justify-center rounded-full bg-violet-200 disabled:opacity-50"
      >
        <GrFormNext />
      </button>
    </div>
  );
};
