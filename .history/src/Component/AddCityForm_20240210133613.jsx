import { useAddCityMutation } from '../features/admin';
import PrimaryButton from './PrimaryButton';
// import { useAddAdminMutation } from '../features/admin';
import { useState } from 'react';
function AddCityForm() {
  //   const userId = JSON.parse(localStorage.getItem('admin'));
  //   const id = userId?.data?._id;
  //   const [addAdmin] = useAddAdminMutation();
  const [addCity] = useAddCityMutation();
  const [city, setCity] = useState({
    english: '',
    kurdi: '',
    arabic: '',
  });

  const handleInput = (e) => {
    //     setCity(e.target.value);
    setCity({ ...city, [e.target.name]: e.target.value });
  };
  //   };
  const handleFormData = () => {
    addCity(city);
    console.log(city);
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
