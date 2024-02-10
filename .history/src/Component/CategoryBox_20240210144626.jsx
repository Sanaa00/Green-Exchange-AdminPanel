/* eslint-disable react/prop-types */

function CategoryBox({ categorys }) {
  return (
    <div className="grid grid-cols-3 mt-2 ">
      {categorys?.map((item) => {
        return (
          <div
            key={item._id}
            className="mr-5 bg-green bg-opacity-50 p-4 flex justify-between items-center rounded-sm mt-2 text-lg text-neutral-50 font-semibold"
          >
            <span>{item?.name[0]?.name}</span>{' '}
            <span>{item?.totalProducts}</span>
          </div>
        );
      })}
    </div>
  );
}

export default CategoryBox;
