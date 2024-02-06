import { useEffect, useState } from 'react';
import PrimaryButton from '../Component/PrimaryButton';
import { useLoginMutation } from '../features/auth';
import { Navigate } from 'react-router-dom';

function Login() {
  const checkLogout = localStorage.getItem('admin');
  const [login, { data, isError, isLoading }] = useLoginMutation();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  console.log('data', data);

  const handleInput = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleFormData = () => {
    login(formData);
  };
  useEffect(() => {
    if (!isError && !isLoading && data && data?.status == 'success') {
      JSON.stringify(localStorage.setItem('admin', JSON.stringify(data?.data)));
    }
  }, [data, isError, isLoading]);
  useEffect(() => {
    const checkLogout = localStorage.getItem('admin');
    if (data?.data?.token && checkLogout && data?.status == 'success') {
      <Navigate to="/sidbar" replace />;
    } else if (!data?.data?.token && !checkLogout) {
      <Navigate to="/" replace />;
    }
  }, [data?.status, checkLogout, data?.data?.token]);
  // useEffect(() => {
  //   const checkLogout = localStorage.getItem('admin');
  //   if (!data?.data?.token && !checkLogout && data?.status == 'success')
  //     <Navigate to="/" replace />;
  // }, [data?.data?.token, data?.status, checkLogout]);

  // if ( && data?.data?.token && checkLogout)
  //   return <Navigate to="/sidbar" replace />;

  return (
    <div className="flex flex-col justify-center items-center h-screen text-gray-800">
      <div className="p-5 bg-neutral-50 shadow flex flex-col">
        <p className="font-semibold text-lg text-green text-center">Login</p>
        <div className="mt-5 flex flex-col">
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
        </div>
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
