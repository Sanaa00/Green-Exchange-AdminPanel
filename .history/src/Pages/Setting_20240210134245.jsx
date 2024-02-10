import AddAdminForm from '../Component/AddAdminForm';
import AddCategoryForm from '../Component/AddCategoryForm';
import AddCityForm from '../Component/AddCityForm';

function Setting() {
  return (
    <div className="p-5 grid grid-cols-2">
      <div className="flex flex-col">
        {' '}
        <p className="font-semibold text-lg text-green">Add Admin</p>
        <AddAdminForm />
      </div>{' '}
      <div className="flex flex-col">
        {' '}
        <p className="font-semibold text-lg text-green">Add City</p>
        <AddCityForm />
      </div>
      <div className="flex flex-col">
        {' '}
        <p className="font-semibold text-lg text-green">Add Category</p>
        <AddCategoryForm />
      </div>
    </div>
  );
}

export default Setting;
