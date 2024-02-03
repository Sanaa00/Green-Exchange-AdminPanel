import { MdOutlineHideImage } from 'react-icons/md';
import { UnHideProducts } from '../../utility';
import Pagination from '../Component/Pagination';
import { useGetBlockDataQuery } from '../features/Admin';
import { useState } from 'react';
import Empty from '../assets/images/Empty.svg';
function HideProducts() {
  const userId = JSON.parse(localStorage.getItem('admin'));
  const id = userId?.data?._id;
  const [page, setPage] = useState(1);

  const { data: blockData } = useGetBlockDataQuery({
    search: '',
    page: page,
    category: '',
    id: id,
  });
  console.log('block', blockData);
  return (
    <div className="p-5">
      <p className="font-semibold text-lg text-green">Hide Products</p>
      {blockData?.allLength < 1 ? (
        <div className="w-full h-screen flex justify-center items-center">
          {' '}
          <img src={Empty} alt="empty" className="w-96 h-96" />
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-5 mt-5 text-gray-800">
          {blockData.map((item) => {
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
      )}{' '}
      <Pagination length={blockData?.allLength} setPage={setPage} />
    </div>
  );
}

export default HideProducts;
