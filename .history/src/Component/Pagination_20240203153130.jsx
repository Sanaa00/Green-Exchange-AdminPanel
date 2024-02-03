import { LuArrowLeftSquare, LuArrowRightSquare } from 'react-icons/lu';
import ReactPaginate from 'react-paginate';

// eslint-disable-next-line react/prop-types
function Pagination({ length, setPage }) {
  console.log('length', length);
  return (
    <div className="mt-5">
      {' '}
      <ReactPaginate
        className="flex items-center  "
        breakLabel="..."
        nextLabel={<LuArrowRightSquare className="w-6 h-6 m-2" />}
        activeClassName="text-green"
        pageClassName="px-2 text-lg text-gray-800 hover:text-gray-500"
        onPageChange={(e) => {
          setPage(e.selected + 1);
          window.scrollTo(0, 0);
        }}
        pageRangeDisplayed={5}
        pageCount={length && Math?.ceil(length / 9)}
        previousLabel={<LuArrowLeftSquare className="w-6 h-6 m-2" />}
        renderOnZeroPageCount={null}
      />
    </div>
  );
}

export default Pagination;
