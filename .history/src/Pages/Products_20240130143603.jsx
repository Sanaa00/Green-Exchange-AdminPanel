import { MdBlock } from 'react-icons/md';
import Pagination from '../Component/Pagination';
import { useGetProductsQuery } from '../features/products';
import { useState } from 'react';
import Empty from '../assets/images/Empty.svg';
import Loading from '../Component/Loading';
import { TiDeleteOutline } from 'react-icons/ti';
import { IoCloseCircleOutline } from 'react-icons/io5';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { useAddDonateMutation } from '../features/Admin';
function Products() {
  const [addDonate] = useAddDonateMutation();
  const [page, setPage] = useState(1);
  const {
    data: allproducts,
    isLoading,
    isError,
  } = useGetProductsQuery({
    search: '',
    page: page,
    category: '',
  });
  console.log('products', allproducts);
  const deleteHandler = (id) => {
    // addDonate(id);
    console.log(id);
  };
  if (isError) {
    return (
      <div className="h-screen flex justify-center items-center">
        <p>Somthing went wrong</p>
      </div>
    );
  }
  if (isLoading) {
    return (
      <div className="h-screen flex justify-center items-center">
        <Loading height={300} />
      </div>
    );
  }
  return (
    <div className="p-5">
      <p className="font-semibold text-lg text-green">Products</p>
      {allproducts?.allLength < 1 ? (
        <img src={Empty} alt="empty" />
      ) : (
        <div className="grid grid-cols-3 gap-5 mt-5 text-gray-800 ">
          {allproducts?.data?.map((item) => {
            return (
              <div
                key={item._id}
                className="flex flex-col bg-neutral-100 rounded-sm h-fit justify-start items-start"
              >
                <div className="flex justify-between items-center w-full">
                  <p className="p-2 ">{item.name}</p>
                  <div className="flex items-end justify-center">
                    {' '}
                    {/* <button>
                      <MdOutlineImage className="w-6 h-6 m-2" />
                    </button> */}
                    <button className="mr-1">
                      <MdBlock className="w-6 h-6 " />
                    </button>{' '}
                    <button onClick={() => deleteHandler(item._id)}>
                      <AiOutlineCloseCircle className="w-6 h-6 mr-2" />
                    </button>
                  </div>
                </div>

                <img
                  src={item.images[0]}
                  className="w-full h-60 object-cover"
                />
              </div>
            );
          })}
        </div>
      )}

      <Pagination length={allproducts?.allLength} setPage={setPage} />
    </div>
  );
}

export default Products;
