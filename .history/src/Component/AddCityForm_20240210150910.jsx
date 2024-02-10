import { useAddCityMutation } from '../features/admin';
import PrimaryButton from './PrimaryButton';

import { useState } from 'react';
function AddCityForm() {
  const [addCity] = useAddCityMutation();
  const [city, setCity] = useState({
    english: '',
    arabic: '',
    kurdi: '',
  });
  // const [city, setCity] = useState([
  //   { lang: 'english', name: '' },
  //   { lang: 'arabic', name: '' },
  //   { lang: 'kurdi', name: '' },
  // ]);
  const handleInput = (e) => {
    const { name, value } = e.target;
    setCity((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // const handleInput = (e) => {
  //   setCity({ ...city, [e.target.name]: e.target.value });
  // };
  const handleFormData = () => {
    console.log('city', city);
    // Pass an array of objects to addCity
    addCity({
      name: [
        { lang: 'english', name: city.english },
        { lang: 'arabic', name: city.arabic },
        { lang: 'kurdi', name: city.kurdi },
      ],
    });
  };
  // const handleFormData = () => {
  //   console.log('city', city);
  //   addCity({ name: [city] });
  // };
  return (
    <div className="flex flex-col text-gray-800">
      <div className="mt-5 flex flex-col">
        <label htmlFor="english">English Name</label>
        <input
          id="english"
          value={city.english}
          onChange={handleInput}
          required={true}
          name="english"
          className="mt-2 w-96 focus:outline-none border-2 py-2 rounded-sm p-2 hover:duration-300 duration-300 border-gray-400 hover:border-gray-500 focus:border-green"
          placeholder="City"
        />
      </div>
      <div className="mt-5 flex flex-col">
        <label htmlFor="kurdi">Kurdish Name</label>
        <input
          id="kurdi"
          value={city.kurdi}
          onChange={handleInput}
          required={true}
          name="kurdi"
          className="mt-2 w-96 focus:outline-none border-2 py-2 rounded-sm p-2 hover:duration-300 duration-300 border-gray-400 hover:border-gray-500 focus:border-green"
          placeholder="City"
        />
      </div>
      <div className="mt-5 flex flex-col">
        <label htmlFor="english">Arabic Name</label>
        <input
          id={city[1].name}
          value={city[1].name}
          onChange={(e) => handleInput(e)}
          required={true}
          name={city[1].name}
          className="mt-2 w-96 focus:outline-none border-2 py-2 rounded-sm p-2 hover:duration-300 duration-300 border-gray-400 hover:border-gray-500 focus:border-green"
          placeholder="city"
        />
      </div>
      <div className="mt-5">
        <PrimaryButton
          text="Add City"
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

export default AddCityForm;
