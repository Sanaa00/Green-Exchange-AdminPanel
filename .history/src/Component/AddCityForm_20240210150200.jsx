import { useAddCityMutation } from '../features/admin';
import PrimaryButton from './PrimaryButton';

import { useState } from 'react';
function AddCityForm() {
  const [addCity] = useAddCityMutation();
  const [city, setCity] = useState([
    { lang: 'english', name: 'sulaymany' },
    ,
    { lang: 'arabic', kurdi: '' },
    { lang: 'kurdi', arabic: '' },
  ]);

  const handleInput = (e) => {
    setCity({ ...city, [e.target.name]: e.target.value });
  };

  const handleFormData = () => {
    console.log('city', city);
    addCity(city);
  };
  return (
    <div className="flex flex-col text-gray-800">
      <div className="mt-5 flex flex-col">
        <label htmlFor="english">English Name</label>
        <input
          id="english"
          value={city.english}
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
          value={city.kurdi}
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
          value={city.arabic}
          onChange={(e) => handleInput(e)}
          required={true}
          name="arabic"
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
