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
  return <div></div>;
}

export default Login;
