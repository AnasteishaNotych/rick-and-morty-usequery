import ReactPaginateModule from "react-paginate";
import css from "./Pagination.module.css";
const ReactPaginate =
  (ReactPaginateModule as any).default ?? ReactPaginateModule;

interface PaginationProps {
  pageCount: number;
  onPageSelect: (pageNumber: number) => void;
  currentPage: number;
}

function Pagination({ pageCount, onPageSelect, currentPage }: PaginationProps) {
  return (
    <div>
      <ReactPaginate
        pageCount={pageCount}
        onPageChange={(event: { selected: number }) =>
          onPageSelect(event.selected + 1)
        }
        pageRangeDisplayed={2}
        marginPagesDisplayed={1}
        breakLabel={"..."}
        containerClassName={css.pagination}
        activeClassName={css.active}
        nextLabel="→"
        previousLabel="←"
        disabledClassName={css.disabled}
        forcePage={currentPage - 1}
      />
    </div>
  );
}

export default Pagination;
