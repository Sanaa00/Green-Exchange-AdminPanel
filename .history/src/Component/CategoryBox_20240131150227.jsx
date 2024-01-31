/* eslint-disable react/prop-types */
import { useGetCategoryQuery } from '../features/category';
import Loading from './Loading';
function CategoryBox({ categorys }) {
  const { data: allCategory, isError, isLoading } = useGetCategoryQuery();
  console.log('data', categorys);
  if (isError) {
    return (
      <div className="h-screen flex justify-center items-center">
        <p>Somthing went wrong</p>
      </div>
    );
  }
  return (
    <div className="grid grid-cols-3 mt-2 ">
      {categorys?.map((item) => {
        return (
          <div
            key={item._id}
            className="mr-5 bg-green bg-opacity-50 p-4 flex justify-between items-center rounded-sm mt-2 text-lg text-neutral-50 font-semibold"
          >
            <span>
              {isLoading ? <Loading height={100} /> : item.name[0].name}
            </span>{' '}
            <span>{item.totalProducts}</span>
          </div>
        );
      })}
    </div>
  );
}

export default CategoryBox;
