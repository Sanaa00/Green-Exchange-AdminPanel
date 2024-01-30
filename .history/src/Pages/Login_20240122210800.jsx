function Login() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  console.log('form data', formData);
  const handleInput = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleFormData = () => {
    //add to route
  };
  return (
    <div className="flex flex-col text-gray-800">
      <div className="mt-5 flex flex-col">
        <label htmlFor="Username">Username</label>
        <input
          id="username"
          value={formData.username}
          onChange={(e) => handleInput(e)}
          required={true}
          name="username"
          className="mt-2 w-96 focus:outline-none border-2 py-2 rounded-sm p-2 hover:duration-300 duration-300 border-gray-400 hover:border-gray-500 focus:border-green"
          placeholder="username"
        />
      </div>

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

export default Login;
