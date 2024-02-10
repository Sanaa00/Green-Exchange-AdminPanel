import PrimaryButton from './PrimaryButton';
import { useAddAdminMutation } from '../features/admin';
import { useState } from 'react';
function AddCityForm() {
  const userId = JSON.parse(localStorage.getItem('admin'));
  const id = userId?.data?._id;
  const [addAdmin] = useAddAdminMutation();
  const [email, setEmail] = useState('');

  const handleInput = (e) => {
    setEmail(e.target.value);
  };
  const handleFormData = () => {
    addAdmin({ email, id });
  };
  return (
    <div className="flex flex-col text-gray-800">
      <div className="mt-5 flex flex-col">
        <label htmlFor="email">English</label>
        <input
          id="email"
          value={email.email}
          onChange={(e) => handleInput(e)}
          required={true}
          name="email"
          className="mt-2 w-96 focus:outline-none border-2 py-2 rounded-sm p-2 hover:duration-300 duration-300 border-gray-400 hover:border-gray-500 focus:border-green"
          placeholder="email"
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
