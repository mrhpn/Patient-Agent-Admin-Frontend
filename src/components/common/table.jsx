import React, { useState } from "react";
import TableDescription from "./tableDescription";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";
import Pagination from "./pagination";
import { paginate } from "../../util/paginate";

const pageSize = 5;

const Table = ({
  description,
  itemTotalCount,
  tableHeaders,
  items,
  popupItems,
}) => {
  const [currentPage, setCurrentPage] = useState(1);

  function handlePageChange(page) {
    setCurrentPage(page);
  }

  const registerations = paginate(items, currentPage, pageSize);

  return (
    <React.Fragment>
      <TableDescription description={description} totalCount={itemTotalCount} />

      <div className="bg-white block w-full md:table">
        <TableHeader items={tableHeaders} />
        <TableBody items={registerations} popupItems={popupItems} />
      </div>

      {/* Footer & Pagination */}
      <div className="bg-white block flex px-6 py-4 justify-between rounded-bl-lg rounded-br-lg">
        <div className="sm:flex-1 sm:flex sm:items-center sm:justify-between">
          <div>
            <p className="text-sm leading-5 text-gray-700 mb-2 md:mb-0">
              Showing
              <span className="font-medium">
                {" "}
                {currentPage * pageSize - 4}{" "}
              </span>
              to
              <span className="font-medium"> {currentPage * pageSize} </span>
              of
              <span className="font-medium"> {items.length} </span>
              results
            </p>
          </div>
          <Pagination
            itemsCount={items.length}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
      {/* end Footer & Pagination */}
    </React.Fragment>
  );
};

export default Table;