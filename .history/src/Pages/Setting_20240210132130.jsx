import AddAdminForm from '../Component/AddAdminForm';

function Setting() {
  return (
    <div className="p-5 grid grid-cols-2">
      <p className="font-semibold text-lg text-green">Add Admin</p>
      <AddAdminForm />
    </div>
  );
}

export default Setting;
