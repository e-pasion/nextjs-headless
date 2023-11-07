import ReactPaginate from "react-paginate";
import Image from 'next/image';
function Pagination({ currentPage,handlePageChange,pageCount }) {
  return (
    <ReactPaginate
        previousLabel={<i className="fi-rs-arrow-small-left"></i>}
        nextLabel={<i className="fi-rs-arrow-small-right"></i>}
        breakLabel={"..."}
        containerClassName={"pagination justify-content-center"}
        activeClassName={"active"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        nextLinkClassName={"page-link"}
        previousLinkClassName={"page-link"}
        previousClassName={"page-item"}
        nextClassName={"page-item"}
        disabledClassName={"cursor-not-allowed' text-gray-400"}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link dot"}
        pageCount={pageCount}
        marginPagesDisplayed={1}
        // pageRangeDisplayed={1}
        disableInitialCallback={true}
        onPageChange={handlePageChange}
        forcePage={currentPage}
      />
  )
}
export default Pagination