// Format the balance to look like 1,000.00
export const formatBalance = (balance: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "decimal",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(balance);
};

// Pagination Component
export const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}) => (
  <div className="flex items-center justify-center mt-4 space-x-2">
    <button
      disabled={currentPage <= 1}
      onClick={() => onPageChange(currentPage - 1)}
      className="px-3 py-1 border rounded-md disabled:opacity-50"
    >
      Prev
    </button>
    <span className="px-3 py-1">
      Page {currentPage} of {totalPages}
    </span>
    <button
      disabled={currentPage >= totalPages}
      onClick={() => onPageChange(currentPage + 1)}
      className="px-3 py-1 border rounded-md disabled:opacity-50"
    >
      Next
    </button>
  </div>
);
