import { MdOutlineImage } from 'react-icons/md';
import Pagination from '../Component/Pagination';
import { useGetProductsQuery } from '../features/products';
import { useState } from 'react';
function Products() {
  const [page, setPage] = useState(1);
  const { data: allproducts } = useGetProductsQuery({
    search: '',
    page: page,
    category: '',
  });
  console.log('products', allproducts);
  return (
    <div className="p-5">
      <p className="font-semibold text-lg text-green">Products</p>
      <div className="grid grid-cols-3 gap-5 mt-5 text-gray-800 ">
        {allproducts?.data?.map((item) => {
          return (
            <div
              key={item.id}
              className="flex flex-col bg-neutral-100 rounded-sm h-fit justify-start items-start"
            >
              <div className="flex justify-between items-center w-full">
                <p className="p-2 ">{item.name}</p>
                <button>
                  <MdOutlineImage className="w-6 h-6 m-2" />
                </button>
              </div>

              <img src={item.images[0]} className="w-full h-60 object-cover" />
            </div>
          );
        })}
      </div>
      <Pagination length={allproducts?.allLength} setPage={setPage} />
    </div>
  );
}

export default Products;
