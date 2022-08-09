interface paginationProps {
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  currentPage: number;
  totalPostsSize: number;
  postPerPage: number;
}

const Pagination: React.FC<paginationProps> = ({
  setCurrentPage,
  currentPage,
  postPerPage,
  totalPostsSize,
}) => {
  return (
    <>
      <div className="flex flex-col items-center">
        <span className="text-sm text-gray-700 dark:text-gray-400">
          Showing&nbsp;
          <span className="font-semibold text-gray-900 dark:text-white">
            {(currentPage - 1) * postPerPage + 1}
          </span>
          &nbsp;to&nbsp;
          <span className="font-semibold text-gray-900 dark:text-white">
            {currentPage * postPerPage <= totalPostsSize
              ? currentPage * postPerPage
              : totalPostsSize}
          </span>
          &nbsp;of&nbsp;
          <span className="font-semibold text-gray-900 dark:text-white">
            {totalPostsSize}
          </span>
          &nbsp;Categories
        </span>

        <div className="xs:mt-0 mt-2 inline-flex">
          <button
            onClick={() => setCurrentPage((prev) => prev - 1)}
            disabled={currentPage - 1 == 0}
            className="rounded-l bg-gray-800 py-2 px-4 text-sm font-medium text-white hover:bg-gray-900 disabled:bg-gray-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            Prev
          </button>
          <button
            onClick={() => setCurrentPage((prev) => prev + 1)}
            disabled={currentPage * postPerPage >= totalPostsSize}
            className="rounded-r border-0 border-l border-gray-700 bg-gray-800 py-2 px-4 text-sm font-medium text-white hover:bg-gray-900 disabled:bg-gray-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default Pagination;
