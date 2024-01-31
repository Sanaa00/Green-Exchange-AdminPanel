import { useState } from 'react';
import PrimaryButton from './PrimaryButton';
import { useAddAdminMutation } from '../features/Admin';
function AddAdminForm() {
  const userId = JSON.parse(localStorage.getItem('admin'));
  const id = userId?.data?._id;
  const [addAdmin] = useAddAdminMutation();
  const [email, setEmail] = useState('');
  console.log('form id', id);
  const handleInput = (e) => {
    setEmail(e.target.value);
  };
  const handleFormData = () => {
    addAdmin({ email, id });
    console.log('form data', email);

    //add to route
  };
  return (
    <div className="flex flex-col text-gray-800">
      <div className="mt-5 flex flex-col">
        <label htmlFor="email">Email</label>
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

      {/* <div className="mt-5 flex flex-col">
        <label htmlFor="Password">Password</label>
        <input
          id="password"
          value={formData.password}
          onChange={(e) => handleInput(e)}
          required={true}
          name="password"
          className="mt-2 w-96 focus:outline-none border-2 py-2 rounded-sm p-2 hover:duration-300 duration-300 border-gray-400 hover:border-gray-500 focus:border-green "
          placeholder="password"
        />
      </div> */}
      <div className="mt-5">
        <PrimaryButton
          text="Add Admin"
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

export default AddAdminForm;
