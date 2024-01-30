import { useEffect, useState } from 'react';
import PrimaryButton from '../Component/PrimaryButton';
import { useLoginMutation } from '../features/auth';
import { Navigate } from 'react-router-dom';

function Login() {
  const [login, { data, isError, isLoading, isSuccess }] = useLoginMutation();
  // console.log(data?.data?.data?.data);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  console.log('login', data?.data, isError, isLoading, isSuccess);
  const handleInput = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleFormData = () => {
    console.log(formData);
    login(formData);
    //add to route
  };

  // useEffect(() => {
  //   localStorage.setItem('admin', data?.data?.data);
  // }, [data]);
  useEffect(() => {
    if (!isError && !isLoading && data && data?.status == 'success') {
      //  data?.status == 'success'
      //  ?
      JSON.stringify(localStorage.setItem('admin', JSON.stringify(data?.data)));
      //  : setThereUser('user not found');
    }
  }, [data, isError, isLoading]);
  if (data?.status == 'success' && data?.data?.token)
    return <Navigate to="/sidbar" replace />;
  if (localStorage.setItem('token') === null)
    return <Navigate to="/sidbar" replace />;

  return (
    <div className="flex flex-col text-gray-800 items-center justify-center h-screen ">
      <div className="bg-neutral-50 p-5 rounded-sm shadow">
        <p className="font-semibold text-lg text-green w-full text-center">
          Login
        </p>
        <div className=" flex flex-col ">
          <label htmlFor="Username">Email</label>
          <input
            id="email"
            value={formData.email}
            onChange={(e) => handleInput(e)}
            required={true}
            name="email"
            className="mt-2 w-96 focus:outline-none border-2 py-2 rounded-sm p-2 hover:duration-300 duration-300 border-gray-400 hover:border-gray-500 focus:border-green"
            placeholder="email"
          />
        </div>{' '}
        <div className="mt-5 flex flex-col">
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
        </div>{' '}
        <div className="mt-5">
          <PrimaryButton
            text="Login"
            color={'green'}
            widthbutton={'24rem'}
            textColor="neutral-100"
            align={'center'}
            onClick={() => handleFormData()}
          />
        </div>
      </div>
    </div>
  );
}

export default Login;
