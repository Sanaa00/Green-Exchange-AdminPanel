import { useState } from 'react';

function AddCategoryForm() {
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
  return <div></div>;
}

export default AddCategoryForm;
