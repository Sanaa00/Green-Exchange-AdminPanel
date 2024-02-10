function AddSubCategoryForm() {
  const [addSubCategory] = useAddCategoryMutation();
  const [subcategory, setSubCategory] = useState({
    parentCategory: '',
    english: '',
    kurdi: '',
    arabic: '',
  });
  const handleInput = (e) => {
    //     setCity(e.target.value);
    setSubCategory({ ...subcategory, [e.target.name]: e.target.value });
  };
  //   };
  const handleFormData = () => {
    addCategory(subcategory);
    console.log(subcategory);
  };
  return <div></div>;
}

export default AddSubCategoryForm;
