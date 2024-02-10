import { useState } from 'react';
import PrimaryButton from './PrimaryButton';
import { useAddSubCategoryMutation } from '../features/admin';

function AddCategoryForm() {
  const [addSubCategory] = useAddSubCategoryMutation();
  const [category, setCategory] = useState({
    english: '',
    kurdi: '',
    arabic: '',
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setCategory((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFormData = () => {
    const categoryData = [
      { lang: 'english', name: category.english },
      { lang: 'arabic', name: category.arabic },
      { lang: 'kurdi', name: category.kurdi },
    ];
    console.log('city', {
      name: [
        { lang: 'english', name: category.english },
        { lang: 'arabic', name: category.arabic },
        { lang: 'kurdi', name: category.kurdi },
      ],
    });
    addSubCategory({ name: categoryData });
  };
  return (
    <div className="flex flex-col text-gray-800">
      <div className="mt-2 flex flex-col">
        <label htmlFor="english">English Name</label>
        <input
          id="english"
          value={category.english}
          onChange={(e) => handleInput(e)}
          required={true}
          name="english"
          className="mt-2 w-96 focus:outline-none border-2 py-2 rounded-sm p-2 hover:duration-300 duration-300 border-gray-400 hover:border-gray-500 focus:border-green"
          placeholder="category"
        />
      </div>
      <div className="mt-5 flex flex-col">
        <label htmlFor="kurdi">Kurdish Name</label>
        <input
          id="kurdi"
          value={category.kurdi}
          onChange={(e) => handleInput(e)}
          required={true}
          name="kurdi"
          className="mt-2 w-96 focus:outline-none border-2 py-2 rounded-sm p-2 hover:duration-300 duration-300 border-gray-400 hover:border-gray-500 focus:border-green"
          placeholder="category"
        />
      </div>
      <div className="mt-5 flex flex-col">
        <label htmlFor="english">Arabic Name</label>
        <input
          id="arabic"
          value={category.arabic}
          onChange={(e) => handleInput(e)}
          required={true}
          name="arabic"
          className="mt-2 w-96 focus:outline-none border-2 py-2 rounded-sm p-2 hover:duration-300 duration-300 border-gray-400 hover:border-gray-500 focus:border-green"
          placeholder="category"
        />
      </div>
      <div className="mt-5">
        <PrimaryButton
          text="Add Category"
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

export default AddCategoryForm;
