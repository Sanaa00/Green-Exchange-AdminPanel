import { useEffect, useState } from 'react';
import PrimaryButton from './PrimaryButton';
import {
  useAddSubCategoryMutation,
  useGetCategorySubCategoryQuery,
} from '../features/admin';

function AddSubCategoryForm() {
  const [cat, setCat] = useState([]);
  console.log(cat, 'here');
  const [addSubCategory] = useAddSubCategoryMutation();
  const { data: category } = useGetCategorySubCategoryQuery();
  console.log(category);
  const [subcategory, setSubCategory] = useState({
    categoryId: '',
    english: '',
    kurdi: '',
    arabic: '',
  });
  const handleInput = (e) => {
    //     setCity(e.target.value);
    setSubCategory({ ...subcategory, [e.target.name]: e.target.value });
  };
  //   };
  const handleFormData = () => {
    addSubCategory(subcategory);
    console.log(subcategory);
  };
  useEffect(() => {
    setCat([]);
    category?.data?.map((category) => {
      category.name.map((name) => {
        if (name.lang == 'english') {
          setCat((prev) => [
            ...prev,
            {
              name: name.name,
              _id: category._id,
            },
          ]);
        }
      });
    });
  }, [category?.data]);
  return (
    <div className="flex flex-col text-gray-800">
      <div className="mt-5 flex flex-col">
        <label htmlFor="categoryId">Category</label>
        <select
          // disabled={disable}
          onChange={handleInput}
          id="categoryId"
          name="categoryId"
          // type={type}
          required={require}
          value={value}
          className={`duration-500 hover:duration-500 focus:duration-500 pl-3 border-2 rounded-sm focus:outline-none outline-none 
          w-full text-neutral-600 sm:text-sm focus:ring-primary-600 focus:border-primary-600 block px-1 py-2 ${
            !disable
              ? 'hover:border-gray-600 focus:border-green border-gray-400 '
              : 'bg-neutral-300 animate-pulse'
          } ${language != 'english' && 'text-right'}`}
        >
          <option value="">{select}</option>
          {options &&
            options.map((option) => (
              <option key={option?._id} value={option?._id}>
                {option?.name}
              </option>
            ))}
        </select>
        {/* <select
          name="Parentcategory"
          type="text"
          label={'Category'}
          required={true}
          data={subcategory}
          // se={subcategory}
          value={subcategory}
          disabled={category ? false : true}
          // options={cat}
          // select={'Select category'}
        />{' '}
        <option value="">{cat}</option> */}
        {/* <input
          id="english"
          value={subcategory.english}
          onChange={(e) => handleInput(e)}
          required={true}
          name="english"
          className="mt-2 w-96 focus:outline-none border-2 py-2 rounded-sm p-2 hover:duration-300 duration-300 border-gray-400 hover:border-gray-500 focus:border-green"
          placeholder="city"
        /> */}
      </div>
      <div className="mt-5 flex flex-col">
        <label htmlFor="english">English Name</label>
        <input
          id="english"
          value={subcategory.english}
          onChange={(e) => handleInput(e)}
          required={true}
          name="english"
          className="mt-2 w-96 focus:outline-none border-2 py-2 rounded-sm p-2 hover:duration-300 duration-300 border-gray-400 hover:border-gray-500 focus:border-green"
          placeholder="city"
        />
      </div>
      <div className="mt-5 flex flex-col">
        <label htmlFor="kurdi">Kurdish Name</label>
        <input
          id="kurdi"
          value={subcategory.kurdi}
          onChange={(e) => handleInput(e)}
          required={true}
          name="kurdi"
          className="mt-2 w-96 focus:outline-none border-2 py-2 rounded-sm p-2 hover:duration-300 duration-300 border-gray-400 hover:border-gray-500 focus:border-green"
          placeholder="city"
        />
      </div>
      <div className="mt-5 flex flex-col">
        <label htmlFor="english">Arabic Name</label>
        <input
          id="arabic"
          value={subcategory.arabic}
          onChange={(e) => handleInput(e)}
          required={true}
          name="arabic"
          className="mt-2 w-96 focus:outline-none border-2 py-2 rounded-sm p-2 hover:duration-300 duration-300 border-gray-400 hover:border-gray-500 focus:border-green"
          placeholder="city"
        />
      </div>
      <div className="mt-5">
        <PrimaryButton
          text="Add Sub Category"
          color={'green'}
          widthbutton={'24rem'}
          textColor="neutral-100"
          align={'center'}
          onClick={() => handleFormData()}
        />
      </div>
    </div>
  );
}

export default AddSubCategoryForm;
