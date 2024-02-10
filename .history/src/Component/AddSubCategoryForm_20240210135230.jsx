function AddSubCategoryForm() {
  const [addSubCategory] = useAddCategoryMutation();
  const [subcategory, setSubCategory] = useState({
    parentCategory: '',
    english: '',
    kurdi: '',
    arabic: '',
  });
  return <div></div>;
}

export default AddSubCategoryForm;
