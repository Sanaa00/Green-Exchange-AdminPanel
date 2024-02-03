import { MdOutlineHideImage } from 'react-icons/md';
import { UnHideProducts } from '../../utility';
import Pagination from '../Component/Pagination';
import { useGetBlockDataQuery } from '../features/Admin';
import { useState } from 'react';

function HideProducts() {
  const [page, setPage] = useState(1);

  const { data: getBlockData } = useGetBlockDataQuery({
    search: '',
    page: page,
    category: '',
  });
  console.log('block', getBlockData);
  return (
    <div className="p-5">
      <p className="font-semibold text-lg text-green">Hide Products</p>
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
                  <MdOutlineHideImage className="w-6 h-6 m-2 " />
                </button>
              </div>

              <img src={item.url} className="w-full h-60 object-cover" />
            </div>
          );
        })}
      </div>
      <Pagination />
    </div>
  );
}

export default HideProducts;
