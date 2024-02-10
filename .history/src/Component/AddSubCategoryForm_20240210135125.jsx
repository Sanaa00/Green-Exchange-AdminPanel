function AddSubCategoryForm() {
  const [addSubCategory] = useAddCategoryMutation();
  const [subcategory, setSubCategory] = useState({
    english: '',
    kurdi: '',
    arabic: '',
  });
  return <div></div>;
}

export default AddSubCategoryForm;
