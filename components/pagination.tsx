import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";

const Pagination = ({ limit, onPagination }: { limit: number, onPagination:any }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const loadMoreProducts = () => {
    setCurrentPage((prev) => prev + 1);
    onPagination()
  };
  return (
    <button
      className="flex items-center mt-8 bg-blue-500 text-white px-4 py-2 rounded-full font-semibold hover:bg-blue-600 transition-colors disabled:bg-gray-400"
      onClick={loadMoreProducts}
      disabled={currentPage === limit}
    >
      <FaPlus className="mr-2" />
      Cargar más
    </button>
  );
};

export default Pagination;
