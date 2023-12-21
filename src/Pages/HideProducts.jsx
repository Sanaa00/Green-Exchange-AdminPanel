import { MdOutlineHideImage, MdOutlineImage } from 'react-icons/md';
import { UnHideProducts } from '../../utility';
import Pagination from '../Component/Pagination';

function HideProducts() {
  return (
    <div className="p-5">
      <p className="font-semibold text-lg text-green">Products</p>
      <div className="grid grid-cols-3 gap-5 mt-5 text-gray-800">
        {UnHideProducts.map((item) => {
          return (
            <div
              key={item.id}
              className="flex flex-col bg-neutral-100 rounded-sm"
            >
              <div className="flex justify-between items-center">
                <p className="p-2 ">{item.name}</p>
                <button>
                  <MdOutlineHideImage className="w-6 h-6 m-2" />
                </button>
              </div>

              <img src={item.url} className="w-full h-60 object-cover" />
            </div>
          );
        })}
      </div>
      <Pagination />
      {/* <div className="mt-5">
        {' '}
        <ReactPaginate
          className="flex items-center  "
          breakLabel="..."
          nextLabel={<LuArrowRightSquare className="w-6 h-6 m-2" />}
          activeClassName="text-green"
          pageClassName="px-2 text-lg text-gray-800 hover:text-gray-500"
          // onPageChange={
          //   (e) => {
          //   setPage(e.selected + 1);
          //   window.scrollTo(0, 0);
          // }}
          pageRangeDisplayed={5}
          pageCount={1}
          previousLabel={<LuArrowLeftSquare className="w-6 h-6 m-2" />}
          renderOnZeroPageCount={null}
        />
      </div> */}
    </div>
  );
}

export default HideProducts;
