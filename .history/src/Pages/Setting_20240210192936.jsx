import AddAdminForm from '../Component/AddAdminForm';
import AddCategoryForm from '../Component/AddCategoryForm';
import AddCityForm from '../Component/AddCityForm';
import AddSubCategoryForm from '../Component/AddSubCategoryForm';

function Setting() {
  return (
    <div className="p-5 flex flex-wrap ">
      <div className="flex flex-col w-1/2">
        {' '}
        <p className="font-semibold text-lg text-green w-full">Add City</p>
        <AddCityForm />
      </div>
      <div className="flex flex-col w-1/2">
        {' '}
        <p className="font-semibold text-lg text-green w-full">Add Category</p>
        <AddCategoryForm />
      </div>{' '}
      <div className="flex flex-col w-1/2 mt-5">
        {' '}
        <p className="font-semibold text-lg text-green w-full">
          Add Sub Category
        </p>
        <AddSubCategoryForm />
      </div>{' '}
      <div className="flex flex-col w-1/2">
        {' '}
        <p className="font-semibold text-lg text-green w-full">Add Admin</p>
        <AddAdminForm />
      </div>{' '}
    </div>
  );
}

export default Setting;
